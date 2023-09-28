const express = require('express');
const router = express.Router();
const bearerAuth = require('../auth/middleware/bearer');
const permissions = require('../auth/middleware/acl');

// Example protected routes
router.get('/resource', bearerAuth, (req, res) => {
  // This route requires authentication only
  res.status(200).send('Authenticated access to resource');
});
  
router.post('/create', bearerAuth, permissions('create'), (req, res) => {
  // This route requires a valid token and the create capability
  res.status(200).send('Create resource');
});
  
router.put('/update', bearerAuth, permissions('update'), (req, res) => {
  // This route requires a valid token and the update capability
  res.status(200).send('Update resource');
});
  
router.delete('/delete', bearerAuth, permissions('delete'), (req, res) => {
  // This route requires a valid token and the delete capability
  res.status(200).send('Delete resource');
});

// Export the router
module.exports = router;

