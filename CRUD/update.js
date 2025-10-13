
  //UPDATE

const updateStudent = async()=>{
    const result = await Student.updateOne(
        {course: 'AI'},
        {$set: {course: "Python"}})
        console.log("Updated", result)
}
updateStudent();
readStudent();