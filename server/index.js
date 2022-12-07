import experss from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
const app = experss();

app.use(bodyParser.json({limi:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limi:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
/*MONGODB SETUP */


const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server Running on port: ${PORT}`)))
.catch((err)=> console.log(err.message));


