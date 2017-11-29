const config = require('./config.json').mongodb;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

exports.mongoExecute = (f, obj, col, callback) => {
  MongoClient.connect(config.url, (err, db) => {
    assert.equal(null, err);
    f(db, obj, col, callback);
    db.close();
  });
};

list = (db, obj, col, callback) => {
  let collection = db.collection(col);
  collection.find().toArray((err, result) => {
    assert.equal(null, err);
    callback(result);
  });
};

find = (db, obj, col, callback) => {
  let collection = db.collection(col);
  collection.findOne(obj, (err, result) => {
    assert.equal(null, err);
    callback(result);
  });
};

findById = (db, obj, col, callback) => {
  let collection = db.collection(col);
  collection.findOne({_id: new ObjectId(obj._id)}, (err, result) => {
    assert.equal(null, err);
    callback(result);
  });
};

deleteOne = (db, obj, col, callback) => {
  var collection = db.collection(col);
  collection.deleteOne(obj, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    callback(result);
  });
};

update = (db, obj, col, callback) => {
  let collection = db.collection(col);
  collection.updateOne(obj[0], { $set: obj[1] }, (err, result) => {
    assert.equal(null, err);
    assert.equal(1, result.result.n);
    callback(result);
  });
};

updateById = (db, obj, col, callback) => {
  let collection = db.collection(col);
  collection.updateOne({_id: new ObjectId(obj[0]._id)}, { $set: obj[1] },(err, result) => {
    assert.equal(null, err);
    assert.equal(1, result.result.n);
    callback(result);
  });
};

insert = (db, obj, col, callback) => {
  // Get the documents collection
  var collection = db.collection(col);
  // Insert some documents
  collection.insertMany(obj, (err, result) => {
    assert.equal(err, null);
    assert.equal(obj.length, result.result.n);
    assert.equal(obj.length, result.ops.length);
    callback(result);
  });
};