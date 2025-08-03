'use client';

import React from 'react';
import { Typography, Card, CardContent, Chip } from '@mui/material';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Rivier University",
      duration: "Sep 2023 - May 2025",
      gpa: "3.8/4.0",
      location: "Nashua, New Hampshire, USA",
      achievements: ["Graduated with Distinction", "Dean's List", "Research Project on AI-driven Polling Application"],
      coursework: ["Advanced Algorithms", "Cloud Computing", "Machine Learning", "Software Architecture", "Database Management Systems"],
      thesis: "Optimizing AI-Powered Decision Systems for Scalable Cloud Applications"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Data Science",
      school: "Koneru Lakshmaiah University",
      duration: "Jun 2018 - Apr 2022",
      gpa: "3.7/4.0",
      location: "Hyderabad, Telangana, India",
      achievements: ["Academic Merit Scholarship", "Top 10% of Graduating Class", "AI Hackathon Finalist"],
      coursework: ["Data Structures & Algorithms", "Big Data Analytics", "Artificial Intelligence", "Web Development", "Database Systems"],
      thesis: "Driver Drowsiness Detection Using OpenCV and Deep Learning"
    }
  ];

 /* const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "Expected Sep 2025",
      icon: "☁️"
    },
    {
      name: "Oracle Certified Java Programmer",
      issuer: "Oracle",
      year: "Expected Sep 2025",
      icon: "☕"
    },
    {
      name: "Big Data Engineer",
      issuer: "Simplilearn",
      year: "",
      icon: "🍃"
    },
    {
      name: "Artificial Intelligence Engineer",
      issuer: "Simplilearn",
      year: "",
      icon: "🤖"
    }
  ]; */

  return (
    <section id="education" className="py-20 bg-slate-800 relative overflow-hidden">
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
            Education & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
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
            Academic foundation and professional certifications that shaped my expertise
          </Typography>
        </motion.div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4"
                        >
                          <GraduationCap size={24} className="text-white" />
                        </motion.div>
                        <div>
                          <Typography variant="h5" className="font-bold text-white mb-1">
                            {edu.degree}
                          </Typography>
                          <Typography variant="h6" className="text-blue-400 font-medium">
                            {edu.school}
                          </Typography>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-slate-400 mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <Typography variant="body2">{edu.duration}</Typography>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          <Typography variant="body2">GPA: {edu.gpa}</Typography>
                        </div>
                        <div className="flex items-center">
                          <Typography variant="body2" className="ml-1">
                            📍 {edu.location}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <Award size={18} className="text-yellow-400 mr-2" />
                        <Typography variant="h6" className="font-semibold text-white">
                          Achievements
                        </Typography>
                      </div>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                            <Typography variant="body2" className="text-slate-400">
                              {achievement}
                            </Typography>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-3">
                        <BookOpen size={18} className="text-green-400 mr-2" />
                        <Typography variant="h6" className="font-semibold text-white">
                          Key Coursework
                        </Typography>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Chip
                              label={course}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                color: '#4ADE80',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                '&:hover': {
                                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                                }
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-600/30 rounded-lg p-4">
                    <Typography variant="body2" className="text-slate-300 font-medium mb-2">
                      Thesis: 
                    </Typography>
                    <Typography variant="body2" className="text-slate-400 italic">
                      "{edu.thesis}"
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Typography variant="h4" className="font-bold text-center mb-12">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </Typography>
        </motion.div>
{/*
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {certifications.map((cert, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-500 h-full text-center">
        <CardContent className="p-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-4xl mb-4"
          >
            {cert.icon}
          </motion.div>
          <Typography variant="h6" className="font-bold text-white mb-2">
            {cert.name}
          </Typography>
          <Typography variant="body2" className="text-blue-400 mb-2">
            {cert.issuer}
          </Typography>
          <Typography variant="body2" className="text-slate-400">
            {cert.year}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
*/}

      
      </div>
    </section>
  );
};

export default Education;
