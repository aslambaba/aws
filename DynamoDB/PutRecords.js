"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

exports.handler = function (event, context, callback) {
  let DynamoDB = new AWS.DynamoDB.DocumentClient();

  let params = {
    TableName: "Friends",
    Item: {
        id: "3",
        Name: "Uzair",
        University: "UCP"
    }
  };

  DynamoDB.put(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};
