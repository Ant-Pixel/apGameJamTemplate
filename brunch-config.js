// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!client)/, // Files that are not in `app` dir.
      'client.js': /^client/
    }
  },
  stylesheets: {joinTo: 'client.css'}
};

exports.plugins = {
  babel: {presets: ['latest']}
};
