import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Skills from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout';


const Home : NextPage = ({projectsArray} : any) => {
    const iconsArray = [
        {
            filter:'Language',
            svg: "/assets/java.gif",
            title: 'Java',
            isBackend: true, 
        },
        {
            filter: 'Language',
            svg: '/assets/js.png',
            title: 'Javascript',
            isBackend: false,
        },
        {
            filter: 'Language',
            svg: '/assets/python.png',
            title: 'Python',
            isBackend: true,
        },
        {
            filter: 'Language',
            svg: '/assets/cpp.png',
            title: 'C++',
            isBackend: true,
        },
        {
            filter: 'Language',
            svg: '/assets/html.png',
            title: 'HTML',
            isBackend: false,
        },
        {
            filter: 'Language',
            svg: '/assets/html.png',
            title: 'CSS',
            isBackend: false,
        },
        {
            filter: 'Database',
            svg: '/assets/sql.png',
            title: 'SQL',
            isBackend: false,
        },
        {
            filter: 'Framework',
            svg: '/assets/react.png',
            title: 'React',
            isBackend: false,
        },
        {
            filter: 'Framework',
            svg: '/assets/nodejs.png',
            title: 'Nodejs',
            isBackend: false,
        },
        {
            filter: 'Framework',
            svg: '/assets/Django.png',
            title: 'CSS',
            isBackend: false,
        },
        {
            filter: 'Framework',
            svg: '/assets/expressjs.png',
            title: 'Express.js',
            isBackend: false,
        },
        {
            filter: 'Framework',
            svg: '/assets/nextjs.png',
            title: 'Nextjs',
            isBackend: false,
        },
        {
            filter: 'Database',
            svg: '/assets/mongo.png',
            title: 'MongoDB',
            isBackend: false,
        },
        {
            filter: 'Database',
            svg: '/assets/pg.png',
            title: 'PostgreSQL',
            isBackend: false,
        }        
    ]
    return (
        <Layout desc={`Vibhanshu Jain, Full Stack Web Developer in India, Can develop all kinds of websites and web/mobile applications according to your needs`} title='Vibhanshu Jain Fullstack Developer Personal Portfolio Website'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Hero/>
                <Perks/>
                <Skills iconsArray={iconsArray}/>
                <Projects projectsArray={projectsArray}/>
                <About/>
                <CTA/>
            </Box>
        </Layout>

    )
}

export default Home
