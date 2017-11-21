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

    it('does not land plane if not clear', function(){
      plane.isFlying = true;
      airport.weather = 'not clear';
      airport.landPlane(plane);
      var landedPlane = airport.terminal[airport.terminal.length - 1];
      expect(landedPlane).toBe(undefined);
    });
  });

  describe('when plane is taking off', function(){
    it('instructs a plane to take off', function(){
      plane.isFlying = false;
      expect(airport.departPlane(plane)).toBe(true);
    });

    it('confirms plane is no longer in terminal', function(){
      plane.isFlying = true;
      airport.landPlane(plane);
      airport.departPlane(plane);
      expect(airport.terminal).toEqual([]);
    });

    it('does not takeoff if weather is stormy', function(){
      plane.isFlying = true;
      airport.landPlane(plane);
      airport.weather = 'not clear'
      airport.departPlane(plane);
      expect(airport.terminal).toEqual([plane]);
    });
  });
});
