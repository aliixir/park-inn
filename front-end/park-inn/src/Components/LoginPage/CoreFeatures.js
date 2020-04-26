import React from 'react';
import { Container, Grid } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer.js';
import GridItem from '../Grid/GridItem.js';

import Arrow from './arrow_down.svg';
import pls from './phone_transparent.png';

export default props => {
  return(
    <a name="features">
      <div className="about-us-2">
          <br/>
          <Container>
            <p id="about-title" style={{fontSize: "40px"}}>ParkInn can be used by both<br/> parking enforcers and customers.</p>
            <p id="about-subtitle" style={{fontSize: "20px"}}>Our <font color="#adc9e0"><b>web application</b></font> allows your business to create and manage your virtual lots,
            view your company's statistics, and edit user settings for your parking enforcers. Our <font color="#adc9e0"><b>mobile application </b></font>
            allows parking enforcers to access the same features on-the-go, but also lets customers search for parking,
            reserve spots in advanced, and pay online.
            </p>

            <GridContainer spacing={5}>
              <GridItem xs={12} md={4}>
                <p id="about-heading">Manage Parking</p>
                <img src={pls} height="300" width="400" alt="manage"/>
                <p id="features-text" style={{fontSize: "19px"}}>Our <font color="#adc9e0"><b>parking lot designer</b></font> allows you to create the layout of your virtual parking lot,
                change prices of individual spots, or mark certain spots as unavailable during special event parking.</p>
              </GridItem>
              <GridItem xs={12} md={4}>
                <p id="about-heading">Company Statistics</p>
                <img src={pls} height="300" width="400" alt="manage"/>
                <p id="features-text" style={{fontSize: "20px"}}>View your <font color="#adc9e0"><b>company's analytics</b></font> such as revenue earned, weekly/monthly sales trends,
                peak parking hours, average wait times, and live lot utilization.</p>
              </GridItem>
              <GridItem xs={12} md={4}>
                <p id="about-heading">Customer Features</p>
                <img src={pls} height="300" width="400" alt="manage"/>
                <p id="features-text" style={{fontSize: "20px"}}>Our <font color="#adc9e0"><b>mobile application</b></font> allows guests to search for different parking lots in your city,
                view price comparisons between lots, reserve spots in advance, and pay online.</p>
                <div id="right">
                  <a href="#products">
                      <p id="landing-link">
                        <img src={Arrow} height="20px" width="20px" fill="gray" alt="next" /><span className="tab">Get Started</span>
                      </p>
                  </a>
                </div>
              </GridItem>
            </GridContainer>
          </Container>
      </div>
    </a>
  );
}