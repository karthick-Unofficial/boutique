import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BuildIcon from '@mui/icons-material/Build';
import StraightenIcon from '@mui/icons-material/Straighten';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  { label: 'Custom Stitching', icon: ContentCutIcon },
  { label: 'Alterations & Repairs', icon: BuildIcon },
  { label: 'Measurement Guide', icon: StraightenIcon },
  { label: 'Fabric Selection', icon: AutoStoriesIcon },
  { label: 'Book Appointment', icon: EventNoteIcon },
];

export default function TailoringServices() {
  return (
    <Box sx={{ bgcolor: '#FDF8F5', py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 } }}>
      {/* Section title */}
      <Typography
        sx={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: { xs: '2.2rem', md: '2.8rem' },
          color: '#3D2B2E',
          textAlign: 'center',
          mb: 1,
        }}
      >
        Tailoring Services
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Box sx={{ width: 60, height: '1px', bgcolor: '#A0616A' }} />
      </Box>

      {/* Services grid */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
        {services.map(({ label, icon: Icon }) => (
          <Grid item xs={6} sm={4} md={2.4} key={label}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                '&:hover .svc-icon-box': { bgcolor: '#A0616A', color: '#fff' },
                transition: 'all 0.3s',
              }}
            >
              <Box
                className="svc-icon-box"
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  border: '1.5px solid #C48B93',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A0616A',
                  transition: 'all 0.3s',
                }}
              >
                <Icon sx={{ fontSize: '1.5rem' }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.78rem',
                  color: '#3D2B2E',
                  textAlign: 'center',
                  letterSpacing: '0.03em',
                }}
              >
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: '#A0616A',
            color: '#fff',
            px: 5,
            py: 1.4,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            borderRadius: '2px',
            '&:hover': { bgcolor: '#8B4A52' },
            boxShadow: 'none',
          }}
        >
          Schedule Now
        </Button>
      </Box>
    </Box>
  );
}
