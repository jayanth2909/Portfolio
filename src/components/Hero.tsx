import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Download, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/dp.jpg'; // Adjust the path as needed

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
      animate={{
        y: [0, -20, 0],
        x: [0, Math.sin(i) * 10, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        delay: i * 0.5,
      }}
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + (i % 2) * 20}%`,
      }}
    />
  ));

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        {floatingElements}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="mb-8"
          >
            <div className="w-56 h-56 mx-auto mb-8 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  {/* Profile Picture */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-full overflow-hidden relative"
                  >
                    <img
                      src={profilePic}
                      alt="John Doe - Software Developer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-800"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Typography variant="h2" className="font-bold mb-4 text-4xl md:text-6xl">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Jayanth Utukuri</span>
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Code className="text-blue-400" size={24} />
                <Typography variant="h4" className="text-xl md:text-2xl text-slate-300 font-medium">
                  Full Stack Software Developer
                </Typography>
                <Sparkles className="text-purple-400" size={24} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
            <Typography variant="body1"
            sx={{mb: 4,fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '42rem',     // max-w-2xl
              mx: 'auto',
              lineHeight: 1.75,
              textAlign: 'center',   // This line centers the text
              }}>
                Crafting exceptional digital experiences with modern technologies. 
                I transform ideas into scalable, beautiful applications that users love.
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Work Together
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<Download />}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full backdrop-blur-sm bg-slate-800/50 transition-all duration-300"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-6"
          >
            {[
              { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
              { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
              { icon: Mail, href: "#", label: "Email", color: "hover:bg-green-600" }
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-slate-800/80 backdrop-blur-sm rounded-full ${color} transition-all duration-300 border border-slate-700 hover:border-slate-500 shadow-lg hover:shadow-xl`}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
            {/*
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default Hero;