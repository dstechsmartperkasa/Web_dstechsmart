const express = require('express');
const router = express.Router();

// Contact form submission
router.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Nama, email, dan pesan harus diisi'
    });
  }

  // TODO: Send email or save to database
  console.log('Contact form submitted:', { name, email, phone, subject, message });

  res.json({
    success: true,
    message: 'Pesan Anda telah diterima. Kami akan segera menghubungi Anda.'
  });
});

// Get company info
router.get('/company-info', (req, res) => {
  const companyInfo = {
    name: process.env.COMPANY_NAME,
    email: process.env.COMPANY_EMAIL,
    phone: process.env.COMPANY_PHONE,
    address: process.env.COMPANY_ADDRESS
  };

  res.json({
    success: true,
    data: companyInfo
  });
});

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;