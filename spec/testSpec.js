describe("test", function() {
  spyOn(Math.random()).and.returnValue(5);
  it('prints stuff', function() {
    console.log(Math.random());
    console.log(Math.random());
  });
});
