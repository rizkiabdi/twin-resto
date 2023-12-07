import { connection } from "../config/db.js"
export async function webHook(req,res){
    const {transaction_status} = req.body
    const rows = await connection.query(`INSERT INTO payment VALUES('${transaction_status}')`)
    return res.json({data:req.body})
}