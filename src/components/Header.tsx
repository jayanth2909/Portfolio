'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Proper mapping of nav items to section IDs
  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Work Experience', target: 'experience' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  // ✅ Smooth scroll with header offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // adjust based on AppBar height
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
        elevation={isScrolled ? 4 : 0}
      >
        <Toolbar className="max-w-6xl mx-auto w-full">
          <Typography 
            variant="h6" 
            component="div" 
            className="flex-grow font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-blue-400">Jayanth</span> Utukuri
          </Typography>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.target)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="md:hidden"
        PaperProps={{
          className: "bg-slate-800 text-white w-64"
        }}
      >
        <div className="p-4">
          <Typography variant="h6" className="mb-4 text-blue-400">
            Navigation
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem 
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="cursor-pointer hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </motion.div>
  );
};

export default Header;
