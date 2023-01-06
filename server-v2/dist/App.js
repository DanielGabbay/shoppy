const express = require('express');
const app = express();
const port = 3000;
// MongoDB connection
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://d9777834:Dani0406@cluster0.5abjvbt.mongodb.net/test';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
MongoClient.connect(url, options, (error, client) => {
    if (error)
        throw error;
    const db = client.db('myDatabase');
    const collection = db.collection('users');
});
// Mongoose schema for users collection
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
const User = mongoose.model('User', userSchema);
// Create a new user document
const user = new User({ name: 'John', age: 30 });
// Save the user document to the users collection
user.save((error) => {
    if (error)
        throw error;
    console.log('User saved successfully!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=App.js.map