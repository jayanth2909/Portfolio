'use client';

import React from 'react';
import { Typography, Card, CardContent, Chip } from '@mui/material';
import { Building, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkExperience: React.FC = () => {
  const experiences = [
  {
    title: "Java Full Stack Developer",
    company: "Blue Cross Blue Shield Association",
    location: "Boston, MA, USA",
    duration: "Jan 2024 – Present",
    description:
      "Designed, developed, tested, and supported enterprise healthcare applications using Java, Spring Boot, REST APIs, Microservices, Angular, React, SQL databases, Kafka/JMS, AWS, Docker, Kubernetes, and CI/CD pipelines.",
    achievements: [
      "Designed and developed scalable Java/Spring Boot Microservices using Java 17/21, Spring Boot 3, Spring MVC, and REST APIs for member enrollment, provider eligibility, claims processing, and healthcare workflows.",
      "Built backend modules involving REST API integrations, Spring Boot services, PostgreSQL/Oracle persistence, caching workflows, and downstream enterprise system communication.",
      "Developed responsive frontend modules using Angular 17, RxJS, TypeScript, HTML5, CSS3, SASS/SCSS, and reusable components for internal healthcare applications.",
      "Built and enhanced React 18 modules using React Hooks, Redux Toolkit, JavaScript, TypeScript, and reusable UI components for provider-facing application features.",
      "Implemented secure backend workflows using Spring Security, OAuth2, JWT, RBAC, and service-to-service authentication.",
      "Built event-driven backend workflows using Apache Kafka, JMS messaging, and asynchronous processing patterns.",
      "Optimized application performance by tuning SQL queries, improving backend service calls, implementing Redis caching, and troubleshooting service-level bottlenecks.",
      "Supported API performance validation using JMeter by simulating concurrent requests, reviewing response times, and helping identify bottlenecks in Java/Spring Boot REST APIs.",
      "Supported cloud-ready deployments using AWS, Docker, Kubernetes, OpenShift, Jenkins, GitHub Actions, Maven, and CI/CD pipelines.",
      "Developed and maintained automated tests using JUnit, Mockito, Jest, Cypress, and Playwright.",
      "Improved frontend quality by building accessible UI workflows with Angular, reusable components, WCAG/screen-reader-conscious design practices, and API-driven form validations.",
      "Collaborated with architects, product owners, QA, DevOps, and distributed Agile teams during sprint planning, code reviews, defect triage, release support, and production troubleshooting."
    ],
    technologies: [
      "Java 17/21",
      "Spring Boot 3",
      "Spring MVC",
      "REST APIs",
      "Microservices",
      "Angular 17",
      "RxJS",
      "React 18",
      "Redux Toolkit",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Oracle",
      "Redis",
      "Kafka",
      "JMS",
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "JUnit",
      "Mockito",
      "JMeter",
      "Splunk",
      "Datadog",
      "Agile/Scrum"
    ]
  },
  {
    title: "Java Full Stack Developer",
    company: "State Farm",
    location: "Bloomington, IL, USA",
    duration: "Mar 2022 – Aug 2023",
    description:
      "Developed and supported enterprise insurance applications using Java, Spring Boot, REST APIs, SOAP services, Angular, React, relational databases, Kafka/JMS, CI/CD pipelines, and cloud/containerized deployments.",
    achievements: [
      "Developed enterprise backend Java/Spring Boot Microservices using Java 11, Spring Boot 2.x, Spring MVC, Spring Data JPA, and Hibernate for claims, policy, payment, and customer account workflows.",
      "Modernized legacy applications by migrating Servlets/JSP, jQuery, and Struts-based modules into Spring Boot Microservices, Angular 14, and React.js.",
      "Designed and implemented REST APIs, SOAP services, and upstream/downstream integrations using Java, Spring MVC, OpenFeign, JSON, and XML.",
      "Developed frontend modules using Angular 14, RxJS, TypeScript, HTML5, CSS3, React 17, React Hooks, and reusable UI components.",
      "Implemented service-layer and persistence workflows using Hibernate, JPA, Oracle, PostgreSQL, MySQL, MongoDB, Redis, and SQL optimization techniques.",
      "Applied OOP, SOLID principles, and design patterns while contributing to API contracts, reusable service components, and scalable backend workflows.",
      "Built event-driven backend workflows using Apache Kafka, JMS messaging, and asynchronous processing to support distributed insurance systems.",
      "Applied Core Java multithreading and Executor Framework concepts to support asynchronous workloads and backend batch processing.",
      "Supported CI/CD pipelines and deployments using Jenkins, Maven, Git, Docker, Kubernetes, AWS, and OpenShift.",
      "Created and maintained automated tests using JUnit, Mockito, Cucumber, Cypress, and Playwright.",
      "Monitored and resolved application issues using Datadog, CloudWatch, ELK Stack, application logs, and local debugging.",
      "Collaborated with QA, DevOps, product teams, and business stakeholders during Agile/SAFe, stand-ups, code reviews, defect discussions, and deployment support."
    ],
    technologies: [
      "Java 11",
      "Spring Boot 2.x",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "SOAP",
      "OpenFeign",
      "Angular 14",
      "RxJS",
      "React 17",
      "TypeScript",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "JMS",
      "Docker",
      "Kubernetes",
      "AWS",
      "OpenShift",
      "Jenkins",
      "Maven",
      "JUnit",
      "Mockito",
      "Cucumber",
      "Datadog",
      "ELK Stack",
      "Agile/SAFe"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Savena Solutions",
    location: "Hyderabad, India",
    duration: "Dec 2020 – Feb 2022",
    description:
      "Developed full stack enterprise web applications using Java, Spring Boot, REST APIs, React, Angular, MySQL, Maven, Jenkins, and Agile/Scrum delivery practices.",
    achievements: [
      "Developed backend services using Java 8/11, Spring Boot, Spring MVC, and Spring Data JPA to support enterprise web applications and internal business workflows.",
      "Designed and maintained REST APIs for frontend integration, backend business logic execution, and secure communication between application layers.",
      "Implemented service-layer and persistence-layer logic using Hibernate, JPA, JDBC, and MySQL to support transactional data processing and CRUD operations.",
      "Built frontend features using React.js, React Hooks, Angular 11, JavaScript, TypeScript, HTML5, CSS3, and Bootstrap.",
      "Integrated frontend applications with backend APIs using Axios, React Router, reusable service methods, and JSON-based communication patterns.",
      "Implemented authentication and access control using Spring Security and JWT to secure application endpoints and protected workflows.",
      "Documented REST APIs using Swagger/OpenAPI to support frontend integration, API testing, and QA collaboration.",
      "Supported builds, deployments, and release activities using Maven, Apache Tomcat, Git, and Jenkins.",
      "Created frontend unit tests using Jest and supported debugging, defect fixes, regression testing, and application troubleshooting.",
      "Collaborated with developers, QA teams, and business users in Agile/Scrum environments during sprint planning, testing, release coordination, and defect resolution."
    ],
    technologies: [
      "Java 8/11",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "JPA",
      "JDBC",
      "REST APIs",
      "Swagger/OpenAPI",
      "React.js",
      "React Hooks",
      "Angular 11",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Axios",
      "React Router",
      "MySQL",
      "Spring Security",
      "JWT",
      "Maven",
      "Apache Tomcat",
      "Git",
      "Jenkins",
      "Jest",
      "Agile/Scrum"
    ]
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
