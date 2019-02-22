// See http://brunch.io for documentation.
exports.files = {};
exports.conventions = {
    assets: "client/static/**"
};

exports.files.javascripts = {
    joinTo: {
      'vendor.js': /^(?!client)/, // Files that are not in `app` dir.
      'client.js': /^client/
    }
};

exports.files.stylesheets = {
    joinTo: 'client.css'
};

exports.watcher = {
    awaitWriteFinish: true,
    usePolling: true
}

exports.plugins = {
  babel: {
      presets: ['latest'],
      ignore: [/^node_modules/, /^vendor/]
  }
};
