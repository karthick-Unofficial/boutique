import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Model from '../assets/ultraModel.png';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '420px', md: '540px' },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F5E6E0 0%, #EDD5CC 40%, #E8C5BC 100%)',
        display: 'flex',
        alignItems: 'center',
        marginTop: "65px",
        backgroundImage: `url(${Model})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background decorative floral blobs */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(220,180,170,0.5) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(240,210,200,0.4) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Right side model image placeholder */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '-10%', sm: '0' },
          bottom: 0,
          width: { xs: '55%', md: '52%' },
          height: '100%',
          backgroundImage: 'url(../assets/hero-model.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          opacity: 0.9,
        }}
      />

      {/* Gradient overlay on right image */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, #F0DDD6 30%, rgba(240,210,200,0.6) 55%, transparent 80%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 3, md: 8 }, maxWidth: { xs: '75%', md: '55%' } }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 400,
            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
            color: '#3D2B2E',
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          Custom Tailoring &amp; Designer Dresses
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
            color: '#A0616A',
            mb: 3,
          }}
        >
          for Every Occasion
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#A0616A',
              color: '#fff',
              '&:hover': { bgcolor: '#8B4A52' },
              px: 4,
              py: 1.2,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
            }}
          >
            Shop Now
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#5C3D41',
              color: '#fff',
              '&:hover': { bgcolor: '#3D2B2E' },
              px: 4,
              py: 1.2,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
            }}
          >
            Book Appointment
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
