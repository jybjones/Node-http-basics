 var chalk = require('chalk');
 var port = process.env.PORT || 1337;

 require('./lib/server')(port);

 console.log(chalk.blue('testing colors blue'));
 console.log('Server running on' + chalk.blue.bold.underline("http://localhost:" + port));

