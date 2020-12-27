import React from 'react';
import ModalVideo from "react-modal-video";
import { useState, useEffect } from "react";
import Video from "../components/Video";

const VideoPlayer = ({video}) => {
    const [isOpen, setOpen] = useState(false);

    return (

<React.Fragment>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId={video.youtubeId}
                    onClose={() => setOpen(false)}
                  />
                  <button
                    className="focus:outline-none"
                    onClick={() => setOpen(true)}
                  >
                    <Video
                      image={video.image}
                      description={video.description}
                    />
                  </button>
                </React.Fragment>

)
}

export default VideoPlayer;