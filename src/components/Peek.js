import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../orbit'
// import * as THREE from 'three'
// import {hoverEffect} from '../vendor/displacement/hover.js'
// import * as imagesLoaded from '../vendor/displacement/imagesloaded.pkgd.min.js';
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
// import * as hover from '../vendor/displacement/hover.js';
// import * as three from '../vendor/displacement/three.min.js'

export default class Peek extends Component {
  state = {
  }

componentDidMount () {
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
      <div className={`peek
        ${peekedWork && "peek-work"}
      `}>
      {route !== 'work' && <>
        <Transporter name="caseStudyStrive" properties={['opacity', 'margin']} show={peekedWork} duration={250}>
          <div className="peek-case-study peek-case-study1 peeked" data-displacement="../assets/displacement/4.png" data-intensity="0.2" data-speedin="1.6" data-speedout="1.6">
          <img src={require("../assets/projects/motivote/motivote-hero.png")}/>
          <img src={require("../assets/projects/strive/strive-hero.png")}/>
          </div>
        </Transporter>
        <Transporter name="caseStudyStrive" properties={['opacity', 'margin']} show={!peekedWork && !['/work'].includes(route)} duration={250}>
          <div className="peek-case-study peek-case-study1 unpeeked">
          </div>
        </Transporter>

        <Transporter name="caseStudyMotivote" properties={['opacity']} show={peekedWork} duration={100}>
          <div className="peek-case-study peek-case-study2 peeked">
          <img src={require("../assets/projects/motivote/motivote-hero.png")}/>
          </div>
        </Transporter>
        <Transporter name="caseStudyMotivote" properties={['opacity']} show={!peekedWork && !['/work'].includes(route)} duration={100}>
          <div className="peek-case-study peek-case-study2 unpeeked" />
        </Transporter>

        <Transporter name="caseStudyBetterfin" properties={['opacity']} show={peekedWork} duration={150}>
          <div className="peek-case-study peek-case-study3 peeked">
          <img src={require("../assets/projects/betterfin/betterfin-hero.png")}/>
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
        <Transporter name="member-team" properties={['opacity', 'margin']} show={peekedAbout} duration={250}>
          <div className="peek-member-image peek-member-team peeked">

          </div>
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
