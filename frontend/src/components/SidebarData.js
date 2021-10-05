import React from 'react';
import MedicationIcon from '@mui/icons-material/Medication';
import InfoIcon from '@mui/icons-material/Info';
import EqualizerIcon from '@mui/icons-material/Equalizer';

//array objekata podaci za sidebar
export const SidebarData = [
  {
    title: 'Products',
    icon: <MedicationIcon />,
    path: '/products',
  },
  {
    title: 'Statistics',
    icon: <EqualizerIcon />,
    path: '/statistics',
  },
  {
    title: 'About Application',
    icon: <InfoIcon />,
    path: '/about',
  },
];
