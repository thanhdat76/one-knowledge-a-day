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
