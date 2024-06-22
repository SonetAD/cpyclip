const copyToClipboard = async () => {
  const fs = require('fs-extra');
  const clipboardy = (await import('clipboardy')).default;
  const chalk = (await import('chalk')).default;
  async function cpyCLip(filePath) {
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');

      clipboardy.writeSync(fileContents);
      console.log(chalk.green.bold('Copied to clipboard successfully.'));
    } catch (error) {
      console.error(chalk.red.bold(`ERROR: ${error.message}`));
    }
  }

  return cpyCLip;
};

module.exports = copyToClipboard();
