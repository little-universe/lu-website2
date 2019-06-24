import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ArrowRight } from "react-feather";
class Button extends Component {

  state = {
      copied: false,
      copiedText: false
    }

    setCopy = () => {
      this.setState({copied: true, copiedText: true})

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.setState({ copiedText: false })
      }, 1500);
    }

  render() {
    const { children, className, mailUs, callToAction, actionText } = this.props;
    return (
      <>
      { mailUs &&
        <>
        <CopyToClipboard text="agency@littleuniverse.com"
          onCopy={this.setCopy}
        >
        <button
          className={`
            ${className}
          `}
          >
          {children}
        </button>
        </CopyToClipboard>
        <p className={ this.state.copiedText ? "copiedText" : "copiedText fadeOut"}>Email Copied To Clipboard</p>
        </>
      }
      { callToAction && actionText &&
        <button className={`cta ${className}`}>{actionText}<span><ArrowRight size={20}/></span></button>
      }
      </>
    )
  }
}

export default Button;
