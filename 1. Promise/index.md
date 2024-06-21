# 24/5/2024

😉 Đầu tư cho bản thân không bao giờ là vô ích

# Promise

- Là một đối tượng javascript đặc biệt
- Mỗi khi gọi resolve or reject, trạng thái của promise sẽ là cuối cùng, những lời gọi resolve or reject khác sẽ bị bỏ qua(bao gồm cả code)

# Promise.All

- Promise All: Sẽ trả về resolve khi tất cả các promise được resolve
- Thứ tự kết quả trả về giống nhứ thứ tự của các promise trong mảng
  <!-- Promise.all([
      new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
      new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
      new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
      ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member -->

- Reject khi một trong những promise bị reject(những promise khác sẽ bị bỏ qua)
  <!-- Promise.all([
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
      new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).catch(alert); // Error: Whoops! -->

# Promise.allSettled

- Trả về kết quả của tất cả promise(resolve and reject)

# Promise.race

- Trả về kết quả(resolve/reject)(settled) của promise xong đầu tiên(wins the race), những promise còn lại sẽ bị bỏ qua

# Promise.any

- Trả về kết quả của promise đầu tiền ở trạng thái fulfilled, nếu tất cả promise đều reject, nó sẽ trả về một promise reject với - AggregateError: Một đối tượng chưa tất cả các lỗi

Summary
There are 6 static methods of Promise class:

    1. Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
    2. Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
    status: "fulfilled" or "rejected"
    value (if fulfilled) or reason (if rejected).
    3. Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
    4. Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
    5. Promise.resolve(value) – makes a resolved promise with the given value.
    6. Promise.reject(error) – makes a rejected promise with the given error.
    Of all these, Promise.all is probably the most common in practice.

- https://javascript.info/promise-basics
- https://javascript.info/promise-api
