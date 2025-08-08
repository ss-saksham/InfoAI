import React from 'react'
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import './brand.css';
const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div id="google">
      <img src={google} />
    </div>
    <div id="slack">
      <img src={slack} />
    </div>
    <div id="atlassian">
      <img src={atlassian} />
    </div>
    <div id="dropbox">
      <img src={dropbox} />
    </div>
    <div id="shopify">
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;