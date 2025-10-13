 // READ

const readStudent = async()=>{
const allStudents = await Student.find();
  console.log("📘 All Students:", allStudents);
}
readStudent();