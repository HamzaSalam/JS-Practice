let x, y, sum, reminder, product, quotient;

x = 31;
y = 15;
sum = x + y;
reminder = x % y;
product = x * y;
quotient = x / y;
console.log(`sum of ${x} + ${y} = ${sum}`);
console.log(`reminder of ${x} % ${y} = ${reminder}`);
console.log(`Product of ${x} * ${y} = ${product}`);
console.log(`quotient of ${x} / ${y} = ${quotient}`);

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

console.log(x, y);
