import key from "./key.json" with {type: "json"};
import OpenAI from "openai";
import fs from 'fs'

const openai = new OpenAI({
  apiKey: key.apiKey
});


async function main()
{

const response = await openai.images.edit({
  model: "dall-e-2",
  image: fs.createReadStream("trishul.png"),
  mask: fs.createReadStream("masked.png"),
  prompt: "The red cloth slighly waving and of full length",
  n: 1,
  size: "1024x1024"
});
var image_url = response.data[0].url;

console.log(image_url);
}

main();
