import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars.githubusercontent.com/u/57616484?v=4"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | MongoDB</p>

        <div className="social-links">

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
