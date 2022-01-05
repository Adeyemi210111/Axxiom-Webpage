import React from 'react';
import { FaPiggyBank } from 'react-icons/fa';
import '../css/home.css';
import sample from '../video/bg-video.mp4';

const Home = () => {
return (
	<>
	<div className='video-container'>
		
		<video className='videoTag' autoPlay loop muted>
		
			<source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type='video/mp4' />
		</video>
		<p className='welcome'>welcome</p>
		</div>
		
	</>
);
};

export default Home;
