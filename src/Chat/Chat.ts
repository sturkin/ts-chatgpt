import OpenAIClient from "./OpenAIClient";
import {autoInjectable, injectable} from "tsyringe";
@autoInjectable()
export default class Chat {
    private messages: Array<{role: 'user' | 'system' | 'assistant', content:string}> = [];
    private client: OpenAIClient;

    constructor(client?: OpenAIClient) {
        if (client === undefined) {
            throw new Error('di error');
        }
        this.client = client;
    }

    async say(message: string) {
        this.messages.push({
            role: 'user',
            content: message
        });

        const resp = await this.client.completion(this.messages);

        if ( this.isValidResponse(resp) ) {
            this.messages.push(resp);
        }

        console.log(resp);
    }

    private isValidResponse(response: {role: "assistant", content: string | null}): response is {role: "assistant", content: string}
    {
        return typeof response.content === 'string';
    }
}