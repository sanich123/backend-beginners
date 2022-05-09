import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = 'mongodb+srv://sanich123:17011987@cluster0.p083a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express(); 

app.use(express.json())
app.use(express.static('static'));
app.use(fileUpload())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`Server is working on ${PORT} port`))
    }
    catch (e) {
        console.log(e)
    }
}

startApp()

