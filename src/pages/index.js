import React from 'react';
import { FaPiggyBank } from 'react-icons/fa';
import '../css/home.css';
import sample from './mouse.png';

const Home = () => {
return (
	<>
	<div className='video-container'>
		
		<video className='videoTag' autoPlay loop muted>
		
			<source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type='video/mp4' />
		</video>
		<p className='welcome'>Contact Us Today for Your Real Estate Decisions...Your Happiness is our Priority</p>
		<button><img className='home-img' src={sample} alt='logo' ></img></button>
		</div>
		
	</>
);
};

export default Home;
