import React, { Component } from 'react';
import { fetchDetailCourse } from '../../Redux/Actions/course';
import { connect } from 'react-redux';

class DetailScreen extends Component {
    render() {
        return (
            <div className="container">
                <div className="card mx-auto">
                    <img className="card-img-top" src={this.props.courseDetail.hinhAnh} alt="course detail" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.courseDetail.tenKhoaHoc}</h5>
                        <p>Lượt xem: {this.props.courseDetail.luotXem}</p>
                        <p>Ngày tạo: {this.props.courseDetail.ngayTao}</p>
                        <p className="card-text">Số lượng học viên: {this.props.courseDetail.soLuongHocVien}</p>

                    </div>
                </div>
            </div>

        )
    }


    componentDidMount() {
        this.props.dispatch(fetchDetailCourse(this.props.match.params.courseId))
    }
}
const mapStateToProps = (state) => ({
    courseDetail: state.course.courseDetail || {
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh: '',
        nguoiTao: {
            taiKhoan: '',
            hoTen: ''
        }
    }

})

export default connect(mapStateToProps)(DetailScreen)
