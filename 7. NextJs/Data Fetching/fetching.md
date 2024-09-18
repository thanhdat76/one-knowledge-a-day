# Request Memoization

- Trong nextjs việc fetch data ở global sau đó pass xuống các lớp con qua props là không
  cần thiết. Chúng ta có thể fetch ở từng lớp con mà không ảnh hưởng đến hiệu năng vì nextjs
  sẽ tự ghi nho lại request nếu nó có cùng url và cùng tham số truyền vào.

# ORMs and Database Clients

- Có thể dùng React.cache để ghi nhớ lại request. Sẽ chỉ có 1 request được gửi đến DB khi có cùng một params được truyền vào.
