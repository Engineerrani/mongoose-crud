//CRUD with mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoose_prac");

const mySchema = new mongoose.Schema({
  name: String,
  age: Number,
  school: String,
  hobby: String,
  gender: String,
});

//create/insert data in database

const create = async () => {
  const myData = mongoose.model("information", mySchema);
  let data = new myData({
    name: "gyanwati",
    age: "34",
    school: "shiva",
    hobby: "happiness",
    gender: "female",
  });
  const result = await data.save();
  console.log(result);
};
create();

// update data in database;
const update = async () => {
  let myData = mongoose.model("information", mySchema);
  let data = await myData.updateOne(
    { name: "gyanwati" },
    { $set: { name: "ramprasad", age: 42 } }
  );
  console.log(data);
};
update();

// Read/get data from the database
const read = async () => {
  let readData = mongoose.model("information", mySchema);
  let data = await readData.find();
  console.log(data);
};
read();

// delete data from database
const dele = async () => {
  let deleteData = mongoose.model("information", mySchema);
  const data = await deleteData.deleteOne({ name: "some" });
  console.log(data);
};
dele();
