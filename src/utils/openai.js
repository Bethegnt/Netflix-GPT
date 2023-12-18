import OpenAI from "openai";
import { OPEN_API } from "./constants";
const openai = new OpenAI({
    apiKey : OPEN_API,
    dangerouslyAllowBrowser : true,
});

export  default openai;

