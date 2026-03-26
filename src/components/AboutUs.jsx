import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const reviews = [
  { text: 'Absolutely loved my dress. Perfect fit and beautiful design!', author: 'Sarah' },
  { text: 'Wonderful service and stunning dresses!', author: 'Emma' },
  { text: 'The craftsmanship is unparalleled. I felt like a princess!', author: 'Priya' },
];

export default function AboutUs() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box sx={{ bgcolor: '#FFF5F0', py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 } }}>
      {/* Title */}
      <Typography
        sx={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: { xs: '2.2rem', md: '2.8rem' },
          color: '#3D2B2E',
          textAlign: 'center',
          mb: 1,
        }}
      >
        About Us
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box sx={{ width: 60, height: '1px', bgcolor: '#A0616A' }} />
      </Box>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Left: image + text */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80"
                alt="Boutique tailor"
                sx={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: '2px',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  color: '#3D2B2E',
                  mb: 2,
                }}
              >
                Welcome to Our Boutique
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 300,
                  fontSize: '0.88rem',
                  color: '#5C3D41',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                Our expert tailors provide custom tailoring and designer outfits for every occasion, meticulously crafted to fit you perfectly. From elegant bridal gowns to chic party dresses, we're here to make your fashion dreams come true.
              </Typography>

              {/* Dots slider */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[0, 1, 2].map((i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    sx={{
                      width: i === activeSlide ? 20 : 10,
                      height: 10,
                      borderRadius: '5px',
                      bgcolor: i === activeSlide ? '#A0616A' : '#E8C5BC',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Right: Customer Reviews */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: '#F9EDE8',
              border: '1px solid #EDCFC7',
              borderRadius: '2px',
              p: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 500,
                fontSize: '1.1rem',
                color: '#3D2B2E',
                textAlign: 'center',
                mb: 0.5,
                letterSpacing: '0.05em',
              }}
            >
              Customer Reviews
            </Typography>
            <Box sx={{ borderTop: '1px solid #D4A8A0', mb: 2, mt: 0.5 }} />

            {reviews.map((r, i) => (
              <Box key={i} sx={{ mb: i < reviews.length - 1 ? 2.5 : 0 }}>
                <Typography sx={{ color: '#A0616A', fontSize: '1.5rem', lineHeight: 1 }}>"</Typography>
                <Typography
                  sx={{
                    fontFamily: '"Raleway", sans-serif',
                    fontWeight: 300,
                    fontSize: '0.82rem',
                    color: '#5C3D41',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    ml: 1,
                  }}
                >
                  {r.text}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Great Vibes", cursive',
                    fontSize: '1.1rem',
                    color: '#A0616A',
                    textAlign: 'right',
                    mt: 0.5,
                  }}
                >
                  — {r.author}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
