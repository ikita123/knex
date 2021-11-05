// /Create Database by using mysql
// const mysql = require('mysql')

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Nikita@12345"
// })

// con.connect(function(err){
//     if (err) throw err;
//     console.log("connected");
//     con.query('CREATE DATABASE userdetails',function(err,result){
//         if (err) throw err;
//         console.log("database created",result)
//     })
// })


// create table by using knex

const option={
    client:'mysql',
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"Nikita@12345",
        database:"userdetails"
    }
}

const knex = require('knex')(option)
knex.schema.hasTable('Udetails').then(function(exists){
    if (!exists){
        return knex.schema.createTable('Udetails',(table)=>{
            table.increments('id'),
            table.string('username')
            table.string('password')
            table.string('gender'),
            table.integer('Birth_year')
        })
        .then(()=>console.log('Udetails table created'))
        .catch((err)=>{console.log(err)})
        
    }else{
        console.log('Udetails table is already exists.');
    }
})


// insert data by using knex

// const readline=require('readline-sync')
// function data(){
//     var username=readline.question('enter your username:-')
//     var password=readline.question('enter your password:-')
//     var gender=readline.question('enter your gender:-')
//     var Birth_year=readline.questionInt('enter yoru Birth_year:-')
//     const information={username:username,password:password,gender:gender,Birth_year:Birth_year}
//     return information
// }

// const data =[
//     {
//         username:'JayshriRathod',
//         password:'jayshri@345',
//         gender:'female',
//         Birth_year:2001
//     },
//     {
//         username:'NikitaSharma',
//         password:'nikita@456',
//         gender:'female',
//         Birth_year:2001
//     },
//     {
//         username:'NayakKumar',
//         password:'nayak@345',
//         gender:'male',
//         Birth_year:1995
//     }
// ]

// knex('Udetails').insert(data())
// .then(()=>console.log('data inserted into detials'))
// .catch((err)=>{console.log(err);})



// update data in database according to id

// function update_data(id) {
//     knex.schema.hasTable("Udetails").then(function (exists) {
//       if (exists) {
//         console.log({ Success: `details data updated successfully.` });
//         return knex("Udetails")
//           .update(data())
//           .where("id", id);
//       } else {
//         console.log({ Sorry: `details table not found` });
//       }
//     });
//   }
// update_data(5)



// Delete data from database according to id

// function drop_data_from_id(id){
//     knex.schema.hasTable('Udetails').then(function(exists){
//         if (exists) {
//             console.log({ Success: `data deleted by id:${id} successfully.` });
//             return knex("Udetails").where("id", id).del();
//           } else {
//             console.log({ Sorry: `details table not found` })
//         }
//     })
    
// }
// drop_data_from_id(9)