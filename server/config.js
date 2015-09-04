module.exports = {
  db: process.env.db || 'mongodb://testuser:testuser@ds035673.mongolab.com:35673/ab-test',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};
