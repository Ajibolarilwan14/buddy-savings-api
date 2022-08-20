import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

const connect = connection.connect((err) => {
    if (err) {
        console.error(`Failed to connect to the MySQL database: ${err.stack}`);
        return;
    }

    console.log(`Connection to the MySQL succeeded at thread: ${connection.threadId}`);
});

export default connect;