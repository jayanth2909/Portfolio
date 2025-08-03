'use client';

import React from 'react';
import { Typography, Card, CardContent, Grid, Box } from '@mui/material';
import { Code, Coffee, Users, Lightbulb, Rocket, Heart, Brain, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Skilled in building scalable, high-performance web applications using Java 17, Spring Boot 3.1, Hibernate, React.js, and REST APIs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Known for improving application performance by 35–40%, reducing defects by 30–45%, and delivering efficient solutions under tight deadlines.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Proven ability to coordinate remote teams, mentor interns, and ensure smooth knowledge transfer through documentation and communication.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Passionate about emerging technologies, AI-powered solutions, and building software that impacts thousands of users.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "1.5+", label: "Years Experience", icon: Target },
    { number: "10+", label: "Projects Delivered", icon: Code },
    { number: "∞", label: "Cups of Coffee", icon: Coffee }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h3" className="font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: '#94a3b8', 
              maxWidth: '70rem', 
              marginX: 'auto',
              fontSize: '1.125rem', 
              lineHeight: 1.75,     
              textAlign: 'center',
              mb: 4,
            }}
          >
            I’m a dedicated Software Engineer with 1.5+ years of experience delivering full SDLC solutions across healthcare, sports, and simulation domains. 
            Skilled in Java, Spring Boot, Hibernate, React.js, REST APIs, and cloud integrations, I’m passionate about solving complex problems, 
            improving system performance, and delivering high-quality, user-centric solutions.
          </Typography>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Grid container spacing={4} justifyContent="Center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-blue-400 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block p-3 bg-blue-600 rounded-full mb-4"
                      >
                        <stat.icon size={24} className="text-white" />
                      </motion.div>
                      <Typography variant="h3" className="font-bold text-white mb-2">
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" className="text-slate-400">
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Highlights Grid */}
        <Grid container spacing={6} className="mb-16">
          {highlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-500 h-full group">
                  <CardContent className="text-center p-6 h-full flex flex-col">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-block p-4 bg-gradient-to-r ${highlight.color} rounded-xl mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <highlight.icon size={32} className="text-white" />
                    </motion.div>
                    <Typography variant="h6" className="font-bold mb-3 text-white">
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-400 flex-grow leading-relaxed">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-gradient-to-r from-slate-800 via-blue-900/30 to-slate-800 border border-slate-600/50 overflow-hidden">
            <Box className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Typography variant="h4" className="font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    My Development Journey
                  </Typography>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Typography variant="body1" className="text-slate-300 leading-relaxed mb-6">
                    My journey began during my B.Tech in Computer Science & Data Science, where I built my first AI-powered application. 
                    Since then, I have gained hands-on experience across multiple domains—healthcare, sports management, and CPU simulation—delivering scalable solutions using Java, Spring Boot, React.js, C#, and cloud-native technologies.
                  </Typography>
                  <Typography variant="body1" className="text-slate-300 leading-relaxed">
                    I thrive on solving real-world problems, continuously learning new tools and frameworks, and collaborating with teams to deliver robust, high-quality products that make an impact.
                  </Typography>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/50"
                >
                  <Typography variant="h6" className="font-bold text-white mb-4">
                    What Drives Me
                  </Typography>
                  <div className="space-y-3">
                    {[
                      "Delivering high-quality, scalable applications with measurable impact",
                      "Optimizing performance and reducing defects through clean code practices",
                      "Mentoring team members and sharing knowledge",
                      "Exploring AI-driven and cloud-native solutions to stay ahead of the curve"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                        <Typography variant="body2" className="text-slate-400">
                          {item}
                        </Typography>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
