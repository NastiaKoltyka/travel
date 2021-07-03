const mysql = require('mysql2');
const config = require('../../../../config/app')

const getConnection = () => {
  const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    database: config.database,
    password: config.password
  }).promise();

  return connection.query('select 1')
    .then(result => {
      return connection;
    });
}

const getAll = () => {
  return getConnection()
    .then(connection => {
      return connection.query("SELECT * FROM countries")
        .then(result => {
          connection.close()
          return result[0];
        });
    })
};

module.exports = {
  getAll,
}