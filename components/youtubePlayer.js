import React from 'react';


class YouTubeVideo extends React.PureComponent {
    componentDidMount = () => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            window.onYouTubeIframeAPIReady = this.loadVideo;
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            this.loadVideo();
        }
    };

    loadVideo = () => {
        const id = this.props.id;
        this.player = new window.YT.Player(`youtube-player-${id}`, {
            videoId: id,
            events: {
                onReady: this.onPlayerReady,
            },
        });
    };

    async sleep(ms) {
        return new Promise((r) => setTimeout(r, ms));
    }

    onPlayerReady = async event => {
        event.target.playVideo();
        const duration = event.target.getDuration();
        const element = document.getElementById('music-duration');
        let durationSecs = duration % 60 === 0 ? duration % 60 : duration % 60 - 1;
        element.innerHTML = `${parseInt(duration / 60)}:${durationSecs >= 10 ? durationSecs : '0' + durationSecs % 60}`;

        const volume = event.target.getVolume();
        const volumeBar = document.getElementById('volume-bar');

        if (volume === 0) document.getElementById('volume-btn').innerHTML = '<i class="fa-solid fa-volume-off"/>'
        else if (volume <= 50) document.getElementById('volume-btn').innerHTML = '<i class="fa-solid fa-volume-low"/>'
        else document.getElementById('volume-btn').innerHTML = '<i class="fa-solid fa-volume-high"/>'

        volumeBar.value = volume;
        volumeBar.style.background = 'linear-gradient(to right, #000000 0%, #000000 ' + volumeBar.value + '%, #c4c4c4 '
            + volumeBar.value + '%, #c4c4c4 100%)';

        while (true) {
            if (event.target.getPlayerState() === 1)
                document.getElementById('play-btn').innerHTML = '<i class="fa-solid fa-pause"></i>';

            let current = parseInt(event.target.getCurrentTime());
            const element = document.getElementById('music-progress');
            element.innerHTML = `${parseInt(current / 60)}:${current % 60 >= 10 ? current % 60 : '0' + current % 60}`;

            const progress = document.getElementById('progress');
            progress.value = (current / duration) * 100;
            progress.style.background = 'linear-gradient(to right, #000000 0%, #000000 ' + progress.value + '%, #c4c4c4 '
                + progress.value + '%, #c4c4c4 100%)';

            await this.sleep(1000);
        }
    };

    render = () => {
        const id = this.props.id;
        return (
            <div className="container">
                <div id={`youtube-player-${id}`} className="ytVideo"/>
            </div>
        );
    };
}

export default YouTubeVideo;
