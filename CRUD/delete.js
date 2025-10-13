// DELETE

const deleteStudent = async ()=>{
    const result = await Student.deleteOne({name:'Riya'});
    console.log('Deleted: ',result)
};

deleteStudent();
readStudent();