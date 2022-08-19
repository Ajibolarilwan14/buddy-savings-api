import express from 'express';
import mg from 'morgan';
const PORT = process.env.PORT;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mg('dev'));



app.listen(PORT, () => {
    console.log(`Server currently listening on localhost:${PORT}`);
    
})