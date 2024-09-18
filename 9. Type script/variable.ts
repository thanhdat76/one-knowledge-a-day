/* unknow
    Gần tương tự như any, nhưng với giá trị được gán kiểu unknow,trước khi thực hiện các toán tử với biến, 
    chúng ra cần khai báo đúng kiểu cụ thể của biến đấy.
*/
let value: unknown;

value.foo.bar; // Error
value.trim(); // Error
value(); // Error
new value(); // Error
value[0][1]; // Error

// Work
const value2: unknown = "Hello World";
const someString: string = value2 as string;
const otherString = someString.toUpperCase(); // "HELLO WORLD"

/* never*/
// https://tek4.vn/khoa-hoc/lap-trinh-typescript-co-ban/kieu-nguyen-thuy-never
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
