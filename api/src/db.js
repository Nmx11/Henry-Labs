const { Pool } = require('pg');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
let pool = new Pool({
  connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryapp`,
});
function query(querystring) {
  if (!client) return Promise.reject(new Error('Client not initiated.'));
  pool.connect()
    .then(client => client.query(querystring))
    .then((result) => 
      client.release()
        .then(() => result))
    .then((result) => {
      if(result.command==='DELETE'){
        return [result.rowCount];
      }
      return result.rows});
}
function queryOne(querystring) {
  return query(querystring)
    .then((result) => result[0]);
}
function queryOneProp(querystring, prop) {
  return queryOne(querystring)
    .then((result) => result[prop]);
}
function dropPool() {
  if (pool) {
    pool.end();
    pool = false;
  }
  return;
}
module.exports = {
  conn: pool,
  query,
  queryOne,
  queryOneProp,
  dropPool,
};

