import config from './common/config';
import express from 'express';
import * as path from 'path';
import helmet from 'helmet';
import loaders from './common/loaders';
import { Server } from "socket.io";
async function startServer() {
    const app = express();

    await loaders({ expressApp: app });
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(helmet());
    const server = app.listen(4000, (err?: any) => {
        if (err) {
            console.info(err);
            process.exit(1);
        }
        console.info(`
		##################################################################
		🛡️  Server listening on port: \x1b[37m\x1b[1m ${4000/* config.PORT */} \x1b[0m with node version: \x1b[37m\x1b[1m ${process.versions.node} \x1b[0m 🛡️
		##################################################################
		`);
    });

    new Server(server, { cors: { origin: '*' } });
}

startServer();