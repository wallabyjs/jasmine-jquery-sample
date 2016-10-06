module.exports = function () {
  return {
    files: [
      {pattern: 'node_modules/jquery/dist/jquery.js', instrument: false},
      {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', instrument: false},
      'fixtures/**/*.html'
    ],

    tests: [
      'spec/*.spec.js'
    ],

    setup: function () {
      jasmine.getFixtures().fixturesPath = 'fixtures';
    }
  };
};
