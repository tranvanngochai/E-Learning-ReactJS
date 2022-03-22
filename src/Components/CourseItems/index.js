import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CourseItem extends Component {


    render() {
        return (
            <div className='card p-2 mb-4'>
                <img src={this.props.item.hinhAnh} style={{ width: '100%', height: 200 }} />
                <p className='lead font-weight-bold'>{this.props.item.tenKhoaHoc}</p>
                <p className='lead'>Lượt xem: {this.props.item.luotXem}</p>
                <p className='lead'>{this.props.item.ngayTao}</p>
                <Link to={`/detail/${this.props.item.maKhoaHoc}`} className='btn btn-success'>Go To Detail</Link>
            </div>
        )
    }
}

export default CourseItem
