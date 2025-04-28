import { Box } from "@mui/material";
import SocialMediaIcon from './SocialMediaIcon';
import XIcon from '../../../assets/icons/X.svg';
import LinkedinIcon from '../../../assets/icons/linkedin.svg';
import GithubIcon from '../../../assets/icons/icons8-github.svg';

export const SocialMediaArray = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vibhanshu-jain-23a893225/',
    color: '#0e76a8',
    svg: <LinkedinIcon width={24} height={24} />
  },
  {
    title: 'Github',
    href: 'https://github.com/curious-companion',
    color: '#171515',
    svg: <GithubIcon width={24} height={24} />
  },
  {
    title: 'X',
    href: "https://x.com/Vibhanshujainnn",
    color: '#4267B2',
    svg: <XIcon width={24} height={24} />
  }
];

const SocialMedia = () => {
  return (
    <Box sx={{
      pt: '1em',
      pb: '3em',
      display: 'flex',
      gap: '1em',
      justifyContent: 'center'
    }}>
      {SocialMediaArray.map((icon) => (
        <SocialMediaIcon
          svg={icon.svg}
          key={icon.href}
          title={icon.title}
          href={icon.href}
          color={icon.color}
        />
      ))}
    </Box>
  );
};

export default SocialMedia;
