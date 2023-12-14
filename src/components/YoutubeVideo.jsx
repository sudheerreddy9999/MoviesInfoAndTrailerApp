import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo1 = (props) => {
    const {  handelChangeFromYoutube, youtubeURL } = props;
    const handelChange = ()=>{
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
    console.log(id);


    const opts = {
        width: "100%",
        host: `https://www.youtube.com/embed/' + ${id} + '?showinfo=0&enablejsapi=1&origin=http://localhost:3000`,
        height: "400",
        playerVars: {
            autoplay: 1,
        },
    };
    console.log(opts.host);
    return (
        <div>

        

<div class="modal-dialog">
<div class="modal-content" id="trailerModel">
  <div class="modal-header">    
  </div>

  <div class="modal-body" >
    
  <YouTube videoId={id} props={opts} />
  </div>
  <div className="buttonCloseFromYoutube">
  <button onClick={handelChange} className="buttonChangeFromYoutube">Close</button>
  </div>
 
</div>
</div>
</div>
    );
};

export default  YoutubeVideo1 
;
