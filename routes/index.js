const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'PT. DSTech Smart Perkasa - IT & Security System Solutions',
    page: 'home'
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'Tentang Kami - PT. DSTech Smart Perkasa',
    page: 'about'
  });
});

// Services page
router.get('/services', (req, res) => {
  res.render('services', { 
    title: 'Layanan Kami - PT. DSTech Smart Perkasa',
    page: 'services'
  });
});

// Portfolio page
router.get('/portfolio', (req, res) => {
  res.render('portfolio', { 
    title: 'Portfolio - PT. DSTech Smart Perkasa',
    page: 'portfolio'
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Hubungi Kami - PT. DSTech Smart Perkasa',
    page: 'contact'
  });
});

module.exports = router;