import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item list-custom">
      <div className="video-list media">

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
        <div className="media-right">
          <img className="media-object" src={imageUrl}/>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;