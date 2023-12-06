import { connection } from '../config/db.js'
export async function getMenu(req,res,next){
    try {
    if(req.query.category) return next()
    const [rows] = await  connection.query('SELECT m.name,m.descriptions,m.price as price FROM menu as m LEFT JOIN category_menu  c on m.category_id = c.id')
    if(rows.length == 0) return res.status(400).json({message:'Product tidak ada'})
    return res.status(200).json({data:rows})
    } catch (error) {
        return next(error)
    }    
}
export async function getMenuByCategory(req,res,next){
    try {
        const categoryName = req.query.category
        const [rows] =  await connection.query(`SELECT m.name,m.price FROM menu as m INNER JOIN category_menu as c on m.category_id = c.id WHERE c.name = '${categoryName}'`)
        if(rows.length == 0) return res.status(400).json({message:'Menu tidak ada'})
        return res.status(200).json({data:rows})
    } catch (error) {
       return next(error)
    }
}

# Modify this code to update the DB schema diagram.
# To reset the sample schema, replace everything with
# two dots ('..' - without quotes).

Customer
-
Id PK int
Name varchar(25)


Order
-
OrderID PK int
CustomerID int FK >- Customer.Id
TotalAmount money


DetailOrder as DO
----
Id PK int
OrderID int FK >- Order.OrderID
ProductID int FK >- m.Id
Quantity int

Category as c 
-
Id PK int,
Name varchar(25)

# Table documentation comment 1 (try the PDF/RTF export) FK >- Category.Id
Menu as m # Table documentation comment 2
------------
Id PK int
Name varchar(50),
CategoryID int, FK >- Category.Id
Price money,
descriptions text
