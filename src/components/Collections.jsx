import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Collection1 from '../assets/Collection1.png';
import Collection2 from '../assets/Collection2.png';
import Collection3 from '../assets/Collection3.png';

const collections = [
  {
    title: 'New Arrivals',
    image: Collection1,
    hasArrow: false,
  },
  {
    title: 'Bridal Collection',
    image: Collection2,
    hasArrow: false,
  },
  {
    title: 'Party Dresses',
    image: Collection3,
    hasArrow: true,
  },
];

export default function Collections() {
  return (
    <Box sx={{ bgcolor: '#FDF8F5', py: { xs: 5, md: 7 }, px: { xs: 2, md: 6 } }}>
      {/* Section headers */}
      <Grid container spacing={0} sx={{ mb: 2 }}>
        {collections.map((col) => (
          <Grid item xs={4} key={col.title}>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 500,
                fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
                color: '#3D2B2E',
                textAlign: 'center',
                letterSpacing: '0.03em',
              }}
            >
              {col.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Thin divider */}
      <Box sx={{ borderTop: '1px solid #E8C5BC', mb: 3 }} />

      {/* Cards */}
      <Grid container spacing={2}>
        {collections.map((col) => (
          <Grid item xs={12} sm={4} key={col.title}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                bgcolor: 'transparent',
                '&:hover .card-img': { transform: 'scale(1.04)' },
              }}
            >
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                <CardMedia
                  component="img"
                  image={col.image}
                  alt={col.title}
                  className="card-img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
              </Box>
              <CardContent sx={{ px: 0, pt: 1.5, pb: '8px !important' }}>
                <Box sx={{ borderTop: '1px solid #E8C5BC', pt: 1.2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', md: '1.05rem' },
                      color: '#3D2B2E',
                    }}
                  >
                    {col.title}
                  </Typography>
                  {col.hasArrow && (
                    <ArrowForwardIcon sx={{ fontSize: '1rem', color: '#A0616A' }} />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
