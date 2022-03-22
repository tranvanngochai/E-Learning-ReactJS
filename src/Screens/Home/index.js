import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItems';
import { connect } from 'react-redux';
import { fetchCourses } from '../../Redux/Actions/course';

class HomeScreen extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <h1 className='display-4 text-center'>Danh Sách Khóa Học</h1>
                    <div className='container'>
                        <div className='row'>
                            {
                                this.props.courseList.map((item, index) => (
                                    <div className='col-3' key={index}>
                                        <CourseItem item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount() {
        this.props.dispatch(fetchCourses())
    };
}

const mapStateToProps = state => ({
    courseList: state.course.courses
});

export default connect(mapStateToProps)(HomeScreen);
