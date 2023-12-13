import React,{useState} from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import YouTube from "react-youtube";

const YoutubeVideo = (props) => {
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
            <Dialog
                component="span"
                fullWidth={true}
                MinWidth={"400px"}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: "80%",
                        maxHeight: "600px",
                    },
                }}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title" className="Dialog-Youtube" component="span">
                    <div className="dialogHeader">
                        <h4>Youtube video</h4>
                        <div class="modal-footer">
                        </div>
                    </div>

                 (
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >

                            <CloseIcon />
                        </IconButton>
                    ) 
                </DialogTitle>
                <DialogContent component="span">
                    <DialogContentText component="span">
                        <YouTube videoId={id} props={opts} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default YoutubeVideo;
