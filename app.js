
const { Rekognition } = require("@aws-sdk/client-rekognition");
const express = require('express');

const app = express();
const port = 3000;

const client = new Rekognition({ region: "eu-central-1" });
const params = {
    /** input parameters */
  };


 app.get('/getProjects', async (req,res) => {
  console.log('Received /getProjects request');
  try{
    const data = await client.describeProjects(params);
    res.send(data);
  }catch(error){
    res.send("Error receiving response " + err.$$metadata);
  }
  
});


app.listen(port, () => console.log(`Rekognition API started...`));