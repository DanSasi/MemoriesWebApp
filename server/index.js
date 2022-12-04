import experss from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = experss();

app.use(bodyParser.json({limi:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limi:"30mb", extended: true}));
app.use(cors());

/*MONGODB SETUP */

const CONNECTION_URL = 'mongodb+srv://dansasi33:dansasi963@cluster0.kwjkf5a.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server Running on port: ${PORT}`)))
.catch((err)=> console.log(err.message));


