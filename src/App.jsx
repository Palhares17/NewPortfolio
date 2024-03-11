import React from 'react';
import './App.css';
import Header from './header/Header';
import Intro from './intro/Intro';
import Project from './project/Project';
import Skills from './skills/Skills';

function App() {
	return (
		<section className='container'>
			<Header />
			<Intro />
			<Project />
			<Skills />
		</section>
	);
}

export default App;
