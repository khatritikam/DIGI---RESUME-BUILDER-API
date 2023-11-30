import * as express from 'express'
import { getEnvironmentVariables } from './environments/env';
import mongoose from 'mongoose';
import UserRouter from './routers/UserRouter';

export class Server {
    public app: express.Application = express();

    constructor() {
        this.setConfigurations();
        this.setRoutes()
    }

    setConfigurations() {
        this.setMongodb()
    }

    setMongodb(){
        const databaseUrl = getEnvironmentVariables().db_url
        mongoose.connect(databaseUrl).then (() =>{
            console.log('mongodb is connected')
        })
    }

    setRoutes(){
        this.app.use('/api/user',UserRouter);
    }
}