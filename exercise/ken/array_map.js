// https://jsfiddle.net/7qmawbsk/49/
console.log("%cARRAY MAP: OVERRIDE", "color: red; font-weight: bold; font-size: 13px");
Array.prototype.map2 = function(callback) {
  let output = [];
	this.forEach((item, index) => {
  	output.push(callback(item, index));
  }, this);
  return output;
}

const input1 = [1, 2, 3, 4, 5];

console.log(input1.map2(x => x * 2));
console.log(input1.map2(x => x * x));

const input2 = [
  {
  	name: 'blossom',
    color: 'red'
  },
  {
  	name: 'bubbles',
    color: 'blue'
  },
  {
  	name: 'buttercup',
    color: 'green'
  }
];

const printPowerPuff = input2.map2((item, index) => {
  const obj = {};
  obj[item.name] = item.color;
  obj.age = (index + 1) * 10;

  return obj;
});

console.log(printPowerPuff);
