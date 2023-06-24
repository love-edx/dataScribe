import { Router, Request, Response } from 'express';
import statusCode from '../../common/utils/StatusCodes';
import { IUser } from '../interface/IUsers';

const route = Router();

export default (app: Router) => {
    app.use('/user', route);

    route.post('/signin', /* isAuth */ signIn);
    route.post('/signup', /* isAuth */ signUp);
    route.post('/verify', /* isAuth */ verifyPassword);
    route.post('/forget-password', /* isAuth */ forgetPassword);
};

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