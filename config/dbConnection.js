const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin786:admin786@cluster0.diwr1y6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;