import React from 'react';
import About from '../../About/About';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import Banner from '../Banner';
import Work from '../Work';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Work></Work>
            <Projects></Projects>
            <Skills></Skills>
            <About></About>
        </>
    );
};

export default Home;