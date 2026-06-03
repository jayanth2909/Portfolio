'use client';

import React from 'react';
import { Typography, Card, CardContent, Grid, Box } from '@mui/material';
import { Code, Coffee, Users, Lightbulb, Rocket, Brain, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Java Full Stack Development',
      description:
        'Experienced in building enterprise applications using Java 8/11/17/21, Spring Boot, REST APIs, Microservices, Angular, React, SQL/NoSQL databases, and AWS.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Backend Engineering',
      description:
        'Strong backend experience developing RESTful APIs, Spring Boot services, Hibernate/JPA workflows, Kafka/JMS integrations, caching strategies, and secure enterprise services.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Agile Collaboration',
      description:
        'Worked closely with product owners, QA, DevOps, architects, and distributed Agile teams through sprint planning, code reviews, defect triage, release support, and continuous improvement.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Performance & Reliability',
      description:
        'Focused on building scalable, maintainable, and production-ready systems through SQL optimization, Redis caching, JMeter performance validation, CI/CD pipelines, monitoring, and troubleshooting.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience', icon: Target },
    { number: '3', label: 'Enterprise Clients', icon: Code },
    { number: '∞', label: 'Learning Mindset', icon: Coffee }
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
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
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
              mb: 4
            }}
          >
            I am a Java Full Stack Developer with 5+ years of experience designing,
            developing, testing, and supporting enterprise-scale applications across
            healthcare and insurance domains. My core experience includes Java,
            Spring Boot, REST APIs, Microservices, Angular, React, SQL/NoSQL
            databases, AWS, Docker, Kubernetes, Kafka/JMS, CI/CD pipelines, testing,
            and production troubleshooting.
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
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <Box className="flex justify-center mb-4">
                        <stat.icon size={36} className="text-blue-400" />
                      </Box>
                      <Typography variant="h4" className="font-bold text-white mb-2">
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

        {/* Highlights Section */}
        <Grid container spacing={4}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 transition-all duration-500 h-full group">
                  <CardContent className="p-8">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon size={28} className="text-white" />
                    </div>

                    <Typography variant="h5" className="font-bold text-white mb-4">
                      {highlight.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#94a3b8',
                        lineHeight: 1.7
                      }}
                    >
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500/50">
            <div className="flex justify-center mb-4">
              <Lightbulb size={40} className="text-yellow-400" />
            </div>

            <Typography variant="h5" className="font-bold text-white mb-4">
              Engineering Mindset
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '60rem',
                mx: 'auto'
              }}
            >
              I focus on writing clean, maintainable, and well-tested code while
              contributing to scalable backend services, responsive frontend
              workflows, secure APIs, cloud-ready deployments, and reliable
              production systems.
            </Typography>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;