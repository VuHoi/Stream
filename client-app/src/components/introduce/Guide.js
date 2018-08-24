import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Guide extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return (
            <div className="text-center mt-5">
                <div className="text-center ">
                    <h3 >Hướng dẫn sử dụng</h3>
                </div>
                <YouTube className="mt-4 border-info"
                    videoId="sd0grLQ4voU"
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

export default Guide;
