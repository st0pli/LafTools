<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - Thế hệ tiếp theo của hộp công cụ đa năng được thiết kế dành cho lập trình viên
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Xem trước phiên bản nội bộ của LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Trang này được tạo từ nội bộ LafTools.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Xem lướt qua

Để sử dụng nhanh các chức năng này, chúng tôi đã triển khai trang web trực tuyến ổn định tại khu vực US và CN để bạn sử dụng. Hầu hết các công cụ đều có sẵn trên các trang web trực tuyến của chúng tôi ngoại trừ một số công cụ dựa trên khả năng cụ thể của hệ điều hành.

- 🇺🇸 cộng hòa Liên bang: [laftools.dev](https://laftools.dev)
- 🇨🇳 Chỉ Trung Quốc đại lục: [laftools.cn](https://laftools.cn)

# 🔋 Có chuyện gì với cái tên vậy?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Functional

Về bản chất, LafTools là một bộ công cụ cung cấp một loạt các bộ công cụ được liên kết, không đồng bộ và tuyệt vời.

Hãy yên tâm, dự án này sẽ phát triển theo những cách đáng chú ý và tuyệt vời theo thời gian. Dự án này cần nhiều thời gian hơn, giống như rượu vang, sẽ ngon hơn theo thời gian.

# 💡 Giới thiệu

Bạn có thể thắc mắc tại sao chúng tôi quyết tâm phát triển hộp công cụ này vì có rất nhiều công cụ có thể được sử dụng trên Internet. Thật vậy, hầu hết các công cụ chúng tôi cung cấp đều có thể dễ dàng tìm thấy trên Internet, chẳng hạn như codec, bộ định dạng, dịch thuật, Mã QR, v.v… Tuy nhiên, đây không phải là cách tiếp cận thoải mái và hiệu quả nhất để sử dụng những công cụ này.

Bạn đã bao giờ gặp phải những vấn đề dưới đây khi sử dụng những công cụ trực tuyến đó chưa?

- Không có khả năng truy cập ngoại tuyến.
- Không có chủ đề tối toàn cầu.
- Không có phong cách giao diện người dùng hiệu quả.
- Hiệu suất mạng kém.
- Quảng cáo gây khó chịu.
- Vấn đề rò rỉ dữ liệu.

Nếu câu trả lời cho bất kỳ câu hỏi nào ở trên là có thì bạn nên cân nhắc dùng thử hộp công cụ của chúng tôi. Nó cung cấp các tính năng sau:

- FOSS mãi mãi
- Thời gian chạy nhẹ
- Hỗ trợ nền tảng đầy đủ (bao gồm ARMv8)
- Hỗ trợ đầy đủ tương tự GPT
- Tích hợp cao với giao diện người dùng hiệu quả
- Hình ảnh Docker có sẵn và phiên bản di động
- Những trợ giúp bổ sung như ghi chú, hướng dẫn sử dụng, v.v...

# 🌠 Xem trước

> LafTools vẫn đang được phát triển, giao diện người dùng, các phần phụ thuộc hoặc điều kiện tiên quyết của nó có thể thay đổi khi cần thiết.

### Xem trước:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Bắt đầu

## 1. Thiết lập môi trường hệ thống

Để đơn giản, giả sử bạn đã sao chép kho lưu trữ này sang `C:\Usersjerry\project\laftools-repo` trên Windows hoặc `/Users/jerry/projects/laftools-repo` trên Linux/MacOS, thì bạn nên khai báo env và đặt config bên dưới trong tệp của mình **~/.bashrc* * hoặc đơn giản là thực thi chúng trước khi chạy bất kỳ lệnh nào.

Nếu bạn đang sử dụng HĐH Windows, vui lòng đảm bảo rằng tất cả các lệnh được thực thi trong git-bash, tìm hiểu thêm vui lòng tham khảo [ĐÓNG GÓP](/docs/vi/CONTRIBUTION.md). Ngoài ra, bạn nên tránh sử dụng bất kỳ khoảng trắng hoặc ký tự không phải tiếng Anh nào trong đường dẫn tệp chứa dự án này.

**Env for Windows:**

```bash
git config core.ignorecase false
export LAFTOOLS_ROOT="C:\users\jerry\project\laftools-repo"
export PATH=$PATH:$LAFTOOLS_ROOT\dev\source\windows-bin
```

**Env for Linux/MacOS:**

```bash
export LAFTOOLS_ROOT=/users/jerry/projects/laftools-repo
```

## 2. Biên dịch và chạy

```bash
# cài đặt thư viện toàn cầu cần thiết
npm i -g pnpm ts-node typescript

# cài đặt dự án
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# chạy dịch vụ cốt lõi
npm run fe-web

```

## 3. Xây dựng

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 📑 Vật liệu khác

Dưới đây là các tài liệu khác mà bạn có thể xem nếu muốn tìm hiểu thêm chi tiết về dự án này:

- [Câu hỏi thường gặp](/docs/vi/FAQ.md)
- [SỰ ĐÓNG GÓP](/docs/vi/CONTRIBUTION.md)
- [Dành cho nhà phát triển Trung Quốc](/devtools/notes/common/issues.md)

# 💐 Icons

Chúng tôi đánh giá cao những nghệ sĩ tài năng đã cung cấp các biểu tượng đẹp dưới đây:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Sự nhìn nhận

Dự án này sẽ không thể thực hiện được nếu không có các dự án nguồn mở tuyệt vời mà cá nhân tôi muốn bày tỏ lòng biết ơn sâu sắc nhất tới:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Chắc chắn, có những dự án nguồn mở khác đã mang lại lợi ích và tạo điều kiện thuận lợi cho dự án này, điều mà tôi không thể trình bày chi tiết trong phần này; Nếu không có những dự án này và nỗ lực của những nhà phát triển tài năng này, LafTools sẽ không thể tồn tại được.

Thank you!

Ryan Laf  
Ngày 2 tháng 2 năm 2023

# 🪪 License

Dự án này được bảo vệ theo Giấy phép Công cộng GNU Affero, vui lòng xem tệp GIẤY PHÉP để biết thêm chi tiết.
