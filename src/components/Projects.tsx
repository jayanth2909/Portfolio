import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Chip, Grid, Box } from '@mui/material';
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Driver Drowsiness Detection System",
      description: "Built a real-time drowsiness detection system using CNN, OpenCV, and TensorFlow to alert when driver fatigue is detected.",
      image: "https://images.unsplash.com/photo-1581092334425-cc8d4fba00c3?auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
      demoUrl: "#",
      codeUrl: "https://github.com/jayanth2909",
      stats: { stars: "25", users: "100+", year: "2022" }
    },
    {
      title: "Music Player App",
      description: "Cross-platform music streaming app with Firebase real-time DB support for playlists, metadata, and user preferences.",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1be?auto=format&fit=crop&w=800&q=60",
      technologies: ["React Native", "Firebase", "JavaScript"],
      demoUrl: "#",
      codeUrl: "https://github.com/jayanth2909/Music",
      stats: { stars: "18", users: "200+", year: "2023" }
    },
    {
      title: "Polling Web Application",
      description: "Flask-based polling system allowing users to vote, see live results, and view visualizations of poll outcomes.",
      image: "https://images.unsplash.com/photo-1573497161015-1e7f3efcfd90?auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "Flask", "MySQL", "JavaScript"],
      demoUrl: "#",
      codeUrl: "https://github.com/jayanth2909/polling-we-app",
      stats: { stars: "12", users: "80+", year: "2021" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h3" className="font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </Typography>
          <Typography variant="body1"
            sx={{
              color: '#94a3b8',
              maxWidth: '50rem',
              mx: 'auto',
              fontSize: '1.125rem',
              textAlign: 'center',
            }}>
            A showcase of innovative solutions I've built, from concept to deployment
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-purple-400 transition-all duration-300 h-full flex flex-col">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="h-48 object-cover"
                  />
                  <CardContent className="flex-grow flex flex-col p-6">
                    <Typography variant="h6" className="font-bold mb-3 text-white">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-400 mb-4 flex-grow">
                      {project.description}
                    </Typography>

                    {/* Project Stats */}
                    <div className="flex items-center space-x-3 mb-4 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.stats.year}</span>
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          className="bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ExternalLink size={14} />}
                        href={project.demoUrl}
                        className="bg-purple-600 hover:bg-purple-700 text-xs flex-1"
                      >
                        Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Github size={14} />}
                        href={project.codeUrl}
                        className="border-slate-500 text-slate-300 hover:bg-slate-600 text-xs"
                      >
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
