import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo1 = (props) => {
    const { handelChangeFromYoutube, youtubeURL } = props;
    const handelChange = () => {
        handelChangeFromYoutube(false);
    }

    function getYouTubeVideoId(url) {
        try {
            const videoUrl = new URL(url);
            const searchParams = new URLSearchParams(videoUrl.search);
            return searchParams.get('v') || videoUrl.pathname.split('/').pop();
        } catch (error) {
            console.error('Invalid YouTube URL:', error.message);
            return null;
        }
    }

    const id = getYouTubeVideoId(youtubeURL);


    const opts = {
        width: "80%",
        host: `https://www.youtube.com/embed/' + ${id} + '?showinfo=0&enablejsapi=1&origin=http://localhost:3000`,
        height: "300",
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div className="myYoutubeContainer">
                    <div className="youTubeVideo" >
                        <YouTube videoId={id} props={opts} />
            </div>
            <button onClick={handelChange} className="buttonChangeFromYoutube">Close</button>
        </div>
    );
};

export default YoutubeVideo1
    ;
