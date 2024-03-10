const controller = {};

controller.listar = (req,res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM clientes', (err, customers) =>{
            if(err){
                res.json(err);
            }
            const formattedCustomers = customers.map(customer => ({
                id: customer.id,
                nombre: customer.nombre,
                direccion: customer.direccion,
                telefono: customer.telefono
            }));
            res.render('customers',{
                data: formattedCustomers
            })
        })
       
    })
}

controller.guardar = (req, res) =>{
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO clientes set ?', [data], (err, rows) =>{
            res.redirect('/');
        })
    })
     
}

 

module.exports = controller;