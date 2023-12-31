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

