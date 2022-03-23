const mariadb = require('mariadb');
const config = require('../config');

let dbConnPool = {
    'pool': null
}

dbConnPool.getConnection = async function () {
    if ((this.pool) === null) {
        this.pool = mariadb.createPool(config.db);
    }

    return await this.pool.getConnection();
};

module.exports = dbConnPool;


