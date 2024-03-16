import React from 'react';
import './App.css';
import Header from './header/Header';
import Intro from './intro/Intro';
import Project from './project/Project';
import Skills from './skills/Skills';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
	return (
		<section className='container'>
			<Header />
			<Intro />
			<Project />
			<Skills />
			<About />
			<Contact />
			<Footer />
		</section>
	);
}

export default App;
