# 25/5/2024

# Vocabulary

- reachability: Khả năng tiếp cận
- to tell the truth: Thành thật mà nói

# Object.assign: copy obj một các nguyên thủy, (những vẫn bị ref nếu obj chứa obj khác)

# structuredClone (version node 17 trở lên): The structuredClone method can clone most data types, such as objects, arrays, primitive values.

# this

    + https://javascript.info/object-methods

    - Một functine được lưu trữ trong đối tượng gọi là "method"
    - Có thể tham chiếu tới đối từ phương thức thông qua từ khóa this
    - Giá trị của this được xác định trong thời gian chạy(khi một function được khai báo, có thể dùng this, nhưng giá trị
    của this sẽ không tồn tại cho đến khi hàm được chạy)
    - When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
