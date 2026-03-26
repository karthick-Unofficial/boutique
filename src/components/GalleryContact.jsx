import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import gallery1 from '../assets/gallery/1.jpg';
import gallery2 from '../assets/gallery/2.jpg';
import gallery3 from '../assets/gallery/3.jpg';
import gallery4 from '../assets/gallery/4.jpg';

const galleryImages = [
  { src: gallery1 },
  { src: gallery2, label: null },
  { src: gallery3 },
  { src: gallery4, label: null },
];

const contactItems = [
  { icon: PhoneIcon, label: 'Call Us', value: '+123-456-7890' },
  { icon: EmailIcon, label: 'Email', value: 'info@boutique.com' },
  { icon: LocationOnIcon, label: null, value: '123 Fashion St, City' },
];

const socialIcons = [FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon, YouTubeIcon];

export default function GalleryContact() {
  return (
    <Box sx={{ bgcolor: '#F9EDE8', py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 } }}>
      <Grid container spacing={4}>
        {/* Gallery */}
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#3D2B2E',
              mb: 3,
            }}
          >
            Our Gallery
          </Typography>
          <Grid container spacing={1.5}>
            {galleryImages.map((img, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '2px', aspectRatio: '3/4' }}>
                  <Box
                    component="img"
                    src={img.src}
                    alt={`Gallery ${i + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s',
                      '&:hover': { transform: 'scale(1.06)' },
                    }}
                  />
                  {img.label && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        px: 1.5,
                        py: 0.4,
                        borderRadius: '1px',
                      }}
                    >
                      <Typography sx={{ fontFamily: '"Raleway", sans-serif', fontSize: '0.75rem', color: '#3D2B2E', fontWeight: 500 }}>
                        {img.label}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={5}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 500,
              fontSize: { xs: '1.4rem', md: '1.6rem' },
              color: '#3D2B2E',
              mb: 3,
            }}
          >
            Contact Us
          </Typography>
          <Paper
            elevation={0}
            sx={{
              bgcolor: '#F9EDE8',
              border: '1px solid #EDCFC7',
              borderRadius: '2px',
              p: 3,
            }}
          >
            {contactItems.map(({ icon: Icon, label, value }, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: i < contactItems.length - 1 ? 2.5 : 2 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: '#A0616A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ color: '#fff', fontSize: '1rem' }} />
                </Box>
                <Box>
                  {label && (
                    <Typography sx={{ fontFamily: '"Raleway", sans-serif', fontWeight: 500, fontSize: '0.8rem', color: '#3D2B2E' }}>
                      {label}
                    </Typography>
                  )}
                  <Typography sx={{ fontFamily: '"Raleway", sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#5C3D41' }}>
                    {value}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1.5, mt: 3, flexWrap: 'wrap' }}>
              {socialIcons.map((Icon, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: '#3D2B2E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'bgcolor 0.2s',
                    '&:hover': { bgcolor: '#A0616A' },
                  }}
                >
                  <Icon sx={{ color: '#fff', fontSize: '0.9rem' }} />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
