const options = {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'Nikita@12345',
            database: 'userdetails'
        }
    }
    
    const knex = require('knex')(options);
    
    knex.raw("SELECT VERSION()").then(
        (version) => console.log((version[0][0]))
    ).catch((err) => { console.log( err); throw err })
        .finally(() => {
            knex.destroy();
        });