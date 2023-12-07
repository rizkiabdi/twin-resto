import { connection } from "../config/db.js"
export async function webHook(req,res){
    try {
        const {transaction_status} = req.body
        const rows = await connection.query(`INSERT INTO payment VALUES('${transaction_status}')`)
        return res.status(200).json({status:ok})
        
    } catch (error) {
        return res.json({error:error})
    }
}