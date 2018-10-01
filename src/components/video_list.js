import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoItens = props.videos.map((videos) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={videos.etag} 
				video={videos} />
			);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItens}
		</ul>
	);

};

export default VideoList;
	