import {inject, injectable} from "inversify";
import {TYPES} from "../../../config/types";
import {HttpClient} from "../../../utils/http-client";

export interface EventConfig {
    url: string
    data: object
}

export interface EventEmitter {
    subscribe(config: EventConfig): Promise<any>
}

@injectable()
export class EventEmitterImpl implements EventEmitter {
    constructor(@inject(TYPES.HttpClient) private httpClient: HttpClient) {
    }

    subscribe(event: EventConfig): Promise<any> {
        return this.httpClient.post(event.url, event.data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
