const client = require('../lib/client');

// async/await needs to run in a function
run();

async function run() {

    try {
        // initiate connecting to db
        await client.connect();

        // run a query to create tables
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(256) NOT NULL,
                display_name VARCHAR(256) NOT NULL,
                hash VARCHAR(512) NOT NULL
            );
            
            CREATE TABLE dmc_colors (
                id VARCHAR(256) NOT NULL,
                description VARCHAR(256) NOT NULL,
                red INTEGER NOT NULL,
                green INTEGER NOT NULL,
                blue INTEGER NOT NULL,
                hex VARCHAR(256) NOT NULL
            );           
        `);

        console.log('create tables complete');
    }
    catch (err) {
        // problem? let's see the error...
        console.log(err);
    }
    finally {
        // success or failure, need to close the db connection
        client.end();
    }

}