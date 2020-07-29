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
      require("../../assets/team/zach.png"),
      require("../../assets/team/adrian.png"),
      require("../../assets/team/alana.png"),
      require("../../assets/team/taylor.png"),
      require("../../assets/team/eugene.png")
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
          headline={<>Small Team. Big Impact.<span className="headline-emphasis"></span></>}
          subhead="We're startup industry veterans who care deeply about Making A Difference."
        />

        <FeaturedText textLongStatement list={["Little Universe is neither a traditional digital agency nor a venture-backed technology startup - business models that, even with the best intentions and top talent, can ultimately pit impact against market forces. We count as our friends, allies, and clients dozens of agencies and startups doing important work for progressive causes, but through more than a decade of experience, we’ve identified a gap in the progressive technology ecosystem that we are uniquely suited to fill. ",
        "We believe that innovation - not simply “technology” - is a critical part of building movements, and that most organizations could use a little help in this area. We move at the speed of campaigns, we’ve got deep knowledge of the political and campaign tech space, and we understand the stakes have never been higher. ",
        "We are a team of designers, engineers, data scientists, and organizers who have helped transform the local food supply chain, democratize peer-to-peer and broadcast text messaging, and secure victories at the polls, from marriage equality ballot measures to Barack Obama's two  Presidential campaigns. We think Donald Trump is a racist imbecile and a criminal, and we want to help defeat him in 2020, but we know the most important battles of our time will be fought long after he’s gone. We want to mine the sum of our experiences and the depth of our outrage to make a difference on the front lines of the fight for justice and equality.",
        <span>We're not here to build a brand, or to make money for investors. We are here for you, and we are here to win.</span>
        ]}/>
        <FeaturedText textForMemberLeft className="adrian-member" memberTitle="Founder" memberName="Adrian Del Balso" text="Adrian has a deep background in leading product teams for impact. His decade of product, design and frontend engineering experience have been focused on engaging users with digital tools to better their lives and communities." dominantColor="darkBlue"/>
        <FeaturedText textForMemberRight className="zach-member" memberTitle="Founder" memberName="Zach Smith" text="Zach has a proven record and mastery of full-stack development and thoughtful engineering architecture for projects at all scales. He has architected large scale data applications in the healthcare, financial, and political tech industries." dominantColor="lightBlue"/>
        <FeaturedText textForMemberLeft className="alana-member" memberTitle="Senior Developer" memberName="Alana Simoncelli" text="Alana develops products across platforms and formats with close attention to detail and thoughtful responsiveness to context. She's an experience team leader and communicator, and structures development processes with intelligence and conviction." dominantColor="pink"/>
        <FeaturedText textForMemberRight className="taylor-member" memberTitle="Senior Designer" memberName="Taylor Zanke" text="Taylor is a designer passionate about doing work that matters. With a background in Architecture and Graphic Design, he brings a rigorous yet flexible process to every project. He creates clean visual design and thoughtful UX." dominantColor="yellow"/>
        <FeaturedText textForMemberLeft className="eugene-member" memberTitle="Senior Developer" memberName="Eugene Butler" text="Eugene is a meticulous and detail-oriented developer with deep experience in full-stack development environments. He brings a scalability mindset to product problems, offering broad value to all product cycles." dominantColor="darkBlue"/>
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default About;
