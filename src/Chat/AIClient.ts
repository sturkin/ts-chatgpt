export default interface AIClient {
    completion(messages: {role: 'user' | 'system' | 'assistant', content:string}[]): Promise<{role: 'assistant', content: string|null}>;
}