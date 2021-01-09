const { MongoClient } = require('mongodb');
const { mongo: { host, port } } = require('./config');

// Connection URI
const uri = `mongodb+srv://${host}:${port}/?poolSize=20&w=majority`;
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
