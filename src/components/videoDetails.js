import React from 'react';

const videoDetails = ({video}) => {

	//onst video = props.video;
	console.log(video);

	if(!video) {
		return <div> Loading..... </div>;
	}

	const videoID = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoID;
	console.log('url: ' +url);
	//const url = `https://www.youtube.com/embed/${videoID}`;  -- ES6 syntax to inject or interpolate a variable value in a string.


	return (
		<div className= 'video-detail col-md-8'> 
			<div className = 'embed-responsive embed-responsive-16by9'>
				<iframe className = 'embed-responsive-item' src={url}> </iframe>
			</div>
			<div className = 'details'>
				<div> {video.snippet.title} </div>
				<div> {video.snippet.description} </div>
			</div>	
		</div>
	);

};

export default videoDetails;