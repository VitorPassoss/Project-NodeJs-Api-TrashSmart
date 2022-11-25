
var imageurl = "./public/images/987f33e2-6c94-4490-ab67-dfb87e7e6d59.jpg"
const bx = require("barcode-js");
const decode = {
    conect : ( req, res ) => {
// Set up logging function.
        const logResults = (results) => console.log((results, ["type", "value", "confidence"], 2));

        // Set up analysis function.
        const analyzeBarcodes = async (filePath) => {
            try {
                const results = await bx.analyze(filePath);
                logResults(results);
                res.send(results)
            }
            catch(err) {
                console.error(`Fatal: Error analyzing image input\n${err}`);
            }
        };
        // Set up parameters.
        // Accepted file types are bmp, tiff, jpg, gif, png, and url
        const filePath = imageurl;

        // Call analyze.
        analyzeBarcodes(filePath); 
    }    
    // Call analyze.
}

module.exports = decode