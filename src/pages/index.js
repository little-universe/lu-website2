import React, { useState } from "react"
import { theme } from "../styles/theme"
import { useInView } from "react-intersection-observer"
import { without, uniq, last, first, throttle, find } from "lodash"
import PageContainer from "../components/pageContainer"
import Hero from "../components/hero"
import Section from "../components/section"
import SEO from "../components/seo"
import Container from "../components/ui/Container"
import Grid from "../components/ui/Grid"
import Text from "../components/ui/Text"
import List from "../components/ui/List"
import cc1 from "../images/client-work/carbon-counts/cc-1.png"
import acc1 from "../images/client-work/access-clean-california/acc-1.png"
import abc1 from "../images/client-work/abc-home/abc-1.png"
import outraise1 from "../images/client-work/outraise/outraise-1.png"

const IndexPage = () => {
  const options = {
    threshold: .15,
    triggerOnce: true
  }

  const [ ref, inView ] = useInView(options)
  const [ ref2, inView2 ] = useInView(options)
  const [ ref3, inView3 ] = useInView(options)
  const [ ref4, inView4 ] = useInView(options)
  const [ ref5, inView5 ] = useInView(options)
  const [ ref6, inView6 ] = useInView(options)


  // debugger

  return (
      <PageContainer>
        <SEO title="Home" />

        <div ref={ref}>
          <Hero inView={inView} />
        </div>

        <div ref={ref2}>
          <Section bigBottomPadding>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Container borderTop inView={inView2}>
                    <Text paragraph>We are a team of technology veterans who know how to ship successful products efficiently. We’re always looking to the future, thinking strategically in design, engineering, and product.</Text>
                    <Text paragraph>You know your work best, but having tech partners who have scaled products, built and managed teams, and raised millions helps ensure we are all focused on the outcomes that matter, not just building cool tech.</Text>
                    <Text paragraph>You know how to solve complex human problems. We want to be your technology partner to widen your reach and fulfill your vision.</Text>
                  </Container>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Container borderTop inView={inView2}>
                    <Text paragraph bold xsmall>Highlights</Text>
                    <List unordered>
                      {highlights.map((h, i) =>
                        <li><Text small lightened key={i}>{h}</Text></li>
                      )}
                    </List>
                  </Container>
                </Grid>
              </Grid>
          </Section>
        </div>

        <div ref={ref3}>
          <Section bigBottomPadding>
            <Grid container spacing={3} mb={3}>
              <Grid item xs={12} sm={3} />
              {services.map((s, i) =>
                <Grid item xs={12} sm={3} key={i}>
                  <Container borderTop inView={inView3}>
                    <Text paragraph xsmall bold>{s.title}</Text>
                    <Text paragraph small>{s.description}</Text>
                    <List unordered>
                      {s.capabilities.map((c, i) =>
                        <li><Text small lightened key={i}>{c}</Text></li>
                      )}
                    </List>
                  </Container>
                </Grid>
              )}
            </Grid>
            <Grid container spacing={3}>
              {methodologies.map((m, i) =>
                <Grid item xs={12} sm={3} key={i}>
                  <Container borderTop inView={inView3}>
                    <Text paragraph xsmall bold>{m.title}</Text>
                    <Text paragraph small>{m.description}</Text>
                  </Container>
                </Grid>
              )}
            </Grid>
          </Section>
        </div>

        <div ref={ref4}>
          <Section bigBottomPadding inView={inView4}>
            <Grid container justifyContent='center' spacing={3}>
              <Grid item container xs={12} sm={8} alignItems='center'>
                <Text center>Little Universe was a game-changer for our product team. As a legacy retail brand venturing into e-commerce, we needed an agency that could step in and make an immediate impact. They were unafraid of diving into our code, and drove a significant conversion increase within 3 months.</Text>
                <Grid item container mt={3} alignItems='center'>
                  <Text small lightened>Alex Weininger, Head of Product</Text>
                  <Text small lightened paragraph>ABC Carpet & Home</Text>
                </Grid>
              </Grid>
            </Grid>
          </Section>
        </div>

        <div ref={ref5}>
          <Section bigBottomPadding>
            <Grid container spacing={3}>
              {caseStudies.map((c, i) => 
                <Grid item xs={12} sm={6} key={i}>
                  <Container borderTop inView={inView5}>
                    <Grid container alignItems='space-between' spacing={3}>
                      <Grid item xs={12}>
                        <Grid mb={1}><Text bold>{c.clientName}</Text></Grid>
                        <Grid><Text small lightened>{c.projectType}</Text></Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Container
                          // style={{minHeight: '550px'}}
                          card 
                          bgColor={`${c.bgColor ? c.bgColor : '#eaeaea'}`} 
                          workImg={c.image}
                          inView={inView5} 
                        />
                      </Grid>
                      <Grid item>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={8}>
                            <Text xsmall>{c.description}</Text>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <List unordered>
                              {c.services.map((s, i) =>
                                <li><Text xsmall lightened key={i}>{s}</Text></li>
                              )}
                            </List>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              )}
            </Grid>
          </Section>
        </div>

       <div ref={ref6}>
        <Section bigBottomPadding inView={inView6}>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item container xs={12} sm={8} alignItems='center'>
              <Text center><a href="mailto:adrian@littleuniverse.com">Get in touch</a></Text>
            </Grid>
          </Grid>
        </Section>
       </div>

      </PageContainer>
  )
}

export default IndexPage

const services = [
  {
    title: 'PM and Strategy',
    description: 'We work with you to navigate the complexity and cost of software problems, so you can see the forest and the trees.',
    capabilities: [
      'Product Strategy',
      'Roadmapping',
      'MVP Development',
      'Project Management',
      'SEO and Content Strategy',
      'Post Launch Optimization',
      'Brand Strategy'
    ]
  },
  {
    title: 'Design',
    description: 'Great user experiences require a thoughtful design foundation. We bring decades of design thinking and leadership experience to your organization.',
    capabilities: [
      'User Interface Design',
      'User Experience Design',
      'Information Architecture',
      'Rapid Prototyping',
      'Design Research',
      'User Research and Testing',
      'Animations and Motion',
      'Graphic Design',
    ]
  },
  {
    title: 'Engineering',
    description: 'Full stack and flexible, we can be your technical team or augment the one you have. We’ll guide you to the best tech for the job, or work with what you already have.',
    capabilities: [
      'Front End Development',
      'Back End Development',
      'Front End Scaling',
      'Back End Scaling',
      'Technical Architecture',
      'Planning and Tests',
      'Manual and Automated QA',
      'API and CMS Development',
    ]
  },
]

const methodologies = [
  {
    title: 'Agile',
    description: 'We believe the most efficient way to solve complex problems is to build and experiment. We do this early and often, to reveal assumptions and cast light on the most innovative software solutions to a problem.'
  },
  {
    title: 'Tech Stack',
    description: 'We work with the best technologies for the job, whatever that may be. Our expertise is in React, Redux, Next/Gatsby, Node, Rails, Postgres - to name a few.'
  },
  {
    title: 'Climate',
    description: 'We are on a mission to find the overlap between technology and climate change to play a direct role in solving the greatest crisis of our time.'
  },
]

const caseStudies = [
  {
    clientName: 'Carbon Counts',
    projectType: 'Startup',
    description: 'The $40 billion marketplace for carbon offsets is growing each year, and companies are increasingly prioritizing it as a method for reducing their climate impact. However, buying carbon offsets remains a daunting task for the average consumer. We helped Rare, a globally recognized climate non-profit, develop Carbon Counts, their first product intended for a North American audience.',
    services: [
      'Engineering',
      'MVP Development',
      'User Interface Design',
      'User Experience Design',
      'Front End Development',
      'Back End Development',
    ],
    image: cc1,
    // bgColor: '#00C19F',
    bgColor: '#fafafa',
    visitLink: '/'
  },
  {
    clientName: 'Access Clean California',
    projectType: 'NGO',
    description: 'We worked closely with Grid to develop a technical roadmap, ensuring functionality, scalability, and stability were accounted for as their internal product team sought to ramp up usage. We prepared a design audit of the existing product, proposed new design to fill gaps, built UI, and shipped iteratively and decisively to meet objectives. Additionally, we planned and developed technical infrastructure to securely verify the income of applicants.',
    services: [
      'Product Strategy',
      'Roadmapping',
      'User Interface Design',
      'User Experience Design',
      'Front End Development',
      'Back End Development',
      'Technical Architecture',
      'Planning and Tests',
    ],
    image: acc1,
    // bgColor: '#9B92F5',
    bgColor: '#fafafa',
    visitLink: '/'
  },
  {
    clientName: 'ABC Carpet and Home',
    projectType: 'E Commerce',
    description: 'ABC Carpet and Home is a storied, much beloved, New York City retailer known internationally for sourcing high quality rugs, craft furniture, and home goods ethically, sustainably, and intentionally. Founded in 1897, they have gained a reputation for providing a vibrant and playful shopping experience where discovery and joy are centered. Before being able to truly deliver an online experience that lived up to their reputation off-screen, they needed to make a number of design, technology, and infrastructural improvements.',
    services: [
      'Roadmapping',
      'User Interface Design',
      'User Experience Design',
      'Front End Development',
      'Back End Development',
      'Planning and Tests',
    ],
    image: abc1,
    // bgColor: '#3F35B6',
    bgColor: '#fafafa',
    visitLink: '/'
  },
  {
    clientName: 'Out Raise',
    projectType: 'Startup',
    description: 'We partnered with OutRaise to develop a product which would address the low-personalization marketplace of products designed for individual donors. OutRaise merges event planning and management functionality with an integrated donation layer. This makes it easy for users to host parties or gatherings, of any size, with a simple fundraising overlay. We designed, built, and shipped an entirely new digital presence and product for OutRaise.',
    services: [
      'Product Strategy',
      'Roadmapping',
      'User Interface Design',
      'User Experience Design',
      'Front End Development',
      'Back End Development',
    ],
    image: outraise1,
    // bgColor: '#FFC600',
    bgColor: '#fafafa',
    visitLink: '/'
  },
]

const highlights = [
  'Digital product experts',
  '3 decades collective experience',
  'Technology-first approach',
  'Agile product philosophy',
  'Builds stable and scalable tech'
]
