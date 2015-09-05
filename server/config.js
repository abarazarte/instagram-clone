module.exports = {
  db: process.env.db || 'mongodb://testuser:testuser@ds035673.mongolab.com:35673/ab-test',
  clientSecret: process.env.clientSecret || '220e206824b94ecf9d0072a85473fdb1',
  tokenSecret: process.env.tokenSecret || 'pick_a_hard_to_guess_string'
};
