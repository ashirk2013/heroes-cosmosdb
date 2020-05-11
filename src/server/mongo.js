const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
// const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;
const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${env.accountName}@`;

function connect() {
    mongoose.set('debug', true);
    return mongoose.connect(mongoUri, {useNewUrlParser: true});
}

module.exports = {
    connect,
    mongoose
};
