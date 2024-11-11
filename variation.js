import key from "./key.json" with {type: "json"};
import OpenAI from "openai";
import fs from 'fs'

const openai = new OpenAI({
  apiKey: key.apiKey
});




async function main()
{

const response = await openai.images.createVariation({
  model: "dall-e-2",
  image: fs.createReadStream("trishul.png"),
  n: 1,
  size: "1024x1024"
});
var image_url = response.data[0].url;

  console.log(image_url);

}

main();
