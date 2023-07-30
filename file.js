const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const dataValidator = require('./helpers/dataValidator');
const checkExtension = require('./helpers/checkExtension');

const createFile = async (fileName, content) => {
  const file = { fileName, content };

  const result = dataValidator(file);
  //   console.log(result.error.details);
  if (result.error) {
    const error = result.error.details;
    const [path] = error[0].path;

    console.log(chalk.red(`Please specify ${path} parametr`));
    return;
  }
  const check = checkExtension(fileName);
  console.log(check);
};

module.exports = {
  createFile,
};
