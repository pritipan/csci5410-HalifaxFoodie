var AWS = require('aws-sdk')
// var uuid = require('uuid')
AWS.config.update({
    region: 'us-east-1'
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'order';
const orderPath = '/order';
const ordersPath = '/orders';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

exports.handler = async function(event) {
    console.log('Request event: ', event);
    let response;
    switch (true) {
        case event.httpMethod === 'GET' && event.path === orderPath:
            response = await getorder(event.queryStringParameters.orderId);
            break;
        case event.httpMethod === 'GET' && event.path === ordersPath:
            response = await getorders();
            break;
        case event.httpMethod === 'POST' && event.path === orderPath:
            response = await saveorder(JSON.parse(event.body));
            break;
        case event.httpMethod === 'PATCH' && event.path === orderPath:
            const requestBody = JSON.parse(event.body);
            response = await modifyorder(requestBody.orderId, requestBody.updateKey, requestBody.updateValue);
            break;
        case event.httpMethod === 'DELETE' && event.path === orderPath:
            response = await deleteorder(JSON.parse(event.body).orderId);
            break;
        default:
            response = buildResponse(404, '404 Not Found');
    }
    return response;
}

async function getorder(orderId) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'orderId': orderId
        }
    }
    return await dynamodb.get(params).promise().then((response) => {
        return buildResponse(200, response.order);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    });
}

async function getorders() {
    const params = {
        TableName: dynamodbTableName
    }
    const allorders = await scanDynamoRecords(params, []);
    const body = {
        orders: allorders
    }
    return buildResponse(200, body);
}

async function scanDynamoRecords(scanParams, orderArray) {
    try {
        const dynamoData = await dynamodb.scan(scanParams).promise();
        orderArray = orderArray.concat(dynamoData.Items);
        if (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartkey = dynamoData.LastEvaluatedKey;
            return await scanDynamoRecords(scanParams, orderArray);
        }
        return orderArray;
    }
    catch (error) {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    }
}

async function saveorder(requestBody) {
    requestBody["orderId"] = uuidv4()
    const params = {
        TableName: dynamodbTableName,
        Item: requestBody
    }
    return await dynamodb.put(params).promise().then(() => {
        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            order: requestBody
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    })
}

async function modifyorder(orderId, updateKey, updateValue) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'orderId': orderId
        },
        UpdateExpression: `set ${updateKey} = :value`,
        ExpressionAttributeValues: {
            ':value': updateValue
        },
        ReturnValues: 'UPDATED_NEW'
    }
    return await dynamodb.update(params).promise().then((response) => {
        const body = {
            Operation: 'UPDATE',
            Message: 'SUCCESS',
            UpdatedAttributes: response
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    })
}

async function deleteorder(orderId) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'orderId': orderId
        },
        ReturnValues: 'ALL_OLD'
    }
    return await dynamodb.delete(params).promise().then((response) => {
        const body = {
            Operation: 'DELETE',
            Message: 'SUCCESS',
            order: response
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    })
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}
