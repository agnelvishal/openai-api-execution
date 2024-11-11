# Initial Steps
1. Rename sample_key.json as key.json
2. Enter your openai API key in apiKey value in key.json file

# For image generation.
Run `node app.js` 

# For image variation
Replace `trishul.png` with image you want to replace. Run `node variation.js` . 

# For changing parts of existing image 
Replace `trishul.png` with full image. Replace `masked.png` with image where parts that need to be changed are made transparent. Use either Photoshop or GIMP for it. 
Run `node masked.js`. 