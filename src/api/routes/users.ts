import { Router, Request, Response } from 'express';
import statusCode from '../../common/utils/StatusCodes';
import { IUser } from '../interface/IUsers';
import { isAuth } from "../middlewares/Authorizationn";

const route = Router();

export default (app: Router) => {
    app.use('', route);

    route.post('/signup', signUp);
    route.post('/signin', signIn);
    route.post('/verify', isAuth, verifyPassword);
    route.get('/profile', isAuth, getProfile);
    route.post('/forget-password', isAuth, forgetPassword);
};

async function signUp(req: Request, res: Response) {
    const data = req.body;
    IUser.signUp(data)
        .then(response => {
            res.status(response.status).json(response);
        })
        .catch(e => {
            console.error(e);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ status: statusCode.INTERNAL_SERVER_ERROR, message: 'something went wrong' });
        });
}

async function signIn(req: Request, res: Response) {
    const data = req.body;
    IUser.signIn(data)
        .then(response => {
            res.status(response.status).json(response);
        })
        .catch(e => {
            console.error(e);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ status: statusCode.INTERNAL_SERVER_ERROR, message: 'something went wrong' });
        });
}

async function forgetPassword(req: Request, res: Response) {
    const data = req.body;
    IUser.forgetPassword(data)
        .then(response => {
            res.status(response.status).json(response);
        })
        .catch(e => {
            console.error(e);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ status: statusCode.INTERNAL_SERVER_ERROR, message: 'something went wrong' });
        });
}

async function getProfile(req: Request, res: Response) {
    const data = req.headers;
    console.log({ data })
    IUser.getProfile(data)
        .then(response => {
            res.status(response.status).json(response);
        })
        .catch(e => {
            console.error(e);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ status: statusCode.INTERNAL_SERVER_ERROR, message: 'something went wrong' });
        });
}

async function verifyPassword(req: Request, res: Response) {
    const data = req.body;
    IUser.verifyPassword(data)
        .then(response => {
            res.status(response.status).json(response);
        })
        .catch(e => {
            console.error(e);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ status: statusCode.INTERNAL_SERVER_ERROR, message: 'something went wrong' });
        });
}