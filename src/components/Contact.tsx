import React, { useState } from 'react';
import { Typography, TextField, Button, Card, CardContent, Grid, Alert } from '@mui/material';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "jayanthutukurius@gmail.com",
      href: "mailto:jayanthutukurius@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (603)-557-5250",
      href: "tel:+16035575250"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nashua, NH",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h3" className="font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </Typography>
          <Typography variant="body1"
                              sx={{
                              color: '#94a3b8',         // text-slate-400
                              maxWidth: '60rem',        // max-w-3xl
                              mx: 'auto',               // mx-auto
                              fontSize: '1.125rem',     // text-lg
                              textAlign: 'center',      // ⬅️ THIS centers the text
                              }}>
            I'm always open to discussing new opportunities, projects, or just having a chat about technology
          </Typography>
        </motion.div>

        <Grid container spacing={8}>
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" className="font-bold mb-6 text-white">
                Let's Work Together
              </Typography>
              <Typography variant="body1" className="text-slate-400 mb-8">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you're a company looking to hire, or you're someone with a project in mind, 
                I'd love to hear from you.
              </Typography>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800 border border-slate-700 hover:border-blue-400 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-blue-600 rounded-full">
                            <info.icon size={24} className="text-white" />
                          </div>
                          <div>
                            <Typography variant="h6" className="font-semibold text-white">
                              {info.title}
                            </Typography>
                            <Typography variant="body2" className="text-slate-400">
                              {info.details}
                            </Typography>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800 border border-slate-700">
                <CardContent className="p-8">
                  {showAlert && (
                    <Alert severity="success" className="mb-6">
                      Thank you for your message! I'll get back to you soon.
                    </Alert>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-700"
                          InputLabelProps={{ className: 'text-slate-400' }}
                          InputProps={{ className: 'text-white' }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-700"
                          InputLabelProps={{ className: 'text-slate-400' }}
                          InputProps={{ className: 'text-white' }}
                        />
                      </Grid>
                    </Grid>
                    
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700"
                      InputLabelProps={{ className: 'text-slate-400' }}
                      InputProps={{ className: 'text-white' }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700"
                      InputLabelProps={{ className: 'text-slate-400' }}
                      InputProps={{ className: 'text-white' }}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;