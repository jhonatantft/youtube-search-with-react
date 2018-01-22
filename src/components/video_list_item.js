import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="col-md-3 list-group-item video-box">
      <img className="video-image" src={imageUrl}/>
      <div className="video-title">
        {video.snippet.title}
      </div>
    </li>
  );
};

export default VideoListItem;