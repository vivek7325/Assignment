const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000'
}));

const conn = 'mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database';

mongoose.connect(conn)
  .then(() => console.log('connected')) 
  .catch(err => console.log(err));

const configuration = new mongoose.Schema({
  configId: String,
  data: Array,
  remark: String
});

const Configuration = mongoose.model('Configuration', configuration);

app.listen(8080, () => {
  console.log('Server Started');
});

app.get('/api/configurations/:id', async (req, res) => {
    try {
      const configId = req.params.id;
      const config = await Configuration.findOne({ configId });
  
      if (!config) {
        return res.status(404).send('Configuration not found');
      }
  
      res.json(config.data);
    } catch (error) {
      res.status(500).send('server error');
    }
  });

  app.put('/api/configurations/:id', async (req, res) => {
    try {
      const configId = req.params.id;
      const { remark } = req.body;
  
      const config = await Configuration.findOneAndUpdate({ configId }, { remark }, { new: true });
  
      if (!config) {
        return res.status(404).send('Configuration not found');
      }
  
      res.json({ message: 'success' });
    } catch (error) {
      res.status(500).send('server error');
    }
  });
  