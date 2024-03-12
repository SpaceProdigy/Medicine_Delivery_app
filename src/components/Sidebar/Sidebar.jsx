import React from 'react';
import { Button, SideBar, Title } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SideBar>
      <Title>Shops:</Title>
      <Button>Antibiotics</Button>
      <Button>Painkillers</Button>
      <Button>Vitamins</Button>
      <Button>Antiviral medications</Button>
      <Button>Antihistamines</Button>
      <Button>Antacids</Button>
      <Button>Anti-inflammatory drugs</Button>
      <Button>Antidepressants</Button>
      <Button>Antifungal medications</Button>
      <Button>Blood pressure medications</Button>
    </SideBar>
  );
};
