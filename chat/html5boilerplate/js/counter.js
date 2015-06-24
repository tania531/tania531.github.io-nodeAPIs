// var expect = require("chai").expect;
var Counter = require("./counters/js/counter.js");
var counts1 = Counter.count("TDD for the win");
var counts2 = Counter.count("BDD better");
var counts3 = Counter.count("");

describe("Counter", function(){
  describe("dount", function(){
    it("counts characters", function(){
      expect(counts1.characters).to.equal(15);
      expect(counts2.characters).to.equal(17);
    });
    it("counts words", function(){
      expect(counts1.words).to.equal(3);
    });
    it("counts spaces", function(){
      expect(counts1.spaces).to.equal(3);
    });
    it("counts numbers", function(){
      expect(counts1.numbers).to.equal(3);
    });
    it("counts paragraphs", function(){
      expect(counts1.paragraphs).to.equal(3);
    });
  });
});
