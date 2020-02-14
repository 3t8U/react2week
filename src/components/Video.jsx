import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0

      }
    };

    var playerStyle = {
        margin: '20px'

    }

    return (
      <div style={playerStyle}>
      <YouTube
        videoId="K3CIAUii1uw"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
