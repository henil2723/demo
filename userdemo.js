const {Client} = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "gatlu@2310",
    database: "userdemo_db"
})

client.connect();

client.query(`Select *  from users`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end();
});