const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("MongoDB connected successfully"))
.catch((err) => console.log("Connection Error:", err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model("Student", studentSchema);

async function run() {


    
}
run();