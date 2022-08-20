import express from 'express';
import mg from 'morgan';
import helmet from 'helmet';
// import connect from './src/config/db';
import { AppDataSource } from './src/data-source';
import userRouter from './src/routes/userRouter';

const PORT = process.env.PORT;


const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mg('dev'));
app.use('/api', userRouter)
const db = AppDataSource;



app.listen(PORT, () => {
    console.log(`Server currently listening on localhost:${PORT}`); 
});