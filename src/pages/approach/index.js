import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import ApproachStatement from '../../components/ApproachStatement';
import WorkTextCentered from '../../components/WorkTextCentered';
import ApproachArticle from '../../components/ApproachArticle';
import WorkImageLeft from '../../components/WorkImageLeft';
import WorkImageRight from '../../components/WorkImageRight';
import WorkTogether from '../../components/WorkTogether';

class Approach extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Logo/>
        <Hero headline="Approach" subhead="Small Team. Full Stack. Big Impact."/>
        <div className="content-container">
          <ApproachStatement className="" title="We Love Product" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          <WorkImageLeft className="bottle" headline="We focus on results and work towards them." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          <WorkTextCentered title="Process Meets Purpose" paragraph="We're experts in design and development processes which make the most of resources and keep an eye to deadlines. As a result, we make sure to lead with a flexible working attitude that is responsive to outcomes and goals. We won't mindlessly build features just to ship something, we break down big goals into milestones and work with purpose towards them."/>
          <ApproachStatement className="" title="We Focus On Results" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          <WorkImageRight className="bottle" headline="We focus on results and work towards them." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          <div className="articles-section">
            <ApproachArticle title={["Motion JS: A Context Preserving Animation Framework", ""]} paragraph="Motion JS is a React library which helps designers and developers retain user context in web applications and in other web domains, structuring keyframes and transitions around key objects and durations."/>
            <ApproachArticle title={["Wireframing Does More Than Develop Design", ""]} paragraph="Motion JS is a React library which helps designers and developers retain user context in web applications and in other web domains, structuring keyframes and transitions around key objects and durations."/>
            <ApproachArticle title={["Designing for Social Good", ""]} paragraph="Motion JS is a React library which helps designers and developers retain user context in web applications and in other web domains, structuring keyframes and transitions around key objects and durations."/>
          </div>
          <ApproachStatement className="" title="Make Meaningful Work" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </div>
        <WorkTogether headline="Let's get to know each other"/>
      </>
    )
  }
}

export default Approach;
