import React from 'react';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import designer from '../assets/designer.jpg';
import redDress from '../assets/redDress.jpg';

const footerImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80',
  redDress,
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&q=80',
  'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=200&q=80',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&q=80',
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#3D2B2E', color: '#fff' }}>
      {/* Main footer */}
      <Box sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={4}>
          {/* About designer */}
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: '2rem',
                color: '#E8C5BC',
                mb: 2,
              }}
            >
              About the Designer
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Meet our Designer', 'Years of Experience'].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontFamily: '"Raleway", sans-serif',
                    fontWeight: 300,
                    fontSize: '0.85rem',
                    color: '#D4B0AB',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(212,176,171,0.3)',
                    pb: 1,
                    '&:hover': { color: '#E8C5BC' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* WhatsApp Button */}
            <Button
              startIcon={<WhatsAppIcon />}
              sx={{
                mt: 4,
                bgcolor: '#25D366',
                color: '#fff',
                borderRadius: '24px',
                px: 3,
                py: 1,
                fontSize: '0.82rem',
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 500,
                letterSpacing: '0.05em',
                '&:hover': { bgcolor: '#1ebe5d' },
                boxShadow: 'none',
                textTransform: 'none',
              }}
            >
              Order on WhatsApp
            </Button>
          </Grid>

          {/* Designer photo */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={designer}
              alt="Designer"
              sx={{
                width: '100%',
                maxWidth: 440,
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: '2px',
              }}
            />
          </Grid>

          {/* Contact + gallery grid */}
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 500,
                fontSize: '1.2rem',
                color: '#E8C5BC',
                mb: 2,
              }}
            >
              Contact Us
            </Typography>

            {[
              { icon: PhoneIcon, value: '+123-456-7890' },
              { icon: EmailIcon, value: 'info@boutique.com' },
              { icon: LocationOnIcon, value: '123 Fashion St, City' },
            ].map(({ icon: Icon, value }, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 1.5 }}>
                <Icon sx={{ color: '#A0616A', fontSize: '1rem', flexShrink: 0 }} />
                <Typography sx={{ fontFamily: '"Raleway", sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#D4B0AB' }}>
                  {value}
                </Typography>
              </Box>
            ))}

            {/* Mini gallery grid */}
            <Grid container spacing={0.8} sx={{ mt: 2 }}>
              {footerImages.map((src, i) => (
                <Grid item xs={4} key={i}>
                  <Box
                    component="img"
                    src={src}
                    alt={`foot-${i}`}
                    sx={{
                      width: '100%',
                      aspectRatio: '1/1',
                      objectFit: 'cover',
                      opacity: 0.85,
                      '&:hover': { opacity: 1 },
                      transition: 'opacity 0.2s',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      {/* Bottom bar */}
      <Box sx={{ py: 2, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
        <Typography sx={{ fontFamily: '"Raleway", sans-serif', fontWeight: 300, fontSize: '0.75rem', color: '#9C7A7E' }}>
          © {new Date().getFullYear()} Boutique Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
