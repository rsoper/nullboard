const express = require('express');
const app = express();
var path = require('path');

const { MongoClient } = require('mongodb');
const url = 'mongodb://root:example@localhost:27017';

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const database = client.db('nullboard');
        const collection = database.collection('boards');

        const query = { title: 'Welcome to Nullboard' };
        const board = await collection.findOne(query);

        console.log(board);

    } finally {
        await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    };

    res.sendFile('./index.html', options);
});

app.listen(80);