const express = require('express');
const router = express.Router();
const { sequelize } = require('../models');

// Example unauthenticated routes
router.post('/:model', async (req, res) => {
    try {
      // Add an item to the DB and return the added item
      const { model } = req.params;
      const newItem = await sequelize.models[model].create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/:model', async (req, res) => {
    try {
      // Return a list of :model items
      const { model } = req.params;
      const items = await sequelize.models[model].findAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/:model/:id', async (req, res) => {
    try {
      // Return a single item by ID
      const { model, id } = req.params;
      const item = await sequelize.models[model].findByPk(id);
      if (!item) {
        res.status(404).json({});
      } else {
        res.status(200).json(item);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.put('/:model/:id', async (req, res) => {
    try {
      // Return a single, updated item by ID
      const { model, id } = req.params;
      const [updated] = await sequelize.models[model].update(req.body, {
        where: { id },
        returning: true,
      });
      if (!updated) {
        res.status(404).json({});
      } else {
        res.status(200).json(updated[1][0]);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.delete('/:model/:id', async (req, res) => {
    try {
      // Delete an item by ID and return an empty object
      const { model, id } = req.params;
      await sequelize.models[model].destroy({
        where: { id },
      });
      res.status(204).json({});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Export the router
  module.exports = router;
  

module.exports = router;

