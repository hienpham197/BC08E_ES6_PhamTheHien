export class ThongTin {
  ho = "";
  ten = "";
  email = "";
  soDienThoai = "";
  diaChi = "";
  thongTinDiChuyen = "";
  loaiNhiem = "";

  constructor() {}

  hienThiThongTin() {
    let content = `
          <tr>
              <th>Họ tên</th>
              <td>${this.ho} ${this.ten}</td>
          </tr>
          <tr>
              <th>Email</th>
              <td>${this.email}</td>
          </tr>
          <tr>
              <th>Số điện thoại</th>
              <td>${this.soDienThoai}</td>
          </tr>
          <tr>
              <th>Ngày tháng năm sinh</th>
              <td>${this.ngay}/${this.thang}/${this.nam}</td>
          </tr>
          <tr>
              <th>Địa chỉ</th>
              <td>${this.diaChi}</td>
          </tr>
          <tr>
              <th>Thông tin di chuyển</th>
              <td>${this.thongTinDiChuyen}</td>
          </tr>
          <tr>
              <th>Loại tiếp xúc</th>
              <td>${this.loaiNhiem}</td>
          </tr>
      `;
    return content;
  }
}
