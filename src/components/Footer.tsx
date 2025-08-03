import React from 'react';
import { Typography, Divider } from '@mui/material';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/jayanth2909',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/utukuri-jayanth-20871a17b/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:jayanthutukurius@gmail.com?subject=Portfolio Inquiry',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              <span className="text-blue-400">Jayanth Utukuri </span>Portfolio
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                maxWidth: '42rem',
                mx: 'auto',
                fontSize: '1.125rem',
                textAlign: 'center'
              }}
            >
              Thanks for visiting my portfolio! I'm always excited to connect with fellow developers,
              designers, and anyone passionate about technology.
            </Typography>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => {
              const isExternal = href.startsWith('http');
              return (
                <motion.a
                  key={label}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300"
                >
                  <Icon size={20} className="text-white" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <Divider sx={{ bgcolor: '#334155', mb: 6 }} />

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-400"
          >
            <Typography variant="body2">
              © {currentYear} Jayanth Utukuri. All rights reserved.
            </Typography>
            <div className="flex items-center space-x-1">
              <Typography variant="body2">Made with</Typography>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <Typography variant="body2">and lots of coffee</Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
