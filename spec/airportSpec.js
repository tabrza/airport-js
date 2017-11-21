describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('when landing a plane', function(){
    it('instruct the plane to land', function(){
      plane.isFlying = true;
      expect(airport.landPlane(plane)).toBe(true);
    });

    it('confirms plane is in terminal', function(){
      plane.isFlying = true;
      airport.landPlane(plane);
      var landedPlane = airport.terminal[airport.terminal.length - 1];
      expect(landedPlane).toEqual(plane);
    });
  });
});
