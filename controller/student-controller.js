var connection = require('../database/dbConnect')

const addStudent = (req, res) => {
    
    connection.query('INSERT INTO student VALUES(?,?,?,?,?)', [req.body.std_id, req.body.name, req.body.address, req.body.registered_date, req.body.course], (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
}

const updateStudent = (req, res) => {
    connection.query('UPDATE student SET name =?, address=?, registered_date=?,course=? WHERE std_id = ?',[req.body.name,req.body.address,req.body.registered_date,req.body.course,req.params.std_id],(err,result)=>{
       
        if (err) return res.json(err)
        return res.json(result)
       
        
    })



}

const deleteStudent = (req, res) => {
    connection.query('DELETE FROM student WHERE std_id=?', [req.params.std_id], (err, rows) => {
        if (err) throw err
        res.json({message:"successfully deleted"})
    })
}

const getAllStudent = (req, res) => {
    const sql = "SELECT * FROM student"
    connection.query(sql, (err, result) => {
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result)
    })
}

const getStudentById = () => {
    connection.query('SELECT * FROM student WHERE std_id=?', [req.params.id], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const searchStudent = () =>{
    connection.connect((error)=>{
        if (error) throw error;
        let query = "SELECT * FROM student WHERE name LIKE ?";
        let value = "%+value+%"
    
        connection.query(query,[value],(error,results)=>{
            if(error) throw error;
            console.log(results);
        });
    });
}





module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent,
    getStudentById,
    searchStudent
   
}
