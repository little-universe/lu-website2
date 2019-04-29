import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { tween, easing } from 'popmotion'
import { camelCase, clamp, cloneDeep } from 'lodash'
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
    styles[camelCase(property)] = computed.getPropertyValue(property)
  })
  return styles
}

let nodes = {}

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
  }
  componentDidMount() {
    const { name, show, properties = relevantProps, guaranteedFirst, overrides = {}, overrideOldPosition, onlyX, onlyY, noTransition } = this.props
    if (noTransition) {
      if (ReactDOM.findDOMNode(this.childRef.current)) {
        nodes[name] = {
          styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
          position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
        }
      }
      return
    }
    console.warn('mounting', name, nodes[name])
    if (show && this.childRef.current) {
      if (nodes[name] && !guaranteedFirst) { // If entry already exists, transform from it
        console.warn('node already exists')
        const oldNode = nodes[name]
        const newNode = {
          styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
          position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect().toJSON()
        }
        console.warn('oldNode', oldNode, 'newNode', newNode)

        let translateX = onlyY ? 0 : oldNode.position.left - newNode.position.left || 0
        let translateY = onlyX ? 0 : oldNode.position.top - newNode.position.top || 0
        let scaleX = clamp(oldNode.position.width / newNode.position.width, 0, 1000) || 0
        let scaleY = clamp(oldNode.position.height / newNode.position.height, 0, 1000) || 0

        if (overrideOldPosition) {
          console.warn('overriding old position', name, overrideOldPosition)
          translateX = onlyY ? 0 : overrideOldPosition.left - newNode.position.left || 0
          translateY = onlyX ? 0 : overrideOldPosition.top - newNode.position.top || 0
          scaleX = clamp(overrideOldPosition.width / newNode.position.width, 0, 1000) || 0
          scaleY = clamp(overrideOldPosition.height / newNode.position.height, 0, 1000) || 0

        }
        const oldStyles = {
          ...oldNode.styles,
          transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
        }

        // console.warn('transforming', name, oldStyles, {
        //   ...newNode.styles,
        //   margin: 0,
        //   maxWidth: null,
        //   transform: `translate(0px, 0px) scale(1, 1)`
        // })

        tween({
          from: oldStyles,
          to: {
            ...newNode.styles,
            transform: `translate(0px, 0px) scale(1, 1)`
          },
          ease: easing.easeInOut,
          duration: 1000
        }).start({
          update: (v) => {
            // debugger
            this.setState({
              anim: 'showing', style: {
                ...v,
                top: newNode.position.top,
                left: newNode.position.left,
                // height: newNode.position.height,
                // width: newNode.position.width,
                margin: 0,
                maxWidth: null,
                position: 'fixed',
                transformOrigin: 'top left',
                ...overrides
              }
            })
            console.warn('setting position', name, 'top', newNode.position.top + translateY, 'left', newNode.position.left + translateX)
            console.warn('old', name, oldNode.position)
          },
          complete: () => {
            if (this.childRef.current) {
              nodes[name] = {
                styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
                position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
              }
              this.setState({ anim: 'shown', style: {}, placeholderStyle: {}, currentNodeStyle: nodes[name] })
            }
          }
        })

        // Do placeholder again: TODO: REMOVE
        const expectedSize = {
          height: `${newNode.position.height}px`,
          width: `${newNode.position.width}px`
        }
        tween({
          from: {
            height: `${newNode.position.height}px`,
            width: `${newNode.position.width}px`,
            transform: `scale(0, 0)`
          },
          to: {
            transform: `scale(1, 1)`
          },
          ease: easing.easeInOut,
          duration: 1000
        }).start({
          update: (v) => {
            this.setState({
              placeholderStyle: {
                ...v,
                ...expectedSize,
                top: oldNode.position.top,
                left: oldNode.position.left
              },
            })
          },
          complete: () => {
            this.setState({ placeholderStyle: {} })
          }
        })
      }
      nodes[name] = { // Set entry in nodes object
        styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
        position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
      }
      console.warn('setting dom node', name, nodes[name])
    }
  }
  componentWillUnmount() {
    const { name, properties, annihilate } = this.props
    if (nodes[name] && this.childRef && this.childRef.current) {
      nodes[name] = { // Set entry in nodes object
        styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
        position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
      }
    }
    if (annihilate) {
      delete nodes[name]
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { show, name, children, properties = relevantProps } = this.props
    if (prevProps.show !== show) {
      if (show) {
        if (nodes[name]) {
          console.warn('previous node exists, using traditional mount', name)
          this.setState({ anim: 'showing' })
          const old = nodes[name]
          const currentRef = ReactDOM.findDOMNode(this.childRef.current)
          let newStyles = getStyles(currentRef, properties)
          let newPosition = currentRef.getBoundingClientRect()

          // Is it ok to clamp old and new position to positive values? Is there any reason we would want negative ones?
          let translateX = old.position.left - newPosition.left
          let translateY = old.position.top - newPosition.top
          const scaleX = clamp(old.position.width / newPosition.width, 0, 1000) || 0
          const scaleY = clamp(old.position.height / newPosition.height, 0, 1000) || 0

          let oldStyles = {
            ...old.styles,
            transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
          }

          // Change the size/position of the new element, move and scale it from position/size of old element to normal
          tween({
            from: oldStyles,
            to: {
              ...newStyles,
              transform: `translate(0px, 0px) scale(1, 1)`
            },
            ease: easing.easeInOut,
            duration: 1000
          }).start({
            update: (v) => {
              this.setState({
                style: {
                  ...v, top: newPosition.top,
                  left: newPosition.left,
                  position: 'fixed',
                  // minWidth: null,
                  // maxWidth: null,
                  margin: 0
                }
              })
            },
            complete: () => {
              // debugger
              const node = {
                styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
                position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
              }
              console.warn('setting node', name, node)
              nodes[name] = node
              this.setState({ anim: 'shown', style: {}, placeholderStyle: {}, currentNodeStyle: nodes[name] })
            }
          })

          // Change size of placeholder (make it bigger!)
          const expectedSize = {
            height: `${newPosition.height}px`,
            width: `${newPosition.width}px`
          }
          // console.warn('expected placeholder size', expectedSize)
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
            duration: 1000
          }).start({
            update: (v) => {
              this.setState({
                placeholderStyle: {
                  ...v,
                  ...expectedSize,
                  top: old.position.top,
                  left: old.position.left
                },
              })
            },
            complete: () => {
              this.setState({ placeholderStyle: {} })
            }
          })
        } else {
          console.warn('this is the first time node is present')
          this.setState({ anim: 'shown' })
        }
        nodes[name] = {
          styles: getStyles(ReactDOM.findDOMNode(this.childRef.current), properties),
          position: ReactDOM.findDOMNode(this.childRef.current).getBoundingClientRect()
        }
        return this.setState({ currentNodeStyle: nodes[name] })
      }
      console.warn('showing', show, nodes[name], this.state.currentNodeStyle)
      if (!show && nodes[name] && this.state.currentNodeStyle && this.state.currentNodeStyle.position) {
        this.setState({ anim: 'hiding' })
        const { height, width, top, left } = this.state.currentNodeStyle.position
        console.warn('transforming?', name, { height, width })
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

  render() {
    const { children, show, name, noTransition } = this.props
    const { anim, placeholderStyle } = this.state
    const child = React.cloneElement(children, {
      ref: this.childRef
    })

    if (noTransition) {
      console.warn('no transition', name)
      return child
      console.warn('not showing', name)
      return null
    }
    const debug = false

    if (anim === 'showing') {
      const child = React.cloneElement(children, {
        ref: this.childRef,
        style: { ...this.props.children.props.style, ...this.state.style }
      })
      return (
        <>
          {child}
          <div style={{ ...placeholderStyle, backgroundColor: debug ? 'purple' : undefined, opacity: debug ? 0.3 : undefined }}></div>
        </>
      )
    }
    if (anim === 'hiding') {
      return <div style={{ ...this.state.placeholderStyle, backgroundColor: debug ? 'red' : undefined }}></div>
    }
    return (
      show ? child : null
    )
  }
}
