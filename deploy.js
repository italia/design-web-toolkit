var ghpages = require('gh-pages');
var deployPath = './styleguide';

ghpages.publish(deployPath, function(err) {
  if (err) {
    console.log('Erroring with error: ', err);
  } else {
    console.log('All good, path "' + deployPath + '" deployed to gh-pages branch.');
  }
});
