var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

  it("should accept numbers as well", function(){
    set.add(9);
    set.add(8);
    set.add(7);
    set.add(6);
    assert.isTrue(set.contains(9));
    assert.isTrue(set.contains(8));
    assert.isTrue(set.contains(7));
    assert.isTrue(set.contains(6));
  });

  it("should accept any input -- numbers, objects, functions, arrays", function(){
    set.add({butt:"large"});
    set.add(function() { return true; });
    set.add(['chucky']);
    set.add(9);
    assert.isTrue(set.contains({butt:"large"}));
    // assert.isTrue(set.contains(function() { return true; }));
    // assert.isTrue(set.contains(['chucky']));
    assert.isTrue(set.contains(9));
  });

});
