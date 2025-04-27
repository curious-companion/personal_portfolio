import {Box} from "@mui/material"
import SocialMediaIcon from './SocialMediaIcon';
import XIcon from '../../../assets/icons/X.svg';

export const SocialMediaArray = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vibhanshu-jain-23a893225/',
        color: '#0e76a8',
        svg: 'https://www.svgrepo.com/show/138936/linkedin.svg'

    }, {
        color: '#171515',
        title: 'Github',
        href: 'https://github.com/curious-companion',
        svg: 'https://www.svgrepo.com/show/343674/github.svg'
    }, {
        title: 'X',
        href: "https://x.com/Vibhanshujainnn",
        color: '#4267B2',
        svg: <XIcon width={24} height={24} />
    }
]

const SocialMedia = () => {

    return (
        <Box sx={{
            pt: '1em',
            pb:'3em',
            display: 'flex'
        }}>
            {SocialMediaArray.map(icon => {

                return <SocialMediaIcon
                    svg={icon.svg}
                    key={icon.href}
                    title={icon.title}
                    href={icon.href}
                    color={icon.color}/>
            })}
        </Box>

    )
}

export default SocialMedia
