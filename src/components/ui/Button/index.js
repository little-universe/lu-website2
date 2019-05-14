import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Button extends Component {

  render() {
    const { className, mailUs } = this.props;

    return (
      <button
        className={`
          ${className}
          ${mailUs && "mailUs"}
        `}
      />
    )
  }
}

export default Button;
