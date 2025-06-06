import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';
const About = () => {
    const colorMode = useContext(ColorModeContext)
    return (
    <>
        <Container
        id='about'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: '6em',
          
        }}>
            <Grid
                container
                sx={{
                justifyContent: {
                    sm: 'center',
                    md: 'space-between'
                }
            }}>

                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                        maxWidth: '400px',
                        width: '100%',
                        height: '450px',
                        margin: '0 auto',
                        boxShadow: {
                            xs: '-.5em 1.5em 0px #0092ff',
                            sm: '-1.5em 1.5em 0px #0092ff'
                        },
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                            width: '100px',
                            height: '100px',
                            zIndex: '0',
                            position: 'absolute',
                            right: {
                                xs: '-4%',
                                sm: '90%'
                            },
                            
                            bottom: {
                                xs: '-5%',
                                sm: '-10%'
                            },
                            background: 'transparent',
                            backgroundImage:colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                            backgroundSize: '15px 13px'
                        }}></Box>
                        <Image
                            alt='Personal Image'
                            className='img1 '
                            layout='fill'
                            src="/assets/dp.jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{
                        pb: '.5em'
                    }}>
                        <Typography
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            },
                            py: '.5em',
                            pt: {
                                xs: '1.8em',
                                md:0,
                            }
                        }}
                            fontWeight='600'>
                            About Me, I&apos;m Vibhanshu Jain
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                      Hi, I&apos;m Vibhanshu Jain, a passionate Full Stack Developer who loves building robust and user-friendly digital experiences. With a solid grasp of the <span style={{color:'#0092ff', fontWeight:'bold'}}>  MERN stack </span>, <span style={{color:'#0092ff', fontWeight:'bold'}}> RDBMS</span>, and <span style={{color:'#0092ff', fontWeight:'bold'}}>Python</span>, I specialize in crafting modern web and mobile applications that solve real-world problems.
                        </Typography>
                    </Box>
                    <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            },
                            pb:'.5em'
                        }}>
                      Beyond development, I have a strong command over <span style={{color:'#0092ff', fontWeight:'bold'}}>Data Structures and Algorithms in Java</span>, which enhances my problem-solving skills and helps me write efficient, optimized code.

                        </Typography>
                    <ReadMore>
                    Whether it&apos;s designing intuitive user interfaces, architecting scalable backends, or diving deep into debugging, I enjoy every part of the development process. I&apos;m always exploring new technologies, collaborating on impactful projects, and looking for opportunities to learn and grow.

When I&apos;m not coding, you&apos;ll find me brainstorming startup ideas, experimenting with AI, or listening to music while sketching out my next project!

Let&apos;s build something awesome together.
                    </ReadMore>
                </Grid>
            </Grid>

        </Container>

        </>
    
    )
}

export default About
