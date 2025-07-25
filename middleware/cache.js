const myCache = require("../utils/cache/cache");

function getDataFromCache(key) {
  return myCache.get(key);
}

function setDataToCache(key, product) {
  myCache.set(key, product);
}

function delDataFromCache(key) {
  myCache.del(key);
}
module.exports = { getDataFromCache, setDataToCache, delDataFromCache };
