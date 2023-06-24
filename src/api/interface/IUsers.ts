import { Op } from 'sequelize';
import statusCode from '../../common/utils/StatusCodes';

export class IUser {
    static async signUp(data: any) {
        try {

        } catch (error) {
            console.error(error);
            return { status: statusCode.INTERNAL_SERVER_ERROR, message: 'SOMETHING_WENT_WRONG' };
        }
    }

    static async signIn(data: any) {
        try {

        } catch (error) {
            console.error(error);
            return { status: statusCode.INTERNAL_SERVER_ERROR, message: 'SOMETHING_WENT_WRONG' };
        }
    }

    static async forgetPassword(data: any) {
        try {

        } catch (error) {
            console.error(error);
            return { status: statusCode.INTERNAL_SERVER_ERROR, message: 'SOMETHING_WENT_WRONG' };
        }
    }

    static async verifyPassword(data: any) {
        try {

        } catch (error) {
            console.error(error);
            return { status: statusCode.INTERNAL_SERVER_ERROR, message: 'SOMETHING_WENT_WRONG' };
        }
    }
}