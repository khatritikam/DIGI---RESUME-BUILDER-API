import { Router } from "express";


class UserRouter {
    public router:Router;

    constructor(){
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes(){
        this.router.get('/login')
    }
    postRoutes(){}
    patchRoutes(){}
    deleteRoutes(){}
}

export default new UserRouter().router