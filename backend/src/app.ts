import {container} from "./config/container";
import {InversifyExpressServer} from "inversify-express-utils";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * Webpack HMR Activation
 */
type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

export default class App {
    public run() {
        if (!process.env.PORT) {
            process.exit(1);
        }

        const PORT: number = parseInt(process.env.PORT as string, 10);

        const core = new InversifyExpressServer(container);
        core.setConfig((app: express.Application) => {
            app.use(helmet());
            app.use(cors());
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({extended: true}));  //  Allow form-data parsing
            app.use(fileUpload())
        });

        const ser = core.build();

        /**
         * Server Activation
         */
        const app = ser.listen(PORT, () => {
            if (process.env.NODE_ENV == 'development') {
                console.log(`Listening on port ${PORT}`);
            }
        });

        if (module.hot) {
            module.hot.accept();
            module.hot.dispose(() => app.close());
        }

        return app;
    }
}
