const NodeCache = require( "node-cache" );
const CacheService = new NodeCache({ 
    stdTTL: 100, 
    checkperiod: 120 
});

//Export CacheService
module.exports = CacheService;