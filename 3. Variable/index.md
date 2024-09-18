# khi một file javascript compiled thì bất ngờ xảy ra thì Function declaration luôn được nâng lên hay như định nghĩa trên thì javascript sẽ di chuyển các khai báo lên đầu, còn function expression thì không.

# Function declaration

function add(num1, num2) {
return num1 + num2;
}

# Function expression

var add = function (num1, num2) {
return num1 + num2;
};

# Biến với từ khóa Var được hoisting

# var

- var có phạm vi toàn cục hoặc phạm vi hàm (function scope).
- Có thể được khai báo lại và gán lại giá trị.
- Hoisting (đưa khai báo biến lên đầu phạm vi) áp dụng cho var.

# Phạm vi của biến

- Phạm vi global: Phạm vi có thể truy cập từ khắp moi nơi
- Phạm vi hàm(function scope): Phạm vi có chỉ có thể truy cập bên trong hàm
- Phạm vi block: Phạm vi bên trong câu lệnh if or for với từ khóa let

# Các kiểu dữ liệu trong js

- Number: bất kỳ loại số nào số nguyên hoặc số thực.
- String: Chuỗi có thể có một hoặc nhiều ký tự, không có kiểu ký tự đơn nào khác nhau.
- Giá trị boolean: true/false.
- Null: không có giá trị nào thỏa mãn.
- Undefined: giá trị chưa được gán hoặc giá trị không xác định.
- Object: Cấu trúc dữ liệu phức tạp hơn, thể hiện một đối tượng và các thuộc tính có thể truy cập đến.
