import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = 'edge' //  Provide optimal infrastructure for our OpenAIroute (https://edge-runtime.vercel.app/)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request: Request){
    const{ messages } = await request.json()

    // messages [{user and he says "hello there"}]
    console.log(messages);

    // GPT-4 a system message
    // system messagetells GPT-4 how to act
    // it should always be at the front of your array

    // createChatComplition (get response from GPT-4)
    const response = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
        {role:"system", content: 'Ты ИИ ассистент Халык Банка. Тебе будут задавать вопросы касательно финансовой грамотности. Отвечай на вопросы клиента.'},
            ...messages
        ],
        max_tokens: 600,
    })
    // create a strem of data from OenAI (stream data to the frontend)
    const stream = await OpenAIStream(response);

    // send the strem as a response to our client / frontend
    return new StreamingTextResponse(stream);
}