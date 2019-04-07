const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongojs = require('mongojs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Define CRUD routes
app.get('/api/todoList', (req, res) => {
  db.todoItems.find({}, (err, result) => {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist/todo"));
  app.get('*', (req, res) => {    
    //send the client application for all non-api calls
    res.sendFile(path.join(__dirname, "./client/dist/todo/index.html"));
  });
}
console.log({"mongo_uri": process.env.MONGODB_URI});
const db = mongojs(process.env.MONGODB_URI || 'mongodb://localhost/todo', ['todoItems']);  
db.on("error", (error) => console.log("Mongoose Error: ", error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
