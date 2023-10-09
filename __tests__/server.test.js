'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize } = require('../src/models');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

// Tests for food route
describe('Testing the REST /food Router', () => {
  // Test CREATE
  test('Should CREATE food (/food)', async () => {
    const foodData = {
      name: 'Banana',
      type: 'fruit',
    };

    const response = await request.post('/food').send(foodData);

    expect(response.status).toEqual(201); // Change to 201 for successful creation
    expect(response.body.name).toEqual(foodData.name);
  });

  // Test READ
  test('Should READ food (/food)', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0); // Ensure there's at least one food item
  });

  // Test UPDATE
  test('Should UPDATE food (/food/1)', async () => {
    const foodUpdateData = {
      name: 'Apple',
    };

    const response = await request.patch('/food/1').send(foodUpdateData);

    expect(response.status).toEqual(200); // Change to 200 for successful update
    expect(response.body.name).toEqual(foodUpdateData.name);
  });

  // Test DELETE
  test('Should DELETE food (/food/1)', async () => {
    const response = await request.delete('/food/1');

    expect(response.status).toEqual(204);
  });
});

// Test for clothes route
describe('Testing the REST /clothes Router', () => {
  // Test CREATE
  test('Should CREATE clothes (/clothes)', async () => {
    const clothesData = {
      name: 'Shirt',
      type: 'short sleeve',
    };

    const response = await request.post('/clothes').send(clothesData);

    expect(response.status).toEqual(201); // Change to 201 for successful creation
    expect(response.body.name).toEqual(clothesData.name);
  });

  // Test READ
  test('Should READ clothes (/clothes)', async () => {
    const response = await request.get('/clothes');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0); // Ensure there's at least one clothing item
  });

  // Test UPDATE
  test('Should UPDATE clothes (/clothes/1)', async () => {
    const clothesUpdateData = {
      type: 'long sleeve',
    };

    const response = await request.patch('/clothes/1').send(clothesUpdateData);

    expect(response.status).toEqual(200); // Change to 200 for successful update
    expect(response.body.type).toEqual(clothesUpdateData.type);
  });

  // Test DELETE
  test('Should DELETE clothes (/clothes/1)', async () => {
    const response = await request.delete('/clothes/1');

    expect(response.status).toEqual(204);
  });
});
