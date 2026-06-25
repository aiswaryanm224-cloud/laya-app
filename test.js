import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://aiswaryanm224_db_user:iPqUJY3qmvdXpAIN@cluster1.bs11r9w.mongodb.net/?appName=Cluster1";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.error);