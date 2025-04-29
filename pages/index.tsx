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


const Home : NextPage = ({} : any) => {
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
            svg: '/assets/css.png',
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
            svg: '/assets/django.png',
            title: 'Django',
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
    const projectsArray = [
        {
          title: "Talent Trajectory",
          description: "A Campus Placement Platform with AI-driven resume analysis, salary prediction, and career guidance features.",
          img: "/assets/talent_trajectory.png", // Put the correct image path here
          repoUrl: "https://github.com/yourusername/talent-trajectory", // update your real repo link
          siteUrl: "https://talenttrajectory.com", // update your real site link
          isReversed: false,
          className: "project-card",
          cardStyles: {
            height: "400px",
            width: "600px",
            transform: "translateX(150%)"
          }
        },
        {
          title: "PyChan Online AI Python Tutor",
          description: "An interactive AI tutor for kids to learn Python programming with a fun, personalized experience.",
          img: "/assets/pychan.png", // Put the correct image path here
          repoUrl: "https://github.com/yourusername/pychan-ai-tutor", // update your real repo link
          siteUrl: "https://pychan.ai", // update your real site link
          isReversed: true,
          className: "project-card",
          cardStyles: {
            height: "400px",
            width: "600px",
            transform: "translateX(-150%)"
          }
        },
        {
          title: "VibeVault",
          description: "A music streaming platform where users can create playlists, discover new music, and vibe together.",
          img: "/assets/vibevault.png", // Put the correct image path here
          repoUrl: "https://github.com/yourusername/vibevault", // update your real repo link
          siteUrl: "https://vibevault.com", // update your real site link
          isReversed: false,
          className: "project-card",
          cardStyles: {
            height: "400px",
            width: "600px",
            transform: "translateX(150%)"
          }
        },
        {
          title: "Personal Portfolio",
          description: "My personal portfolio to showcase my projects, skills, and experiences as a software developer.",
          img: "/assets/personal_portfolio.png", // Put the correct image path here
          repoUrl: "https://github.com/yourusername/portfolio", // update your real repo link
          siteUrl: "https://yourportfolio.com", // update your real site link
          isReversed: true,
          className: "project-card",
          cardStyles: {
            height: "400px",
            width: "600px",
            transform: "translateX(-150%)"
          }
        },
      ];
      
    

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
