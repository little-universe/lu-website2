import React, { Component } from 'react'

class Peek extends Component {
  state = {
  }

  render() {
    let { peekPage } = this.props;

    return (
      <div className={`peek
        ${peekPage == "work" && "peek-work"}
      `}>

      <div className="peek-case-study peek-case-study1" />
      <div className="peek-case-study peek-case-study2" />
      <div className="peek-case-study peek-case-study3" />
      <div className="peek-case-study peek-case-study4" />

      </div>
    )
  }
}

export default Peek;
