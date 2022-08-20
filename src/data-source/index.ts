import { DataSource } from 'typeorm';
import { Users } from '../entity/User';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    entities: [Users]
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data source has been initialized");
        
    })
    .catch((err) => {
        console.error(`Error occurred during data source initialization: ${err}`);
        
    });