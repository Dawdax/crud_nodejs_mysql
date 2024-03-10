const controller = {};

controller.listar = (req,res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM clientes', (err, customers) =>{
            if(err){
                res.json(err);
            }
            res.render('customers',{
                data:customers
            })
        })
       
    })
}

module.exports = controller;