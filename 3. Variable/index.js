/*
var có phạm vi toàn cục hoặc phạm vi hàm (function scope).
Có thể được khai báo lại và gán lại giá trị.
Hoisting (đưa khai báo biến lên đầu phạm vi) áp dụng cho var.
javascript
*/

var x = 10;
if (true) {
  var x = 20; // cùng biến x
  console.log(x); // 20
}
console.log(x); // 20

/*
let có phạm vi khối (block scope), nghĩa là nó chỉ có hiệu lực trong khối {} nơi nó được khai báo.
Không thể được khai báo lại trong cùng một phạm vi, nhưng có thể gán lại giá trị.
Hoisting áp dụng nhưng không thể sử dụng trước khi khai báo.
*/

let y = 10;
if (true) {
  let y = 20; // biến y mới, khác với biến y bên ngoài khối
  console.log(y); // 20
}
console.log(y); // 10

/*
const có phạm vi khối như let.
Phải được khởi tạo khi khai báo và không thể gán lại giá trị sau khi khai báo.
Hoisting áp dụng nhưng không thể sử dụng trước khi khai báo.
*/

const z = 10;
if (true) {
  const z = 20; // biến z mới, khác với biến z bên ngoài khối
  console.log(z); // 20
}
console.log(z); // 10

// z = 30; // Lỗi: Assignment to constant variable.

// Phạm vi hàm và khối: var có phạm vi hàm, let và const có phạm vi khối.

function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}
testVar();

function testLet() {
  let y = 1;
  if (true) {
    let y = 2;
    console.log(y); // 2
  }
  console.log(y); // 1
}
testLet();
