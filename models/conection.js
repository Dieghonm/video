const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:3000';

const DB_NAME = 'VIDEO';
let DB = null;

const connection = () => (DB ? Promise.resolve(DB)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    DB = conn.db(DB_NAME);
    return DB;
    }));

module.exports = connection;