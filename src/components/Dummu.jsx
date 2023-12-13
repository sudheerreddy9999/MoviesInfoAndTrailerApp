import React,{useState} from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import YouTube from "react-youtube";

const YoutubeVideo1 = (props) => {
    const { open, handleClose, youtubeURL ,handelImageClick} = props;
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
    function sendDataToModel(){
        handelImageClick(!open);
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
    <button type="button" class="close" data-dismiss="modal">&times;</button>
  </div>

  <div class="modal-body" >
    
  <YouTube videoId={id} props={opts} />
  </div>

</div>
</div>
</div>
    );
};

export default  YoutubeVideo1 
;
