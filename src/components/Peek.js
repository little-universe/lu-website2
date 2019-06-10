import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Hero from '../components/Hero';
import { Transporter } from '../orbit'
import * as THREE from 'three'
import { tween, easing } from 'popmotion'
// import {hoverEffect} from '../vendor/displacement/hover.js'
// import * as imagesLoaded from '../vendor/displacement/imagesloaded.pkgd.min.js';
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
// import * as hover from '../vendor/displacement/hover.js';
// import * as three from '../vendor/displacement/three.min.js'

const vertexSrc = `
precision mediump float;

attribute vec4 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
	gl_Position = position;
	vUv = vec2( (position.x + 1.)/2., (-position.y + 1.)/2.);
}
`

const fragmentSrc = `
precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform sampler2D uDisp;

varying vec2 vUv;

float quarticInOut(float t) {
  return t < 0.2
    ? +10.0 * pow(t, 4.0)
    : -9.0 * pow(t - 1.0, 4.0) + 1.0;
}

void main() {
	// https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/gl_FragCoord.xhtml

	vec4 disp = texture2D(uDisp, vec2(0.1, 0.5) + (vUv - vec2(0., 0.5)) * (0.1 + 0.1 * (1.0 - uTrans)) );
	float trans = clamp(1.6  * uTrans - disp.r * 0.5 - vUv.x * 0.2, 0.0, 1.0);
	trans = quarticInOut(trans);
	vec4 color0 = texture2D(uTexture0, vec2(0.5 - 0.3 * trans, 0.5) + (vUv - vec2(0.5)) * (1.0 - 0.2 * trans));
	vec4 color1 = texture2D(uTexture1, vec2(0.5 + sin( (1. - trans) * 0.1), 0.5 ) + (vUv - vec2(0.5)) * (0.7 + 0.3 * trans));


	gl_FragColor = mix(color0, color1 , trans);
}
`;

class ThreeScene extends Component {
  state = {
    hovered: false,
    trans: 0
  }
  componentDidMount() {
    const { firstImageURL, secondImageURL, dispMapURL, immediate, bgColor='#ffffff', duration=1000, anim } = this.props
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 )
    this.camera.position.z = 1
    // this.camera = new THREE.PerspectiveCamera(
    //   75,
    //   width / height,
    //   0.1,
    //   1000
    // )
    // this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor('0xffffff', 0)
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    // Add Textures

    let textureArr = [];
    // const assetUrls = [
    //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/water.jpg',
    //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/water2.jpg',
    //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/disp.jpg'
    // ];
    let cnt = 0
    const assetUrls = ['https://upload.wikimedia.org/wikipedia/commons/6/62/Clear.png', secondImageURL, dispMapURL, firstImageURL]
    assetUrls.forEach((url, index) => {
      let img = new Image();

      let texture = new THREE.Texture();
      texture.flipY = false;
      textureArr.push(texture);

      img.onload = function (_index, _img) {
        let texture = textureArr[_index];
        texture.image = _img;
        texture.needsUpdate = true;
        texture.anisotropy = this.renderer.getMaxAnisotropy();

        cnt++;
        if (cnt == 4) this.start();
      }.bind(this, index, img);

      img.crossOrigin = "Anonymous";
      img.src = url;
    })
    this.textureArr = textureArr

    this.mat = new THREE.RawShaderMaterial({
      uniforms: {
        uTrans: { value: this.state.trans },
        uTexture0: { value: textureArr[0] },
        uTexture1: { value: textureArr[1] },
        uDisp: { value: textureArr[2] },
      },
      vertexShader: vertexSrc,
      fragmentShader: fragmentSrc
    });

    let geo = new THREE.PlaneGeometry(2, 2);
    let mesh = new THREE.Mesh(geo, this.mat)
    this.scene.add(mesh);

    if (immediate && anim === 'shown') {
      tween({
        from: { trans: 0 },
        to: { trans: 1 },
        duration,
        ease: easing.quarticInOut
      }).start(({ trans }) => {
        this.setState({ trans })
        this.renderScene()
      })
    }
    // this.start()
  }
  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
  start = () => {
    const { anim } = this.props
    if (anim !== 'shown') {
      setTimeout(this.start, 10)
      return
    }
    if (!this.frameId) {
      this.renderer.copyTextureToTexture( {x: 0, y: 0} , this.textureArr[3], this.textureArr[1] )
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.mat.uniforms.uTrans.value = this.state.trans;
    this.renderer.render(this.scene, this.camera)
  }
  onMouseEnter = () => {
    const { duration = 1000 } = this.props
    console.warn('onMouseEnter')
    tween({
      from: { trans: 0 },
      to: { trans: 1 },
      duration
    }).start(({ trans }) => {
      this.setState({ trans })
      this.renderScene()
    })
  }
  onMouseLeave = () => {
    const { duration = 1000 } = this.props
    console.warn('onMouseEnter')
    tween({
      from: { trans: 1 },
      to: { trans: 0 },
      duration
    }).start(({ trans }) => {
      this.setState({ trans })
      this.renderScene()
    })
  }
  render() {
    const { className } = this.props
    return (
      <div
        className={className}
        // style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      />
    )
  }
}

export default class Peek extends Component {
  state = {
  }

  componentDidMount() {
    window.hoverFunction()
    //
    //
    //     const tweenMax = document.createElement("tweenMax");
    //     tweenMax.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js";
    //     tweenMax.async = true;
    //     document.body.appendChild(tweenMax);
    //
    //     const hover = document.createElement("hover");
    //     hover.src = "../vendor/displacement/hover.js";
    //     hover.async = true;
    //     document.body.appendChild(hover);
    //
  }

  //
  // Array.from(document.querySelectorAll('.grid__item-img')).forEach((el) => {
  //   const imgs = Array.from(el.querySelectorAll('img'));
  //   new hoverEffect({
  //     parent: el,
  //     intensity: el.dataset.intensity || undefined,
  //     speedin: el.dataset.speedin || undefined,
  //     speedout: el.dataset.speedout || undefined,
  //     easing: el.dataset.easing || undefined,
  //     hover: el.dataset.hover || undefined,
  //     image1: imgs[0].getAttribute('src'),
  //     image2: imgs[1].getAttribute('src'),
  //     displacementImage: el.dataset.displacement
  //   });
  // });


  render() {

    const { peekPage, location } = this.props;
    const route = location.pathname;
    const peekedWork = peekPage == "work" && !['/work'].includes(route)
    const peekedAbout = peekPage == "about" && !['/about'].includes(route)
    const peekedApproach = peekPage == "approach" && !['/approach'].includes(route)

    return (
      <>
        {/* <ThreeScene /> */}
        <div className={`peek
        ${peekedWork && "peek-work"}
      `}>
          {route !== 'work' && <>
            <Transporter name="caseStudyStrive" properties={['opacity', 'margin']} show={peekedWork} duration={250}>
              <ThreeScene
                immediate
                duration={1000}
                bgColor='0xf0f2f5'
                className="peek-case-study peek-case-study1 peeked"
                firstImageURL={require('../assets/blue-img.png')}
                secondImageURL={require("../assets/motivote-hero-color.png")}
                dispMapURL={require('../assets/7.jpg')}
                />
              {/* <div className="peek-case-study peek-case-study1 peeked" data-displacement="../assets/displacement/4.png" data-intensity="0.2" data-speedin="1.6" data-speedout="1.6">
                <img src={require("../assets/projects/motivote/motivote-hero.png")} />
                <img src={require("../assets/projects/strive/strive-hero.png")} />
              </div> */}
            </Transporter>
            <Transporter name="caseStudyStrive" properties={['opacity', 'margin']} show={!peekedWork && !['/work'].includes(route)} duration={250}>
              <div className="peek-case-study peek-case-study1 unpeeked">
              </div>
            </Transporter>

            <Transporter name="caseStudyMotivote" properties={['opacity']} show={peekedWork} duration={100}>
              <div className="peek-case-study peek-case-study2 peeked">
                {/*<img src={require("../assets/projects/motivote/motivote-hero.png")} />*/}
              </div>
            </Transporter>
            <Transporter name="caseStudyMotivote" properties={['opacity']} show={!peekedWork && !['/work'].includes(route)} duration={100}>
              <div className="peek-case-study peek-case-study2 unpeeked" />
            </Transporter>

            <Transporter name="caseStudyBetterfin" properties={['opacity']} show={peekedWork} duration={150}>
              <div className="peek-case-study peek-case-study3 peeked">
              {/*  <img src={require("../assets/projects/betterfin/betterfin-hero.png")} />*/}
              </div>
            </Transporter>
            <Transporter name="caseStudyBetterfin" properties={['opacity']} show={!peekedWork && !['/work'].includes(route)} duration={150}>
              <div className="peek-case-study peek-case-study3 unpeeked" />
            </Transporter>
          </>}
        </div>
        <div className={`peek
        ${peekedAbout && "peek-about"}
      `}>
          {route !== 'about' && <>
          <Transporter name="aboutText" properties={['opacity', 'margin']} show={peekedAbout} duration={500}>
            <div className="peek-text peeked">Small Team. Full Stack.</div>
          </Transporter>
          <Transporter name="aboutText" properties={['opacity', 'margin']}  show={!peekedAbout && !['/about'].includes(route)} duration={500}>
            <div className="peek-text unpeeked">Small Team. Full Stack.</div>
          </Transporter>
            <Transporter name="member-team" properties={['opacity', 'margin']} show={peekedAbout} duration={250}>
						<ThreeScene
							immediate
							duration={1000}
							bgColor='0xffffff, 0.0'
							className="peek-member-image peek-member-team peeked"
							firstImageURL={require('../assets/grey.png')}
							secondImageURL={require("../assets/team/team-1.jpg")}
							dispMapURL={require('../assets/7.jpg')}
							/>
						{/* <div className="peek-member-image peek-member-team peeked"> </div>*/}
            </Transporter>
            <Transporter name="member-team" properties={['opacity', 'margin']} show={!peekedAbout && !['/about'].includes(route)} duration={250}>
              <div className="peek-member-image peek-member-team unpeeked">
              </div>
            </Transporter>

          </>}
        </div>
        <div className={`peek
        ${peekedApproach && "peek-approach"}
      `}>
          {route !== 'approach' && <>
            <Transporter name="approachText" properties={['opacity', 'margin']} show={peekedApproach} duration={250}>
              <div className="peek-text peeked">We Build Trust To Deliver Progress</div>
            </Transporter>
            <Transporter name="approachText" properties={['opacity', 'margin']} show={!peekedApproach && !['/approach'].includes(route)} duration={250}>
              <div className="peek-text unpeeked">We Build Trust To Deliver Progress</div>
            </Transporter>
            <Transporter name="approach1" properties={['opacity', 'margin']} show={peekedApproach} duration={250}>
              <div className="peek-approach-image peek-approach-1 peeked"></div>
            </Transporter>
            <Transporter name="approach1" properties={['opacity', 'margin']} show={!peekedApproach && !['/approach'].includes(route)} duration={250}>
              <div className="peek-approach-image peek-approach-1 unpeeked"></div>
            </Transporter>
          </>}
        </div>
      </>
    )
  }
}
