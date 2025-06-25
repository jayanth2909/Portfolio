import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiPython, SiFlask, SiSpringboot, SiHibernate, SiPhp,
  SiMysql, SiPostgresql, SiFirebase,
  SiDocker, SiKubernetes, SiAmazonaws,
  SiGit, SiJenkins, SiJunit5, SiAngular, SiSocketdotio
} from 'react-icons/si';

import { FaJava, FaReact } from 'react-icons/fa'; // for JSP, J2EE, Mockito placeholder
import { MdApi } from 'react-icons/md';  // for REST APIs


const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
        { name: "CSS3", icon: SiCss3, color: "#264de4" }
      ]
    },
    {
      title: "Backend & APIs",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
        { name: "J2EE", icon: FaJava, color: "#f89820" }, // No J2EE icon; using Java
        { name: "JSP", icon: FaJava, color: "#f89820" },  // Same
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "REST APIs", icon: SiSpringboot, color: "#6DB33F" }, // Placeholder
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" }
      ]
    },
    {
      title: "Databases & Storage",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
      ]
    },
    {
      title: "DevOps & Cloud",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" }
      ]
    },
    {
      title: "Testing & Tools",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "JUnit", icon: FaJava, color: "#C21325" },
        { name: "Mockito", icon: FaJava, color: "#C21325" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
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
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
          </Typography>
          <Typography variant="body1"
            sx={{
              color: '#94a3b8',
              maxWidth: '50rem',
              mx: 'auto',
              fontSize: '1.125rem',
              textAlign: 'center',
            }}>
            A comprehensive toolkit of modern technologies I use to build exceptional digital experiences
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-r ${category.gradient} p-4 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <Typography variant="h6" className="font-bold text-white text-center">
                      {category.title}
                    </Typography>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, -1, 1, 0],
                          transition: { duration: 0.3 }
                        }}
                        className="group/skill"
                      >
                        <Box className="bg-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-700 transition-all duration-300 border border-slate-600/30 hover:border-slate-500">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="mb-3 flex justify-center"
                          >
                            <skill.icon
                              size={32}
                              style={{ color: skill.color }}
                              className="drop-shadow-lg group-hover/skill:drop-shadow-xl transition-all duration-300"
                            />
                          </motion.div>
                          <Typography
                            variant="body2"
                            className="font-medium text-slate-300 group-hover/skill:text-white transition-colors duration-300 text-xs"
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600/50">
            <Typography variant="h5"
              sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>Always Learning & Growing</Typography>

            <Typography variant="body1"
              sx={{
                color: '#94a3b8',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                maxWidth: '100%',
                textAlign: 'center',
              }}>
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies to stay at the cutting edge of software development.
            </Typography>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
