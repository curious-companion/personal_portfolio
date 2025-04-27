import {Box, Container, Typography, Divider, Button} from '@mui/material';
import PerkCard from './PerkCard';
import {useState,useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import GroupsIcon from '@mui/icons-material/Groups';


export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);

const perksArray = [
    {
      title: 'Bias for Action',
      text: 'I take initiative, move fast, and iterate quickly to deliver high-impact results.',
      Icon: FlashOnIcon,
    },
    {
      title: 'Customer Obsession',
      text: 'I build with empathy, putting user needs and product impact above all.',
      Icon: FavoriteIcon,
    },
    {
      title: 'Ownership',
      text: 'I take full responsibility for the projects I work on, from ideation to deployment.',
      Icon: VerifiedUserIcon,
    },
    {
      title: 'Learn & Be Curious',
      text: 'I constantly explore new technologies and push boundaries to grow.',
      Icon: MenuBookIcon,
    },
    {
      title: 'Invent & Simplify',
      text: 'I look for innovative solutions and remove complexity wherever possible.',
      Icon: PsychologyAltIcon,
    },
    {
      title: 'Earn Trust',
      text: 'I communicate honestly, work transparently, and value collaboration.',
      Icon: GroupsIcon,
    },
  ];
const Perks = () => {
    const[ showmore, setShowMore ] = useState(false);

    useEffect(() => {
        MainTitleAnimation('.h1', '.h2')
    }, [])

    const visiblePerks = showmore ? perksArray : perksArray.slice(0,3);

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                Leadership Principles I Live by
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {visiblePerks.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>

            <Button
                variant = 'contained'
                sx={{ mt: '2em' }}
                onClick={()=> setShowMore(!showmore)}
            >
                {showmore ? 'Show Less' : 'Show More'}

            </Button>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks