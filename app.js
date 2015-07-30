 var chalk = require('chalk');

 require('./lib/server')(1337);

 console.log(chalk.blue('testing colors blue'));
 console.log('Server running on' + chalk.blue.bold.underline("http://localhost:1337"));

