import Axios from 'axios'

class CourseService {
    fetchCourses() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
        })
    }
    fetchCourseDetail(id) {
        return Axios({
            method: 'GET',
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
        })
    };
}

export default CourseService