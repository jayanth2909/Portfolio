'use client';

import React from 'react';
import { Typography, Card, CardContent, Chip } from '@mui/material';
import { Building, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tern Computer Inc.",
      location: "Remote – New York, USA",
      duration: "June 2025 – Present",
      description:
        "Contributing to the 'Balanced Ternary Machine Code (BTMC) 2024 Version' emulator project. Developing reusable backend components and pixel-perfect UI panels using C# and WPF, improving CPU simulation speed and test efficiency. Automating build pipelines and mentoring interns on best practices.",
      achievements: [
        "Improved CPU simulation performance by 25% (4s → 3s cycle time)",
        "Reduced debugging and test cycles by 30% via optimized UI components",
        "Automated build & deployment pipelines with GitHub Actions and Docker (80% fewer manual errors)",
        "Mentored 2 interns on C# coding standards and sprint planning",
        "Created onboarding and technical documentation improving knowledge transfer by 25%"
      ],
      technologies: ["C#", "WPF", ".NET", "Docker", "GitHub Actions", "Agile", "Technical Documentation"]
    },
    {
      title: "Software Developer",
      company: "Sterlite Digital Pvt Ltd",
      location: "Hyderabad, India",
      duration: "July 2022 – August 2023",
      description:
        "Developed scalable healthcare platform microservices processing 50K+ patient records/month using Java 17, Spring Boot, and Hibernate. Improved backend response times and database performance. Collaborated closely with cross-functional teams to deliver secure, reliable, and client-focused solutions.",
      achievements: [
        "Improved API response time by 35% (2.0s → 1.3s) exceeding SLA targets",
        "Implemented Redis caching reducing query latency by 40% across 3 regional deployments",
        "Reduced production defects by 45% via JUnit & Mockito automated test suites",
        "Prepared deployment runbooks, API references, and shared best practices with teams",
        "Boosted end-user satisfaction by 18% through client-focused solution delivery"
      ],
      technologies: ["Java 17", "Spring Boot 3.1", "Hibernate/JPA", "REST APIs", "MySQL", "Redis", "JUnit", "Mockito", "Agile"]
    },
    {
      title: "Software Engineer Intern",
      company: "Cognizant",
      location: "Hyderabad, India",
      duration: "February 2022 – June 2022",
      description:
        "Worked on a sports management platform delivering REST APIs and frontend features using Java Spring MVC and ReactJS. Enhanced database performance, supported QA phases, and prepared technical documentation for smooth knowledge transfer.",
      achievements: [
        "Designed scalable REST APIs improving data retrieval speed by 28%",
        "Enhanced PostgreSQL queries for analytics module, improving performance by 22%",
        "Collaborated with coaches, analysts, and non-technical staff to translate business needs into technical solutions",
        "Created API reference guides and module-level documentation for team onboarding",
        "Identified and fixed critical defects during UAT improving release quality"
      ],
      technologies: ["Java 11", "Spring MVC", "Hibernate", "PostgreSQL", "ReactJS", "Redux", "QA Testing", "Technical Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800 relative overflow-hidden">
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
          <Typography variant="h3" className="font-bold mb-4 text-4xl">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: '#94a3b8', 
              maxWidth: '70rem', 
              marginX: 'auto',
              fontSize: '1.2rem', 
              lineHeight: 1.9,     
              textAlign: 'center',
              mb: 4,
            }}
          >
            My professional journey and key contributions
          </Typography>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <Card
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-500 overflow-hidden group w-full"
                sx={{
                  minHeight: '380px',
                  padding: '1rem',
                  width: '100%'
                }}
              >
                <CardContent className="p-10" sx={{ padding: '2rem !important' }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3"
                        >
                          <Building size={24} className="text-white" />
                        </motion.div>
                        <Typography variant="h4" className="font-bold text-white">
                          {exp.title}
                        </Typography>
                      </div>
                      <Typography variant="h6" className="text-blue-400 mb-1 font-medium text-lg">
                        {exp.company}
                      </Typography>
                    </div>

                    {/* Right Side Location and Duration */}
                    <div className="text-right">
                      <Typography variant="body1" className="text-slate-300 text-lg">
                        📍 {exp.location}
                      </Typography>
                      <div className="flex items-center justify-end text-slate-400 mt-1">
                        <Calendar size={18} className="mr-2" />
                        <Typography variant="body1">{exp.duration}</Typography>
                      </div>
                    </div>
                  </div>

                  <Typography variant="body1" className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {exp.description}
                  </Typography>

                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <TrendingUp size={20} className="text-green-400 mr-2" />
                      <Typography variant="h6" className="font-semibold text-white text-lg">
                        Key Achievements
                      </Typography>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                          <Typography variant="body1" className="text-slate-400 text-base">
                            {achievement}
                          </Typography>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Typography variant="body1" className="text-slate-400 mb-3 text-lg">
                      Technologies Used:
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Chip
                            label={tech}
                            size="medium"
                            sx={{
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              color: '#60A5FA',
                              fontSize: '0.95rem',
                              padding: '6px 10px',
                              border: '1px solid rgba(59, 130, 246, 0.3)',
                              '&:hover': {
                                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
