1. px (Pixels)
   Định nghĩa: px là viết tắt của "pixel", một đơn vị đo tuyệt đối.
   Đặc điểm:
   Đơn vị cố định, không thay đổi dựa trên các yếu tố khác.
   Một pixel là một điểm trên màn hình và kích thước của nó không thay đổi với kích thước của văn bản hoặc các yếu tố khác trên trang.
   Sử dụng:
   Thường dùng khi cần kích thước chính xác và không thay đổi.
   Ví dụ: width: 100px; sẽ luôn là 100 pixels, bất kể kích thước font hay các yếu tố khác.
2. em
   Định nghĩa: em là đơn vị đo tương đối dựa trên kích thước font của phần tử cha (parent element).
   Đặc điểm:
   1 em bằng kích thước font của phần tử cha.
   Kích thước của em có thể thay đổi dựa trên phần tử cha.
   Có thể dẫn đến hiệu ứng "compound" (tích lũy) khi các phần tử lồng nhau có kích thước em thay đổi.
   Sử dụng:
   Thường dùng để tạo ra các bố cục linh hoạt và đáp ứng (responsive).
   Ví dụ: Nếu phần tử cha có font-size: 16px;, thì 1em sẽ bằng 16px, và 2em sẽ bằng 32px.

/_ Nếu phần tử cha có font-size là 16px _/
.parent {
font-size: 16px;
}

.child {
font-size: 2em; /_ 32px, vì 2 _ 16px \*/
}

3. rem
   Định nghĩa: rem là viết tắt của "root em", một đơn vị đo tương đối dựa trên kích thước font của phần tử gốc (root element).
   Đặc điểm:
   1 rem luôn luôn bằng kích thước font của phần tử gốc (<html>).
   Không bị ảnh hưởng bởi các phần tử cha, giúp tránh hiệu ứng "compound".
   Sử dụng:
   Thường dùng để tạo ra các kích thước đồng nhất trong toàn bộ ứng dụng.
   Ví dụ: Nếu phần tử gốc có font-size: 16px;, thì 1rem sẽ bằng 16px, và 2rem sẽ bằng 32px.

/_ Nếu phần tử gốc (html) có font-size là 16px _/
html {
font-size: 16px;
}

.element {
font-size: 2rem; /_ 32px, vì 2 _ 16px \*/
}
