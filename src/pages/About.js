import React, { Component } from 'react';
import profile_pic from '../assets/profile_pic.jpeg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profile_pic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Daniel Ung</div>
              <div className="brief_description">
                  Incoming Software Engineer intern at SAP + Chess entiusiast
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}