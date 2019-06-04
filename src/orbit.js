import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { tween, easing } from 'popmotion'
import PropTypes from 'prop-types'
import { forEach, camelCase, clamp, cloneDeep, debounce } from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

function getStyles(node, properties) {
  if (!properties || properties.length === 0) return {}
  let computed = {}
  try {
    computed = window.getComputedStyle(node)
  } catch (e) {
    console.error(e)
    return {}
  }
  let styles = {}
  properties.forEach((property) => {
    const c = computed.getPropertyValue(property)
    if (property === 'opacity') {
      styles[camelCase(property)] = parseFloat(c)
    } else {
      styles[camelCase(property)] = c
    }
  })
  // console.warn('styles', node, properties, styles)
  return styles
}

// Global containing all the nodes
// (could maybe be a const, but probably doesn't matter)
let nodes = {}

function setNode(name, ref, properties = []) {
  if (name !== undefined) {
    if (ref) {
      const node = ReactDOM.findDOMNode(ref)
      if (node) {
        nodes[name] = {
          styles: getStyles(node, properties),
          position: node.getBoundingClientRect()
        }
      }
    }
  }
}

export function clearAll() {
  nodes = {}
}

// Freeze: disable all animations when true
let freeze = false

export function freezeAnimation(duration = 300) {
  freeze = true
  setTimeout(() => { freeze = false }, duration)
}

// Global containing node animations
let animations = {}

export function get(name) {
  if (animations[name]) {
    return animations[name]
  }
}
export function stop(name) {
  if (animations[name]) {
    animations[name].stop()
  }
}

export function stopAll() {
  forEach(animations, (v, k) => {
    v.stop()
  })
}

export function finish(name) {
  if (animations[name]) {
    animations[name].seek(1)
  }
}

export function finishAll() {
  forEach(animations, (v, k) => {
    v.seek(1)
  })
}

export class Transporter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: undefined,
      currentNodeStyle: undefined,
      placeholderStyle: {}
    }
    this.childRef = React.createRef()
    this.onScroll = debounce(this.onScroll, 100)
  }
  componentDidMount() {
    const {
      name,
      show,
      properties = [],
      guaranteedFirst,
      overrides = {},
      overrideOldPosition,
      onlyX,
      onlyY,
      noTransition,
      unstableOnUnmount
    } = this.props

    // If "unstable on unmount", movement/unmounting of sibling components will change position
    // on page. Use expensive scroll listener to update page location instead of updating once
    // on unmount.
    if (unstableOnUnmount) {
      window.addEventListener('scroll', this.onScroll)
    }

    // If "no transition", skip directly to shown status on mount.
    if (noTransition) {
      setNode(name, this.childRef.current, properties)
      this.setState({ anim: 'shown' })
      return
    }

    // If DOM node exists, show is true, previous node state exists, and node is not guaranteed to be first in series,
    // animate phantom growth at child location, animate child from old location to new.
    if (show && this.childRef.current) {
      if (nodes[name] && !guaranteedFirst) {
        this.animateChild()
        this.animateGrowingPhantom()
      }
      setNode(name, this.childRef.current, properties)
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { anim } = this.state
    const {
      show,
      name,
      children,
      properties = [],
      guaranteedFirst,
      ease = easing.easeInOut,
      duration = 1000
    } = this.props

    // Every update, check if show has changed.
    if (prevProps.show !== show) {
      // If show is false and no dom node already doesn't exist, bail.
      // Child is already gone, we can't animate anything.
      if (!show && !ReactDOM.findDOMNode(this.childRef && this.childRef.current)) {
        return
      }

      if (show) {
        const notFirst = nodes[name] && ReactDOM.findDOMNode(this.childRef && this.childRef.current) && !guaranteedFirst
        // If this isn't the first time a node of this name has existed, play animations from old position to new
        if (notFirst) {
          this.animateChild()
          this.animateGrowingPhantom()
        } else {
          // If this is the first time the node has existed, no animation is possible. Short-circuit.
          this.setState({ anim: 'shown' })
        }

        // Stash the current node style here for use when shrinking.
        return this.setState({ currentNodeStyle: nodes[name] })
      }

      // If show has become false, start hiding the node.
      if (!show && nodes[name] && this.state.currentNodeStyle && this.state.currentNodeStyle.position) {
        this.setState({ anim: 'hiding' })
        this.animateShrinkingPhantom()
      }
    }
  }

  componentWillUnmount() {
    const { name, properties, annihilate, unstableOnUnmount } = this.props
    if (!unstableOnUnmount) {
      setNode(name, this.childRef.current, properties)
    } else {
      window.removeEventListener("scroll", this.onScroll)
    }

    if (annihilate) {
      delete nodes[name]
    }
  }

  onScroll = () => {
    // Expensive listener: if thing is shown, update node position and styles
    const { name, properties } = this.props
    const { anim } = this.state
    if (anim === "shown" ) {
      setNode(name, this.childRef.current, properties)
    }
  }

  animateChild = () => {
    // If freeze global is set, don't do anything.
    if (freeze) {
      this.setState({ anim: 'shown' })
      return null
    }
    const { debug, name, duration = 1000, ease = easing.easeInOut, stopPrev = true, properties, onlyX, onlyY, overrides, overrideOldPosition } = this.props
    const oldNode = nodes[name]
    const newNode = {
      styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
      position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect().toJSON()
    }

    let translateX = onlyY ? 0 : oldNode.position.left - newNode.position.left || 0
    let translateY = onlyX ? 0 : oldNode.position.top - newNode.position.top || 0
    let scaleX = clamp(oldNode.position.width / newNode.position.width, 0, 1000) || 0
    let scaleY = clamp(oldNode.position.height / newNode.position.height, 0, 1000) || 0

    if (overrideOldPosition) {
      translateX = onlyY ? 0 : overrideOldPosition.left - newNode.position.left || 0
      translateY = onlyX ? 0 : overrideOldPosition.top - newNode.position.top || 0
      scaleX = clamp(overrideOldPosition.width / newNode.position.width, 0, 1000) || 0
      scaleY = clamp(overrideOldPosition.height / newNode.position.height, 0, 1000) || 0

    }
    const oldStyles = {
      ...oldNode.styles,
      transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
    }

    this.setState({ anim: 'showing' })
    if (debug) {
      console.warn('animating child', name, oldStyles, newNode.styles)
    }
    if (stopPrev) {
      stop(name)
    }
    const animation = tween({
      from: oldStyles,
      to: {
        ...newNode.styles,
        transform: `translate(0px, 0px) scale(1, 1)`
      },
      ease,
      duration
    }).start({
      update: (v) => {
        this.setState({
          anim: 'showing', style: {
            ...v,
            top: newNode.position.top,
            left: newNode.position.left,
            width: newNode.position.width,
            height: newNode.position.height,
            margin: 0,
            maxWidth: null,
            // width: null,
            position: 'relative',
            transformOrigin: 'top left',
            ...overrides
          }
        })
      },
      complete: () => {
        setNode(name, this.childRef.current, properties)
        if (this.childRef.current && ReactDOM.findDOMNode(this.childRef.current)) {
          this.setState({ anim: 'shown', style: {}, placeholderStyle: {}, currentNodeStyle: nodes[name] })
        } else {
          // console.warn('node disappeared', name, ReactDOM.findDOMNode(this.childRef.current))
        }
      }
    })

  }

  animateGrowingPhantom = () => {
    if (freeze) {
      this.setState({ anim: 'shown' })
      return null
    }
    const { name, duration, debug } = this.props
    const old = nodes[name]
    const newPosition = ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect().toJSON()
    const styles = getStyles(ReactDOM.findDOMNode(this.childRef.current), ['margin'])
    const expectedSize = {
      height: `${newPosition.height}px`,
      width: `${newPosition.width}px`
    }
    if (debug) {
      console.warn('animating growing phantom', name, 'expectedSize', expectedSize)
    }
    tween({
      from: {
        height: `${newPosition.height}px`,
        width: `${newPosition.width}px`,
        transform: `scale(0, 0)`
      },
      to: {
        transform: `scale(1, 1)`
      },
      ease: easing.easeInOut,
      duration
    }).start({
      update: (v) => {
        this.setState({
          placeholderStyle: {
            ...v,
            ...expectedSize,
            top: old.position.top,
            left: old.position.left,
            margin: styles.margin
          },
        })
      },
      complete: () => {
        this.setState({ placeholderStyle: {} })
      }
    })
  }

  animateShrinkingPhantom = () => {
    if (freeze || !this.state.currentNodeStyle) {
      this.setState({ anim: null })
      return null
    }
    
    const { height, width, top, left } = this.state.currentNodeStyle.position
    const { name, debug, ease = easing.easeInOut, duration = 1000 } = this.props

    if (debug) {
      console.warn('animating shrinking phantom', name, height, width, top, left)
    }
    // Animate style of phantom (shrink to nothing)
    const animation = tween({
      from: {
        height: `${height}px`,
        width: `${width}px`,
        transform: `scale(1, 1)`
      },
      to: {
        transform: `scale(0, 0)`
      },
      ease,
      duration
    }).start({
      update: (v) => {
        this.setState({
          placeholderStyle: {
            ...v,
            top: top,
            left: left,
            position: 'fixed'
          }
        })
      },
      complete: () => {
        this.setState({ placeholderStyle: {}, style: {}, anim: null })
      }
    })

  }

  render() {
    const { debug, children, show, name, noTransition } = this.props
    const { anim, placeholderStyle } = this.state
    const child = React.cloneElement(children, {
      ref: this.childRef,
      anim: 'shown'
    })

    if (noTransition) {
      if (show) return child
      return null
    }

    if (anim === 'showing') {
      const child = React.cloneElement(children, {
        ref: this.childRef,
        anim,
        style: { ...this.props.children.props.style, ...this.state.style }
      })
      return (
        <>
        <div style={{ ...placeholderStyle, backgroundColor: debug ? 'purple' : undefined, opacity: debug ? 0.3 : undefined }} ></div>
        <div style={{ position: 'fixed', height: '100vh', width: '100vw', top: 0, left: 0 }}>
          {child}
        </div>
        </>
      )
    }
    if (anim === 'hiding') {
      return <div ref={this.childRef} style={{ ...this.state.placeholderStyle, backgroundColor: debug ? 'red' : undefined }}></div>
    }
    return (
      show ? child : null
    )
  }
}

Transporter.propTypes = {
  debug: PropTypes.bool,
  stopPrev : PropTypes.bool,
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  properties: PropTypes.array,
  overrides: PropTypes.object,
  guaranteedFirst: PropTypes.bool,
  overrideOldPosition: PropTypes.bool,
  onlyX: PropTypes.bool,
  onlyY: PropTypes.bool,
  noTransition: PropTypes.bool,
  unstableOnUnmount: PropTypes.bool,
  duration: PropTypes.number,
  ease: PropTypes.string,
  children: PropTypes.element.isRequired
}
