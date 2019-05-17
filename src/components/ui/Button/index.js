import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Button extends Component {

  render() {
    const { children, className, mailUs } = this.props;

    return (
      <button
        className={`
          ${className}
        `}
      >
        {children}
      </button>
    )
  }
}

export default Button;
