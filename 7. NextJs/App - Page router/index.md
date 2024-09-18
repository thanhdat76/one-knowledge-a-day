[https://chatgpt.com/c/66e7eb6d-1b44-8005-9826-15b384a83ba0]

# App router

- React Server Components: App Router tận dụng Server Components của React, cho phép bạn dễ dàng xác định những phần nào của ứng dụng sẽ được render trên server và những phần nào trên client.
- Layout: Hỗ trợ layout một cách tự động, cho phép các trang chia sẻ một layout chung mà không cần render lại từng lần người dùng điều hướng giữa các trang.
- Data fetching: App Router cung cấp các cách tiếp cận mới cho việc fetch dữ liệu như getServerSideProps, getStaticProps không còn cần thiết nữa. Bạn có thể thực hiện fetch dữ liệu trực tiếp trong Server Components.
- Parallel và Intercepting routes: Hỗ trợ các tính năng điều hướng nâng cao như routing song song và chặn đường đi qua các routes.

# Page router

- Client-side rendering: Page Router dựa nhiều hơn vào Client-side Rendering (CSR) với khả năng Server-side Rendering (SSR) và Static Site Generation (SSG) thông qua các hàm getServerSideProps, getStaticProps, và getInitialProps.
- Layout: Không có cơ chế layout mặc định như App Router, bạn phải tự xây dựng các layout theo cách thủ công, chẳng hạn như tạo component chung và sử dụng ở nhiều trang.
- Data fetching: Dữ liệu được fetch bằng các hàm đặc biệt như getServerSideProps (SSR), getStaticProps (SSG) và getInitialProps để tải trước dữ liệu cho từng trang.
