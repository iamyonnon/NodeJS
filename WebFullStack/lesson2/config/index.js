var configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        return 'mongodb://'+configValues.myhost+'/'+configValues.mydb;
    }
}