let client = require('../config/dbConnection');

let collection = client.db().collection('CatsColl');

function postCat(cat, callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function deleteCat(cat, callback) {
    collection.deleteOne(cat,callback);
}


module.exports = {postCat,getAllCats,deleteCat}