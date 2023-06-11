/* api.js */
import { Configuration, OpenAIApi } from 'openai'
//require('dotenv').config(); // you can't use import since it is in ES module
import dotenv from 'dotenv';
dotenv.config();

const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)