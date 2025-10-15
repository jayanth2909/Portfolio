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
        "Contributing to the 'Balanced Ternary Machine Code (BTMC) 2024 Version' emulator project. Developing modular CPU simulation components, reusable custom controls, and optimizing real-time UI rendering in C# WPF using MVVM. Automating build pipelines and documenting internal technical processes.",
      achievements: [
        "Improved CPU simulation performance by 25% (4s → 3s cycle time)",
        "Reduced debugging and test cycles by 30% through optimized control templates",
        "Automated build & deployment pipelines using GitHub Actions and Docker (80% fewer manual errors)",
        "Enhanced UI responsiveness with async data binding and virtualization (35% faster rendering)",
        "Mentored 2 interns on C# coding standards and MVVM architecture"
      ],
      technologies: ["C#", "WPF", ".NET", "MVVM", "GitHub Actions", "Docker", "Agile", "UI Virtualization"]
    },
    {
      title: "Graduate Research Assistant",
      company: "Rivier University",
      location: "Nashua, NH, USA",
      duration: "May 2025 – Jun 2025",
      description:
        "Assisted in research on computer vision and AI-driven pattern recognition using Python and OpenCV. Focused on improving dataset quality, preprocessing, and model accuracy for real-time image analysis.",
      achievements: [
        "Improved model accuracy by 10% via optimized preprocessing and normalization",
        "Automated image augmentation pipeline reducing manual prep time by 50%",
        "Conducted literature reviews and contributed to research documentation",
        "Collaborated with faculty for result validation and publication support"
      ],
      technologies: ["Python", "OpenCV", "NumPy", "scikit-learn", "Pandas", "TensorFlow", "Research Documentation"]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Rivier University",
      location: "Nashua, NH, USA",
      duration: "January 2025 – April 2025",
      description:
        "Supported Computer Science faculty in teaching Java and Object-Oriented Programming courses. Mentored students in programming best practices, debugging, and algorithm design.",
      achievements: [
        "Guided 30+ students in Java OOP, improving assignment success rate by 40%",
        "Developed an automated grading script reducing evaluation time by 35%",
        "Provided 1-on-1 mentoring for debugging and project-based assessments",
        "Coordinated lab sessions and maintained course documentation"
      ],
      technologies: ["Java", "OOP", "Debugging", "Automation Scripts", "Teaching Assistance"]
    },
    {
      title: "Software Developer",
      company: "Sterlite Digital Pvt Ltd",
      location: "Bengaluru, India",
      duration: "July 2022 – August 2023",
      description:
        "Developed and maintained healthcare domain microservices using Java 17, Spring Boot 3, and Hibernate. Focused on backend scalability, database optimization, and real-time analytics dashboards built in ReactJS.",
      achievements: [
        "Improved API response time by 35% (2.0s → 1.3s)",
        "Implemented Redis caching reducing query latency by 40% across multiple regions",
        "Integrated PostgreSQL and optimized indexes for large-scale data queries",
        "Reduced production defects by 45% via automated test coverage (JUnit, Mockito)",
        "Deployed services on AWS using Docker, Jenkins, and Terraform achieving 99.9% uptime"
      ],
      technologies: ["Java 17", "Spring Boot 3", "ReactJS", "Hibernate", "PostgreSQL", "Redis", "Docker", "AWS", "JUnit", "Mockito"]
    },
    {
      title: "Software Engineer Intern",
      company: "Cognizant",
      location: "Hyderabad, India",
      duration: "February 2022 – June 2022",
      description:
        "Worked on a sports management and analytics platform using Java Spring Boot and ReactJS. Developed scalable REST APIs and React-based dashboards for live score updates, ensuring smooth real-time user experience.",
      achievements: [
        "Designed REST APIs improving data fetch latency by 28%",
        "Integrated Kafka event streaming for asynchronous score updates",
        "Enhanced PostgreSQL queries improving analytics module speed by 22%",
        "Implemented JWT-based authentication improving data security by 15%",
        "Deployed on AWS EC2 with Jenkins CI/CD achieving 99.9% uptime"
      ],
      technologies: ["Java 11", "Spring Boot", "ReactJS", "Kafka", "PostgreSQL", "JWT", "Jenkins", "AWS"]
    },
    {
      title: "UI/UX Designer Intern",
      company: "Confegure",
      location: "Hyderabad, India",
      duration: "June 2021 – August 2021",
      description:
        "Collaborated with the frontend team to design interactive wireframes and prototypes focused on usability and accessibility.",
      achievements: [
        "Designed UI mockups improving navigation flow by 30%",
        "Maintained brand consistency across all web interfaces",
        "Created reusable design components for frontend integration",
        "Worked closely with developers for smooth handoffs from Figma to production"
      ],
      technologies: ["Figma", "Wireframing", "Prototyping", "UI Design", "UX Research"]
    },
    {
      title: "Mobile Application Intern",
      company: "The Sparks Foundation",
      location: "Hyderabad, India",
      duration: "May 2021 – June 2021",
      description:
        "Built cross-platform mobile applications using React Native and Firebase for social and educational use cases.",
      achievements: [
        "Developed mobile apps achieving 98% crash-free rate on deployment",
        "Implemented Firebase Authentication and Realtime Database",
        "Integrated user feedback with continuous improvement cycles",
        "Enhanced app UI with reusable React Native components"
      ],
      technologies: ["React Native", "Firebase", "JavaScript", "Expo", "Mobile App Development"]
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
