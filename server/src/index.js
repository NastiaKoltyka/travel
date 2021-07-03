const express = require('express');
var cors = require('cors')
const mySql = require('mysql2');
require('./app/components/shared/models');
const bodyParser = require('body-parser');

const routing = require('./app/routes');
const config = require('./config/app');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routing());

const appPort = config.appPort;

const connection = mySql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password
});
connection.connect(function (err) {
    if (err) {
        console.log(`Error connecting to ${config.host}`, err)
    } else {
        connection.query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?", [config.database], function (err, result) {
            if (err) {
                console.log(`Error checking database exists`, err)
            } else if (result.length == 0) {
                console.log(`Please, create database before running the app`)
            } else {
                app.listen(appPort, () => console.log(`Listen on port: ${appPort}`));
            }
        });
    }
});