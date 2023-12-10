import OpenAI from "openai";
import AIClient from "./AIClient";
import {ChatCompletion} from "openai/src/resources/chat/completions";

export default class OpenAIClient implements AIClient
{
    private openai: OpenAI

    constructor() {
        this.openai = new OpenAI({apiKey:''});
    }

    public async completion(messages: {role: 'user' | 'system' | 'assistant', content:string}[]): Promise<{role: 'assistant', content: string|null}> {
        return this.openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo",
        }).then((completions: ChatCompletion) => {
            return completions.choices[0].message;
        });
    }

}