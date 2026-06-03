
import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGit,
  SiJenkins,
  SiAngular,
  SiReactivex,
  SiApachekafka,
  SiGradle,
  SiGithubactions,
  SiJira,
  SiPostman,
  SiElasticsearch,
  SiJest,
  SiCypress,
  SiGraphql,
  SiSwagger,
  SiSplunk,
  SiDatadog
} from 'react-icons/si';

import { FaJava, FaDatabase } from 'react-icons/fa';
import {
  MdApi,
  MdSecurity,
  MdAccessibility,
  MdBugReport,
  MdSpeed,
  MdBuild,
  MdCode
} from 'react-icons/md';
import { TbCloudComputing } from 'react-icons/tb';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      gradient: 'from-sky-500 to-blue-500',
      skills: [
        { name: 'Java', icon: FaJava, color: '#F89820' },
        { name: 'JavaScript ES6+', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'SQL', icon: FaDatabase, color: '#F59E0B' }
      ]
    },
    {
      title: 'Frontend Technologies',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Angular / AngularJS', icon: SiAngular, color: '#DD0031' },
        { name: 'RxJS / NgRx', icon: SiReactivex, color: '#B7178C' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3 / SASS', icon: SiCss3, color: '#264DE4' },
        { name: 'Responsive UI', icon: MdAccessibility, color: '#22C55E' },
        { name: 'Accessibility / WCAG', icon: MdAccessibility, color: '#22C55E' }
      ]
    },
    {
      title: 'Backend & Engineering',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Java / J2EE', icon: FaJava, color: '#F89820' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Spring MVC', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Spring Security', icon: MdSecurity, color: '#6DB33F' },
        { name: 'Spring Data JPA', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Hibernate / JPA', icon: SiHibernate, color: '#59666C' },
        { name: 'Microservices', icon: TbCloudComputing, color: '#10B981' },
        { name: 'Servlets / JSP', icon: FaJava, color: '#F89820' },
        { name: 'OOP / SOLID', icon: MdCode, color: '#38BDF8' },
        { name: 'Design Patterns', icon: MdBuild, color: '#38BDF8' },
        { name: 'Clean Code', icon: MdBuild, color: '#A78BFA' }
      ]
    },
    {
      title: 'Databases & Caching',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'Oracle', icon: FaDatabase, color: '#F80000' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'SQL Optimization', icon: FaDatabase, color: '#F59E0B' }
      ]
    },
    {
      title: 'APIs & Integration',
      gradient: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'REST APIs', icon: MdApi, color: '#38BDF8' },
        { name: 'SOAP Web Services', icon: MdApi, color: '#38BDF8' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'Swagger / OpenAPI', icon: SiSwagger, color: '#85EA2D' },
        { name: 'OpenFeign', icon: MdApi, color: '#38BDF8' },
        { name: 'Axios / HTTP Client', icon: MdApi, color: '#5A29E4' },
        { name: 'JSON / XML', icon: MdApi, color: '#CBD5E1' }
      ]
    },
    {
      title: 'Messaging & Event Streaming',
      gradient: 'from-amber-500 to-red-500',
      skills: [
        { name: 'Apache Kafka', icon: SiApachekafka, color: '#FFFFFF' },
        { name: 'JMS / MQ Messaging', icon: MdApi, color: '#38BDF8' },
        { name: 'Event-Driven Architecture', icon: TbCloudComputing, color: '#F97316' },
        { name: 'Asynchronous Processing', icon: MdSpeed, color: '#F59E0B' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS Cloud', icon: SiAmazonaws, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes / OpenShift', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Maven / Gradle', icon: SiGradle, color: '#02303A' },
        { name: 'Git', icon: SiGit, color: '#F05032' }
      ]
    },
    {
      title: 'Testing, Monitoring & Tools',
      gradient: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'JUnit / Mockito', icon: FaJava, color: '#25A162' },
        { name: 'JMeter', icon: MdSpeed, color: '#D22128' },
        { name: 'Jest', icon: SiJest, color: '#C21325' },
        { name: 'Cypress / Playwright', icon: SiCypress, color: '#69D3A7' },
        { name: 'Cucumber', icon: MdBugReport, color: '#23D96C' },
        { name: 'Splunk', icon: SiSplunk, color: '#F97316' },
        { name: 'Datadog', icon: SiDatadog, color: '#632CA6' },
        { name: 'ELK Stack', icon: SiElasticsearch, color: '#005571' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Jira', icon: SiJira, color: '#0052CC' }
      ]
    }
  ];

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
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#94a3b8',
              maxWidth: '50rem',
              mx: 'auto',
              fontSize: '1.125rem',
              textAlign: 'center'
            }}
          >
            A focused technology stack I use to build scalable Java full stack applications,
            REST APIs, cloud-ready microservices, and modern frontend workflows.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={`bg-gradient-to-r ${category.gradient} p-4 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Typography variant="h6" className="font-bold text-white text-center">
                      {category.title}
                    </Typography>
                  </div>

                  <div className="grid grid-cols-2 gap-4 auto-rows-fr flex-1 content-start">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          scale: 1.04,
                          transition: { duration: 0.2 }
                        }}
                        className="h-full"
                      >
                        <Box className="h-full min-h-[92px] bg-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-700 transition-all duration-300 border border-slate-600/30 hover:border-slate-500 flex flex-col items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            className="mb-3 flex justify-center"
                          >
                            <skill.icon
                              size={30}
                              style={{ color: skill.color }}
                              className="drop-shadow-lg group-hover/skill:drop-shadow-xl transition-all duration-300"
                            />
                          </motion.div>

                          <Typography
                            variant="body2"
                            className="font-medium text-slate-300 transition-colors duration-300 text-xs leading-snug"
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </div>
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
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
              Always Learning & Growing
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                maxWidth: '100%',
                textAlign: 'center'
              }}
            >
              I continuously improve my skills across Java, Spring Boot, cloud-native
              development, frontend frameworks, testing, and production-ready engineering practices.
            </Typography>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

