import { Container, Typography, Grid, Divider } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import { centeredStyles } from '../Perks/Perks';
import ToolCard from './ToolCard';
import gsap from 'gsap';

const TechTools = ({ iconsArray }: any) => {
  console.log('Received iconsArray:', iconsArray);

  let Languages = iconsArray && iconsArray.filter((icon: any) => icon.filter === 'Language');
  let Framework = iconsArray && iconsArray.filter((icon: any) => icon.filter === 'Framework');
  let Databases = iconsArray && iconsArray.filter((icon: any) => icon.filter === 'Database'); // <- typo alert, see below

  console.log('Filtered Languages:', Languages);
  console.log('Filtered Framework:', Framework);
  console.log('Filtered Databases:', Databases);

  const colorMode = useContext(ColorModeContext);

  const isfilterMode = (item: any) =>
    colorMode?.mode === 'light' ? false : item?.filter;

  useEffect(() => {
    console.log('Running MainTitleAnimation and gsap setup...');
    MainTitleAnimation('.title1', '.title2');
    gsap.to('.secondTitle', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.secondTitle',
        start: 'top 70%'
      }
    });
  }, []);

  return (
    <>
      <Container
        maxWidth='lg'
        sx={{
          margin: '0 auto',
          py: { xs: '6em' }
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className=' title1 t25o0'
              variant='h1'
              sx={{
                fontSize: { xs: '2.2em', sm: '2.5em', md: '3em' }
              }}
              fontWeight='600'
            >
              Tools Of The Present And Future
            </Typography>
            <Typography
              variant='h2'
              className='secondary title2 t25o0'
              sx={{
                pt: '1.5em',
                maxWidth: '570px',
                fontSize: { xs: '.8em', sm: '1em' }
              }}
            >
              Technologies I love working with
            </Typography>
          </Grid>

          {/* Languages Section */}
          {Languages?.length > 0 && (
            <>
              <Grid item sx={centeredStyles}>
                <Typography
                  variant='h2'
                  className='secondary secondTitle t25o0'
                  sx={{
                    pt: '3.5em',
                    opacity: 0,
                    fontSize: { xs: '.8em', sm: '1em' }
                  }}
                >
                  Languages
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  ...centeredStyles,
                  flexDirection: 'row',
                  justifyContent: { xs: 'center' },
                  mt: '3em',
                  flexWrap: 'wrap'
                }}
              >
                {Languages.map((lang: any) => (
                  <ToolCard
                    className='toolCard1'
                    filter={isfilterMode(lang)}
                    svg={lang.svg}
                    title={lang.title}
                    key={lang.title}
                  />
                ))}
              </Grid>
            </>
          )}

          {/* Frameworks Section */}
          {Framework?.length > 0 && (
            <>
              <Grid item sx={centeredStyles}>
                <Typography
                  variant='h2'
                  className='secondary secondTitle t25o0'
                  sx={{
                    pt: '3.5em',
                    opacity: 0,
                    fontSize: { xs: '.8em', sm: '1em' }
                  }}
                >
                  Frameworks
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  ...centeredStyles,
                  flexDirection: 'row',
                  justifyContent: { xs: 'center' },
                  mt: '3em',
                  flexWrap: 'wrap'
                }}
              >
                {Framework.map((fw: any) => (
                  <ToolCard
                    className='toolCard2'
                    filter={isfilterMode(fw)}
                    svg={fw.svg}
                    title={fw.title}
                    key={fw.title}
                  />
                ))}
              </Grid>
            </>
          )}

          {/* Databases Section */}
          {Databases?.length > 0 && (
            <>
              <Grid item sx={centeredStyles}>
                <Typography
                  variant='h2'
                  className='secondary secondTitle t25o0'
                  sx={{
                    pt: '3.5em',
                    opacity: 0,
                    fontSize: { xs: '.8em', sm: '1em' }
                  }}
                >
                  Databases
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  ...centeredStyles,
                  flexDirection: 'row',
                  justifyContent: { xs: 'center' },
                  mt: '3em',
                  flexWrap: 'wrap'
                }}
              >
                {Databases.map((db: any) => (
                  <ToolCard
                    className='toolCard2'
                    filter={isfilterMode(db)}
                    svg={db.svg}
                    title={db.title}
                    key={db.title}
                  />
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </Container>
      <Divider />
    </>
  );
};

export default TechTools;
