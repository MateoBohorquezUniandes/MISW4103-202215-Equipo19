const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, photos, options } = config;

async function executeTest(){
    let datetime = new Date().toISOString().replace(/:/g,".");
    if(photos === 0){
      return;
    }
    let resultInfo = {}
    for(let b = 1; b <= photos; b++){
        if (!fs.existsSync(`./report`)){
            fs.mkdirSync(`./report`, { recursive: true });
        }
        if (!fs.existsSync(`./report/${config.url}`)){
          fs.mkdirSync(`./report/${config.url}`, { recursive: true });
        }
        if (!fs.existsSync(`./report/${config.url}/compare`)){
          fs.mkdirSync(`./report/${config.url}/compare`, { recursive: true });
        }
        if (!fs.existsSync(`./report/${config.url}/screenshots`)){
          fs.mkdirSync(`./report/${config.url}/screenshots`, { recursive: true });
        }
        if (!fs.existsSync(`./report/${config.url}/screenshots/v3`)){
          fs.mkdirSync(`./report/${config.url}/screenshots/v3`, { recursive: true });
        }
        if (!fs.existsSync(`./report/${config.url}/screenshots/v5`)){
          fs.mkdirSync(`./report/${config.url}/screenshots/v5`, { recursive: true });
        }
        //fs.copyFileSync('./screenshots/v3/' + ${b} + '.png', `./report/${config.url}/screenshots/v3/${b}.png`);
        //fs.copyFileSync('./screenshots/v5/${b}.png', `./report/${config.url}/screenshots/v5/${b}.png`);
        const data = await compareImages(
            fs.readFileSync(`./screenshots/v3/${b}.png`),
            fs.readFileSync(`./screenshots/v5/${b}.png`),
            options
        );
        resultInfo[b] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./report/${config.url}/compare/compare-${b}.png`, data.getBuffer());

    }
    fs.writeFileSync(`./report/${config.url}/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./report/${config.url}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }

  function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Step: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">V3</span>
        <img class="img2" src="./screenshots/v3/${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">V5</span>
        <img class="img2" src="./screenshots/v5/${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare/compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${intermedio(resInfo)}
            </div>
        </body>
    </html>`
}
function intermedio(informacion){
    let final = ``;
    for(let b = 1; b <= photos; b++){
        result = browser(b, informacion);
        final = final + result;
    }
    return final

}
function generateMultiple(){

}

(async ()=>console.log(await executeTest()))();