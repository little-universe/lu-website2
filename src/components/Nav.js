import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';

class Nav extends Component {
  state = {
  }

  render() {
    const { onHovered } = this.props;

    return (
      <div className="nav">
        <Grid
          container
          className="nav-content"
          justify="space-between"
          direction="column"
        >
          <Grid item>
            <Logo />
          </Grid>

          <Grid item>
            <Grid container>
              <div
                onMouseEnter={() => onHovered('work')}
                onMouseLeave={() => onHovered('')}
                className="nav-link"
              >our work</div>
              <div className="nav-link">about us</div>
              <div className="nav-link">our approach</div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Nav;
