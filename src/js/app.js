import React from 'react';
import { render } from 'react-dom';
import YouTube from 'react-youtube';

const videoIdA = '_PsB2e0U5FU';
const videoIdB = 'vR1ktfzlsug';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Default Value
      videoId: videoIdA,
      player: '' 
    };

    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onMuteVideo = this.onMuteVideo.bind(this);

  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`)
    console.log(event)

    this.setState({
      player: event.target,
    });

  }

  onPlayVideo() {
    this.state.player.playVideo();
  }


  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  onMuteVideo () {
	  this.state.player.mute()
  }


  onChangeVideo() {
    this.setState({
      videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA
      //Llama automaticamente el metodo render() y pasa sus datos actualizados.
    });

  }

  render() {
    return (
      <div>
        
      	<div className="video-container">
      		<YouTube videoId={this.state.videoId} onReady={this.onReady} />
      	</div>

        <div className="btn-container">
        	<button className="btn" onClick={this.onPlayVideo}>Play</button>
	        <button className="btn" onClick={this.onPauseVideo}>Pause</button>
	        <button className="btn" onClick={this.onChangeVideo}>Change Video</button>
	        <button className="btn" onClick={this.onMuteVideo}>Mute Video</button>
        </div>
      </div>
    );
  }
}

render(<Example />, document.getElementById('container'));