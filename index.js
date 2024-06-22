#!/usr/bin/env node
(async () => {
  const minimist = require('minimist');
  const cpyClip = require('./cpyclip');
  const chalk = (await import('chalk')).default;
  const pkg = require('./package.json');

  const args = minimist(process.argv.slice(2));

  if (args.help || args.h) {
    console.log('Usage: cpyclip <filepath>');
    process.exit();
  }

  if (args.version || args.v) {
    console.log(`v${pkg.version}`);
    process.exit();
  }
  if (!args._[0]) {
    console.error(chalk.red('Error: Please provide a file path.'));
    process.exit(1);
  }

  cpyClip.then((copyToClipboard) => {
    copyToClipboard(args._[0]);
  });
})();
