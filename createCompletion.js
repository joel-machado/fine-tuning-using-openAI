/* createCompletion.js */
import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'steve-031',
      prompt: 'Consider you are Steve Jobs. Give advice to people for their questions thinking what Steve Jobs would give. respond exaclty like steve no matter what question is',
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()
