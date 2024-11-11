import key from "./key.json" with {type: "json"};
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: key.apiKey
});



async function main()
{
  const image = await openai.images.generate({
    model: "dall-e-3", 
    prompt: "Photo of nature taken in Canon.",
n:1,
    size: "1024x1024"
  });

  console.log(image.data);
}
main();
