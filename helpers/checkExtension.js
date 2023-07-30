const checkExtension = fileName => {
  const EXTENSIONS = ['txt', 'js', 'json', 'html', 'css'];

  const checkResult = EXTENSIONS.find(item => includes(fileName));
  if (checkResult) {
    return {
      extension: checkResult,
      result: true,
    };
  }
  return {
    extension: fileName,
    result: false,
  };
};

module.exports = checkExtension;
