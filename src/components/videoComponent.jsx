import React from 'react';
import '../styles/videoComponent.style.scss';
import  Logo  from '../assets/logoanime.mp4'

function VideoComponent() {
  return (
    <div className="video-background">
      {/* Video element */}
      <video autoPlay muted>
        <source src={Logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content overlay */}
      <div className="content">
        <h1>A few clicks is all it takes !</h1>
      </div>
    </div>
  );
}

export default VideoComponent;