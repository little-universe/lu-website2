import React, { Component } from 'react'
import { Transporter } from './orbit'

class Homepage extends Component {
  state = {
    home: true
  }

  render() {
    return (
      <div className="homepage">
        <Nav homeActive={this.state.home} toggleHome={() => this.setState({ home: !this.state.home })} />
        {this.state.home && <HomepageContent homeActive={this.state.home} />}
        {!this.state.home && <AboutContent />}
      </div>
    )
  }
}

export default Homepage;

const Nav = ({ homeActive, toggleHome }) => {
  return (
    <nav>
      <Transporter name='logoSwitch' show={!homeActive}>
        <div className="brand" onClick={toggleHome} style={{width: '293px'}}>
            <svg viewBox="0 0 400 190" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="02_LU_MARK_Black" fill="#000000">
                  <g id="Mark_Shapes">
                    <path d="M395.717348,0 C397.899506,0 399.624268,1.81900769 399.534695,3.98891884 C397.432581,54.5152241 355.61138,94.8387741 304.325902,94.8387741 C253.040423,94.8387741 211.217316,54.5152241 209.119014,3.98891884 C209.027535,1.81900769 210.752297,0 212.934455,0 L395.717348,0 Z" id="Fill-1"></path>
                    <path d="M91.4791136,0 L3.81162973,0 C1.70761012,0 0,1.69951083 0,3.79355096 L0,185.883997 C0,187.978037 1.70761012,189.677548 3.81162973,189.677548 L186.769857,189.677548 C188.873877,189.677548 190.581487,187.978037 190.581487,185.883997 L190.581487,155.535589 C190.581487,153.441549 188.873877,151.742039 186.769857,151.742039 L99.1023731,151.742039 C96.9983535,151.742039 95.2907434,150.042528 95.2907434,147.948488 L95.2907434,3.79355096 C95.2907434,1.69951083 93.5831333,0 91.4791136,0" id="Fill-4"></path>
                  </g>
                </g>
              </g>
            </svg>
            <h2>Little Universe</h2>
          </div>
      </Transporter>
      <div></div>


        <div className="nav-links">
          {<Transporter name='aboutSwitch' show={homeActive}><div className="nav-link" onClick={toggleHome}>About Us</div></Transporter>}
          <div className="nav-link">Our Work</div>
          <div className="nav-link">Contact Us</div>
          <Transporter name='aboutPictureSwitch' show={homeActive}><span></span></Transporter>
          <Transporter name='aboutTextSwitch' show={homeActive}><span></span></Transporter>
        </div>
    </nav>
      )
    }
    
class HomepageContent extends React.Component {
        render() {
      const {homeActive} = this.props
      return (
      <div className="homepage-content">
        <Transporter name='logoSwitch' show={true}>
          <div className="brand">
            <svg viewBox="0 0 400 190" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="02_LU_MARK_Black" fill="#000000">
                  <g id="Mark_Shapes">
                    <path d="M395.717348,0 C397.899506,0 399.624268,1.81900769 399.534695,3.98891884 C397.432581,54.5152241 355.61138,94.8387741 304.325902,94.8387741 C253.040423,94.8387741 211.217316,54.5152241 209.119014,3.98891884 C209.027535,1.81900769 210.752297,0 212.934455,0 L395.717348,0 Z" id="Fill-1"></path>
                    <path d="M91.4791136,0 L3.81162973,0 C1.70761012,0 0,1.69951083 0,3.79355096 L0,185.883997 C0,187.978037 1.70761012,189.677548 3.81162973,189.677548 L186.769857,189.677548 C188.873877,189.677548 190.581487,187.978037 190.581487,185.883997 L190.581487,155.535589 C190.581487,153.441549 188.873877,151.742039 186.769857,151.742039 L99.1023731,151.742039 C96.9983535,151.742039 95.2907434,150.042528 95.2907434,147.948488 L95.2907434,3.79355096 C95.2907434,1.69951083 93.5831333,0 91.4791136,0" id="Fill-4"></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="logotype">
              <h1>Little Universe</h1>
              <p>A digital product design studio.</p>
            </div>
          </div>
        </Transporter>
      </div>
      )
    }
  }
  
class AboutContent extends React.Component {
        constructor(props) {
      super(props)
    this.state = {
        showAbout: false
    }
    setTimeout(() => this.setState({showAbout: true }), 1)
    }
  render() {
    return (
      <div className="homepage-content about-us">
        <div className="about-us-content">
          <Transporter name='aboutSwitch' show={this.state.showAbout}><h1>About Us</h1></Transporter>
          <Transporter name='aboutTextSwitch' show={this.state.showAbout}>
            <div style={{width: '350px'}}>
              <p>Our team has gone to bat with all things startup. We’ve built, launched and scaled multiple ventures as founders, managers, operators and dreamers.</p>
              <p>We’ve seen huge successes and formidable failures. We understand what it means to operate in ambiguity, where to make tough calls, and we have the skills to back it up.</p>
            </div>
          </Transporter>
        </div>

        <Transporter name='aboutPictureSwitch' show={this.state.showAbout}>
        <div style={{width: '450px', height: '300px'}}>
        <img src="https://littleuniverse.com/static/office-2.JPG" />
        </div>
        </Transporter>
      </div>
      )
    }
  }
