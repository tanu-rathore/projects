import mongoose from 'mongoose';
import dotenv from 'dotenv';
//used for database connectivity

dotenv.config(); // to import username and password from .env

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://Tanu_Rathore_:tanu14@ac-pmi8x4t-shard-00-00.yedv3lr.mongodb.net:27017,ac-pmi8x4t-shard-00-01.yedv3lr.mongodb.net:27017,ac-pmi8x4t-shard-00-02.yedv3lr.mongodb.net:27017/?ssl=true&replicaSet=atlas-mqvtc2-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });//arguments: mongodb uri , object that says use new uri if previous expires

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ');
    })
}

export default Connection; //exported to index.js