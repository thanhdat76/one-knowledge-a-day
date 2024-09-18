# function \*

- Là một hàm generation function, nó có thể dừng lại giữa chừng và thực thi tiếp
  ở nơi đã dừng.
- Khi được gọi, nó không thực thi mà trả về một interator đề điều khiển việc thực
  thi của hàm.
- Từ khóa yield: Được sử dụng để tạm dừng việc thực thi của generator function và trả về một giá trị. Khi generator function được tiếp tục, nó sẽ tiếp tục thực thi ngay sau từ khóa yield.

- Từ khóa next(): Được sử dụng để tiếp tục việc thực thi của generator function từ nơi nó đã dừng lại. Phương thức next() trả về một đối tượng với hai thuộc tính:

  - value: Giá trị được trả về bởi từ khóa yield.
  - done: Một boolean chỉ ra liệu generator function đã hoàn thành việc thực thi hay chưa.
