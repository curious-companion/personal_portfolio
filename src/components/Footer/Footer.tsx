import gsap from 'gsap';
import { Box, Typography, Divider, Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Copyright() {
    return (
        <>
            <Divider />
            <Box
                maxWidth="lg"
                sx={{
                    textAlign: 'center',
                    margin: '1em auto',
                    color: 'white',
                    fontSize: '0.9em',
                }}
            >
                © {new Date().getFullYear()} Vibhanshu Jain. All rights reserved.
            </Box>
        </>
    );
}

const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
    color: 'white',
};

function Footer() {
    const router = useRouter();

    const scrollToSection = (id:string) => {
        router.push('/');
        gsap.to(window, { duration: 0.8, scrollTo: `#${id}` });
    };

    return (
        <Box>
            <Divider />
            <Box
                sx={{
                    width: '100%',
                    color: 'white',
                    minHeight: '200px',
                    display: 'flex',
                    margin: '0 auto',
                }}
            >
                <Grid
                    container
                    maxWidth="lg"
                    sx={{
                        gap: '1.5em',
                        mx: { xs: '3vw', lg: 'auto' },
                        my: '2em',
                    }}
                >
                    {/* About Section */}
                    <Grid item xs={12} sm={6} md={5}>
                        <Typography variant="h1" fontSize="1.4em" fontWeight="400">
                            About
                        </Typography>
                        <Box sx={styles}>
                            <Typography variant="h3" fontSize="1em">
                                Built with passion to showcase projects, ideas, and creativity.
                            </Typography>
                            <Typography variant="h3" fontSize="1em">
                                This site is a glimpse into my journey as a developer — from learning and building to sharing and growing.
                            </Typography>
                            <Typography variant="h3" fontSize="1em">
                                Let&apos;s connect and grow together!
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Links Section */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h1" fontSize="1.4em" fontWeight="400">
                            Links
                        </Typography>
                        <Box className="link" sx={styles}>
                            <Typography
                                onClick={() => scrollToSection('hero')}
                                sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                Home
                            </Typography>
                            <Link href="/contact" passHref>
                                <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>Contact</Typography>
                            </Link>
                            <Typography
                                onClick={() => scrollToSection('about')}
                                sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                About
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant="h1" fontSize="1.4em" fontWeight="400">
                            Contact
                        </Typography>
                        <Box className="link" sx={styles}>
                            <a target="_blank" rel="noreferrer" href="https://github.com/curious-companion">
                                Github
                            </a>
                            <a href="mailto:vibhanshujain2003@gmail.com">vibhanshujain2003@gmail.com</a>
                            <Typography fontSize="1em">Delhi, India</Typography>
                            <a href="tel:+917011845449">+91 7011845449</a>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Copyright />
        </Box>
    );
}

export default Footer;
