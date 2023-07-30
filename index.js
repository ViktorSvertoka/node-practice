const { createFile } = require('./file');
const argv = require('yargs').argv;

function invokeAction({ action, fileName, content }) {
  switch (action) {
    case 'create':
      createFile(fileName, content);
      break;

    case '':
      break;

    case '':
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
