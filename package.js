Package.describe({
    name: 'nimblenotes:sideshow',
    version: '0.0.1',
    summary: 'Sideshow interactive tour',
    git: 'https://github.com/NimbleNotes/nimblenotes-packages',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'coffeescript',
        'jquery',
        'stylus'
    ], 'client');
    api.addFiles([
      'distr/fonts/sideshow-fontface.min.css',
      'distr/stylesheets/sideshow.min.css',
      'distr/dependencies/Markdown.Converter.js',
      'distr/dependencies/Markdown.Sanitizer.js',
      'distr/dependencies/jazz.min.js',
      'distr/sideshow.js'
    ], 'client');
    api.addFiles([
      'distr/fonts/sideshow-icons/sideshow-icons.eot',
      'distr/fonts/sideshow-icons/sideshow-icons.svg',
      'distr/fonts/sideshow-icons/sideshow-icons.ttf',
      'distr/fonts/sideshow-icons/sideshow-icons.woff'
    ], 'client', {isAsset: true});
});

Package.onTest(function (api) {
    api.use('tinytest');
});
