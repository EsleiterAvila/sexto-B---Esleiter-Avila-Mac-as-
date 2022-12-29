require('dotenv').config();


const { dbConnection } =  require('./src/database/config');

const db = async()=> {
        await dbConnection();
}
db();


const server = require("./src/router");


server.listen(process.env.PORT, ()=>{
    console.log(`Auto Service iniciado .... `)
})