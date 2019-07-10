import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class About extends Component {
  state = {
    hovered: undefined,
    route: 'about'
  }

  componentDidMount() {
    [
      require("../../assets/team/team-1-small.jpg"),
      require("../../assets/team/zach.png"),
      require("../../assets/team/adrian.png"),
      require("../../assets/team/alana.png"),
      require("../../assets/team/taylor.png")
    ].forEach(preloadImage)
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          secondaryHero
          className="about-hero"
          headline={<>Small Team. <span className="headline-emphasis">Big Impact.</span></>}
          subhead="We're startup industry veterans who care deeply about Making A Difference."
        />

        <FeaturedText textLongStatement list={["We are a team of designers, engineers, data scientists, and organizers who love working together. We have helped transformed the local food supply chain, democratized peer-to-peer and broadcast text messaging, and helped win countless victories at the polls, from local ballot measures to Presidential campaigns. We’ve worked together as campaign operatives, and as startup founders, employees, and contractors. We’ve won some, we’ve lost some. Now we’re all grown-up (ish), and we’ve decided to build something new. Something different. We want to mine the sum of our experiences and the depth of our outrage to make a difference on the front lines of the fight for justice and equality. We think Donald Trump is a racist, an imbecile, and a criminal, and we want to help defeat him in 2020, but we know the most important battles will be fought long after he’s gone.", "Little Universe is neither a traditional digital agency nor a venture-backed technology startup - business models that, even with the best intentions and top talent, can ultimately pit impact against powerful market forces. We count as friends, allies, and clients dozens of agencies and startups doing critical work for progressive causes, but through more than a decade of experience, we saw a gap in the progressive technology ecosystem that we are uniquely suited to fill.", "If there’s an affordable product you can buy that will meet your needs, do it. If you need a full suite of basic campaign tech, strategy, and services, we can direct you to some outstanding agencies. If you are a startup that just needs to hire another engineer, we’d be happy to send your JD around.  But if you have unmet technology needs, complex data or infrastructure problems to solve, unreasonably short timelines to meet, or opportunities to win more votes, raise more money, and create more impact through strategic innovation, we want to work with you."]}/>
        <FeaturedText textForMemberLeft className="adrian-member" memberTitle="Founder" memberName="Adrian Del Balso" text="Adrian has a deep background in leading product teams for impact. His decade of product, design and frontend engineering experience have been focused on engaging users with digital tools to better their lives and communities." dominantColor="darkBlue"/>
        <FeaturedText textForMemberRight className="zach-member" memberTitle="Founder" memberName="Zach Smith" text="Zach has a proven record and mastery of full-stack development and thoughtful engineering architecture for projects at all scales. He has architected large scale data applications in te healthcare, financial, and political tech industries." dominantColor="lightBlue"/>
        <FeaturedText textForMemberLeft className="alana-member" memberTitle="Senior Developer" memberName="Alana Simoncelli" text="Alana develops products across platforms and formats with close attention to detail and thoughtful responsiveness to context. She's an experience team leader and communicator, and structures development processes with intelligence and conviction." dominantColor="pink"/>
        <FeaturedText textForMemberRight className="taylor-member" memberTitle="Senior Designer" memberName="Taylor Zanke" text="Taylor is a designer passionate about doing work that matters. With a background in Architecture and Graphic Design, he brings a rigorous yet flexible process to every project. He creates clean visual design and thoughtful UX." dominantColor="yellow"/>
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default About;
