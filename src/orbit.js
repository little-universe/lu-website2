import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { tween, easing } from 'popmotion'
import { camelCase, clamp, cloneDeep, debounce } from 'lodash'
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

let nodes = {}
let freeze = false

export function freezeAnimation(duration = 300) {
  console.warn('freezing animation', duration)
  freeze = true
  setTimeout(() => { freeze = false; console.warn('unfreezing', freeze) }, duration)
}

export function clearAll() {
  console.warn('clearing nodes', nodes)
  nodes = {}
  console.warn('nodes now', nodes)
}

export function orbit(name, properties) {
  let [styleState, setStyleState] = useState({})
  let ref = useRef(null)

  useLayoutEffect(() => {
    let old = nodes[name]
    delete nodes[name]

    let newNode = ref.current

    if (old && newNode) { // we've got a new node and old styles! So it's time to animate!
      let newStyles = getStyles(newNode, properties)
      let newPosition = newNode.getBoundingClientRect()

      console.log(newPosition)

      let translateX = old.position.left - newPosition.left
      let translateY = old.position.top - newPosition.top

      let oldStyles = {
        ...old.styles,
        transform: `translate(${translateX}px, ${translateY}px)`
      }

      console.log(`translate(${translateX}px, ${translateY}px)`)

      setStyleState(oldStyles)

      tween({
        from: oldStyles,
        to: {
          ...newStyles,
          transform: `translate(0px, 0px)`
        },
        ease: easing.easeInOut,
        duration: 3000
      }).start((v) => setStyleState({ ...v }))
    }
    return () => {
      nodes[name] = {
        styles: getStyles(ref.current, properties),
        position: ref.current.getBoundingClientRect()
      }
    }
  }, [])

  return {
    ref,
    style: styleState
  }
}

const relevantProps = []

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
    const { name, show, properties = relevantProps, guaranteedFirst, overrides = {}, overrideOldPosition, onlyX, onlyY, noTransition, unstableOnUnmount } = this.props
    if (unstableOnUnmount) {
      window.addEventListener('scroll', this.onScroll)
    }

    if (noTransition) {
      if (ReactDOM.findDOMNode(this.childRef.current)) {
        nodes[name] = {
          styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
          position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
        }
      }
      this.setState({ anim: 'shown' })
      return
    }
    console.warn('mounting', name, nodes[name])
    if (show && this.childRef.current) {
      if (nodes[name] && !guaranteedFirst) { // If entry already exists, transform from it
        console.warn('previous entry exists', name)
        this.animateChild()
        this.animateGrowingPhantom()
      }

      nodes[name] = { // Set entry in nodes object
        styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
        position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
      }
      // console.warn('setting dom node', name, nodes[name])
    }

  }
  onScroll = () => {
    const { name, properties } = this.props
    const { anim } = this.state
    console.warn('scrolling', name, anim, anim === "shown",  this.childRef && this.childRef.current && ReactDOM.findDOMNode(this.childRef.current))
    if (this.childRef && this.childRef.current && ReactDOM.findDOMNode(this.childRef.current)) {
      nodes[name] = { // Set entry in nodes object
        styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
        position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
      }
      console.warn('updating due to scroll', name, nodes[name])
    }
  }
  componentWillUnmount() {
    const { name, properties, annihilate, unstableOnUnmount } = this.props
    if (!unstableOnUnmount) {
      if (nodes[name] && this.childRef && this.childRef.current && ReactDOM.findDOMNode(this.childRef.current)) {
        nodes[name] = { // Set entry in nodes object
          styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
          position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
        }
        console.warn('unmounting', name, nodes[name])
      }
    } else {
      console.warn("unlistening", name)
      window.removeEventListener("scroll", this.onScroll)
    }

    if (annihilate) {
      delete nodes[name]
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { anim } = this.state
    const { show, name, children, properties = relevantProps, guaranteedFirst } = this.props
    // if (['showing', 'hiding'].includes(anim)) {
    //   console.warn('already animating', name, anim)
    //   return
    // }
    if (prevProps.show !== show) {
      if (!show && !ReactDOM.findDOMNode(this.childRef && this.childRef.current)) {
        // console.warn('ughh, child is already gone', name)
        return
      }
      if (show) {
        // console.warn('showing', show, nodes[name], this.state.currentNodeStyle)
        if (nodes[name] && ReactDOM.findDOMNode(this.childRef && this.childRef.current) && !guaranteedFirst ) {
          // console.warn('prev node exists, animating', name, nodes[name], this.childRef)
          this.animateChild()
          this.animateGrowingPhantom()
        } else {
          //console.warn('this is the first time node is present, short circuiting', name, nodes[name], this.childRef)
          this.setState({ anim: 'shown' })
        }
        // if (ReactDOM.findDOMNode(this.childRef && this.childRef.current)) {
        //   nodes[name] = {
        //     styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
        //     position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
        //   }
        // }

        return this.setState({ currentNodeStyle: nodes[name] })
      }
      if (!show && nodes[name] && this.state.currentNodeStyle && this.state.currentNodeStyle.position) {
        this.setState({ anim: 'hiding' })
        const { height, width, top, left } = this.state.currentNodeStyle.position
        // console.warn('transforming?', name, { height, width })
        // Animate style of phantom (shrink to nothing)
        tween({
          from: {
            height: `${height}px`,
            width: `${width}px`,
            transform: `scale(1, 1)`
          },
          to: {
            transform: `scale(0, 0)`
          },
          ease: easing.easeInOut,
          duration: 1000
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
    }
  }

  animateChild = () => {
    if (freeze) {
      console.warn('animation frozen, skipping', this.props.name)
      this.setState({ anim: 'shown' })
      return null
    } else {
      console.warn('not frozen', this.props.name)
    }
    const { name, duration = 1000, ease=easing.easeInOut, properties, onlyX, onlyY, overrides, overrideOldPosition } = this.props
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
    console.warn('animating child', name, oldNode, newNode, translateX, translateY, scaleX, scaleY)
    // debugger
    this.setState({ anim: 'showing' })
    tween({
      from: oldStyles,
      to: {
        ...newNode.styles,
        transform: `translate(0px, 0px) scale(1, 1)`
      },
      ease,
      duration
    }).start({
      update: (v) => {
        // console.warn('v', v)
        // debugger
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
        // debugger
        if (this.childRef.current && ReactDOM.findDOMNode(this.childRef.current)) {
          // console.warn('updating node', name, )
          nodes[name] = {
            styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
            position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
          }
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
    // NOTE: Need to move this outside of position: fixed hover box for it to have any effect
    const { name, duration } = this.props
    const old = nodes[name]
    const newPosition = ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect().toJSON()
    const styles = getStyles(ReactDOM.findDOMNode(this.childRef.current), ['margin'])
    const expectedSize = {
      height: `${newPosition.height}px`,
      width: `${newPosition.width}px`
    }
    // console.warn('expected placeholder size', expectedSize)
    // console.warn('string styles', name, styles)
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

  render() {
    const { children, show, name, noTransition } = this.props
    const { anim, placeholderStyle } = this.state
    const child = React.cloneElement(children, {
      ref: this.childRef,
      anim: 'shown'
    })

    if (noTransition) {
      // console.warn('no transition', name)
      if (show) return child
      // console.warn('not showing', name)
      return null
    }
    const debug = false

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
