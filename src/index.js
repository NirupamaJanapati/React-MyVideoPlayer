
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetails from './components/videoDetails';
import AppLogo from './components/logo';


const API_KEY = 'AIzaSyAtRIhTZz0cdLvdwjKVgbW6hUTpdUkJ5DE';


//create a new component. This is parent component
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo : null
		};

		this.videoSearch('charminar hyderabad');
	}

	videoSearch(searchterm) {
		YTSearch({key: API_KEY, term: searchterm}, (data) => {
			this.setState({ 
				videos: data,
				selectedVideo: data[0] 
			});
		});

	}

	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<AppLogo />
				<SearchBar onSearchTermChange = { videoSearch } />
				<VideoDetails 
					video = {this.state.selectedVideo} 
				/>
				<VideoList 	
					onVideoSelect = { selectedVideo => this.setState({selectedVideo}) } 
					videos = { this.state.videos } 
				/> 
			</div>
		);
	}
}


//render the component on the web browser
ReactDOM.render(<App />, document.querySelector('.container'));