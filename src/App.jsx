import React from 'react';
import './App.css';
import Header from './header/Header';
import Intro from './intro/Intro';
import Project from './project/Project';
import Skills from './skills/Skills';
import About from './about/About';

function App() {
	return (
		<section className='container'>
			<Header />
			<Intro />
			<Project />
			<Skills />
			<About />
		</section>
	);
}

export default App;
