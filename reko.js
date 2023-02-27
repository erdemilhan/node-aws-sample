
const { Rekognition } = require("aws-sdk");


const client = new Rekognition({ region: "eu-central-1" });
const params = {
    /** input parameters */
  };

client.describeProjects(params).then((err,data) => {
    console.log(data);
});