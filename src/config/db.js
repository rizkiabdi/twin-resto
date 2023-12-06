import {createPool} from 'mysql2/promise'
import 'dotenv/config'
export const connection = createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB,
    connectionLimit:5
})

