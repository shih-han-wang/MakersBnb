describe('Houses', function() {
  beforeEach(function() {
  myHouses = new Houses();
  });


  describe('_houseList', function() {
    it('starts as an empty object', function() {
      expect(myHouses._houseList).toEqual({});
    });
  });

  // describe('_houseList', function() {
  //   it('starts as an empty object', function() {
  //     myHouses._houseList.fart = {smell: "awful"};
  //     expect(myHouses._houseList.fart).toEqual({smell: "awful"});
  //   });
  // });

  // describe('_houseList', function() {
  //   it('starts as an empty object', function() {
  //     myHouses._houseList.fart = {smell: "awful"};
  //     expect(myHouses._houseList.fart.smell).toBe("awful");
  //   });
  // });

  // describe('addHouse', function() {
  //   it('adds keys and objects', function() {
  //     myHouses.addHouse("Mansion");
  //     expect(myHouses._houseList.Mansion).toEqual({descrip: null, price: null, dates: []});
  //   });
  // });

  describe('addHouse', function() {
    it('adds NAME and empty object {}', function() {
      myHouses.addHouse("Mansion");
      expect(myHouses._houseList.Mansion).toEqual({});
    });
  });

  describe('addPrice', function() {
    it('adds price to existing house', function() {
      myHouses.addHouse("Shack");
      myHouses.addPrice(Shack, 400);
      expect(myHouses._houseList.Shack.price).toBe(400);
    });
  });

  // describe('addHouse', function() {
  //   it('can add description', function() {
  //     myHouses.addHouse('Mansion', {description: "Uuuuge, very Uuuge"});
  //     expect(myHouses._houseList.Mansion.descrip).toBe("Uuuuge, very Uuuge");
  //   });
  // });

  // describe('addHouse', function() {
  //   it('can add any number of dates (CSVs)', function() {
  //     myHouses.addHouse('Mansion', {dates: ['1/2/3', '2/3/4', '3/4/5']});
  //     expect(myHouses._houseList.Mansion.dates).toEqual(['1/2/3', '2/3/4', '3/4/5']);
  //   });
  // });

  // describe('addHouse', function() {
  //   it('can add MORE dates (CSVs)', function() {
  //     myHouses.addHouse('Mansion', {dates: ['1/2/3', '2/3/4', '3/4/5']});
  //     myHouses.addHouse('Mansion', {dates: ['4/5/6', '5/6/7', '6/7/8']});
  //     expect(myHouses._houseList.Mansion.dates).toEqual(['1/2/3', '2/3/4', '3/4/5', '4/5/6', '5/6/7', '6/7/8' ]);
  //   });
  // });




  // describe('increase', function() {
  //   it('increases by 10', function() {
  //     aThermostat.temperature = 15;
  //     aThermostat.up();
  //     expect(aThermostat.temperature).toBe(25);
  //   });
  // });



});
