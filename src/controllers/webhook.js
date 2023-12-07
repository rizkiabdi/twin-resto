import { connection } from "../config/db.js"
export async function webHook(req,res){
    try {
        const {order_id,transaction_status} = req.body
        if(transaction_status === "pending"){
            const tambah = await connection.query(`INSERT INTO payment VALUES('${transaction_status}','${order_id}'`)
        }else if(transaction_status === "settlement" || transaction_status === "capture" ){
            const update = await connection.query(`UPDATE payment SET status='${transaction_status}' WHERE order_id='${order_id}'`)
        }
        return res.status(200).json({status:ok})
        
    } catch (error) {
        return res.json({error:error})
    }
}