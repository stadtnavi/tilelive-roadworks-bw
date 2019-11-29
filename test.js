var assert = require("assert");
var RoadworksSource = require("./index");

describe("RoadworksSource", function() {
  it("fetch data", (done) => {
    this.timeout(15000);
    const source = new RoadworksSource("", done);
    assert.ok(source);
  });
});
