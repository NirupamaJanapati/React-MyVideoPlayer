import React from 'react';

const videoListItem = (props) => {

	const video = props.video;
	const onVideoSelect = props.onVideoSelect;

	const imgUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<li className = 'list-group-item' onClick = {() => onVideoSelect(video)} >
			<div className ='video-list media'>
				<div className = 'media-left'>
					<img className = 'media-object' src = {imgUrl} />
				</div>
				<div className = 'media-body'>
					<div className= 'media-heading'> {title} </div>
				</div>				
			</div>
		</li>
	);
}

export default videoListItem;