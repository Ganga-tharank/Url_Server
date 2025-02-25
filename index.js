const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const Port = process.env.PORT || 8000;
const DatabaseAPI = process.env.DATABASE_URL || 'mongodb+srv://gangatharan03:BSwHwjfolegvaVMI@url-server.a1thvtq.mongodb.net/?retryWrites=true&w=majority&appName=Url-server'

mongoose.set('strictQuery', false)

async function Main(){
    await mongoose.connect(DatabaseAPI)
    console.log('connected to database')
    app.listen(Port , ()=> console.log(`Connected to port ${Port}`))
}

Main();
