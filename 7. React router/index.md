-- Các thành phần chính

# BrowserRouter

- là một thành phần bao bọc ứng dụng của bạn và cung cấp khả năng điều hướng sử dụng lịch sử trình duyệt (HTML5 history API).

# Routes

- Routes là thành phần bao bọc tất cả các Route và đảm bảo rằng chỉ có một Route khớp được render tại một thời điểm.

# Route

- Route được sử dụng để xác định một đường dẫn (path) và thành phần sẽ được render khi đường dẫn đó khớp.

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
</BrowserRouter>
