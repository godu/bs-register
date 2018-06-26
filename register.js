const { process } = require('bs-loader');

require.extensions['.re'] = require.extensions['.ml'] = function (module, ...args) {
  const { id, filename } = module;
  const content = process(
    id,
    filename
  );
  module._compile(content, module.filename);
};
