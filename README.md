# Dự án website bán linh kiện PC trực tuyến
Chúng tôi đã phát triển ứng dụng này với Spring Boot và React nhầm tối ưu trải nghiệm người dùng. Và MySQL là lựa chọn lưu trữ dữ liệu trong dự án này.
## Làm thế nào để chạy ở local ?
Trước tiên bạn phải clone dự án này về

    git clone https://github.com/cuibapn2014/WebPrograming.git

Tiếp theo, để bạn có thể chạy ứng dụng này dễ dàng thì chúng đã cấu hình toàn bộ MySQL và Spring Boot trong tệp 

> ./docker-compose.yml

Đừng quên đảm bảo rằng máy tính của bạn đã cài đặt `Docker`. Nếu máy tính của bạn chưa có hãy tải bằng đường dẫn này: https://www.docker.com/get-started/  
Khi đã có `Docker` trước tiền bạn hãy chạy lệnh `docker pull mysql` để sử dụng `mysql` trên docker. Docker sẽ tự tìm kiếm phiên bản mới nhất của `mysql` mà cài đặt cho bạn. 
Tiếp theo việc bạn cần làm là chạy bash `docker pull manhtuandev/webpc` cần thiết để có thể chạy ứng dụng này trên Docker.
Bước cuối cùng để chạy ứng dụng này và đương nhiên là bạn không cần cấu hình bất kỳ thứ gì bởi Docker đã làm tất cả. Hãy chạy lệnh

    docker-compose up -d

Và chờ ứng dụng Spring Boot run hoàn tất và truy cập kết quả: 

    https://localhost:8085/
