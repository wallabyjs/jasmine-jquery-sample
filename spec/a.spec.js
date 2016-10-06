describe('jasmine-jquery', function () {
  it('should work', function () {
    loadFixtures('simple.test.html');
    expect($('#simpleFixture').text()).toBe('some complex content here');
  });
});
