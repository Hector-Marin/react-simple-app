const fs = require('fs');
const path = require('path');
const jsonFile = require('./data copy.json'); 


function addData({title, description, image, color}){
    let id = jsonFile[jsonFile.length-1]+1;
    jsonFile.push({
        id,
        title,
        description,
        image,
        color
    })
    
    fs.writeFileSync(path.join(__dirname,"data copy.json"), JSON.stringify(jsonFile));

    return jsonFile;
}

export default addData;