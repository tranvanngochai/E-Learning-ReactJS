import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/user';

class SignInScreen extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    "taiKhoan": '',
                    "matKhau": ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                    this.props.dispatch(login(values))
                }}
                render={({ handleChange }) => (
                    <Form className='w-50 mx-auto text-center'>
                        <h1>Đăng Nhập</h1>
                        <div className='form-group'>
                            <label>Tài Khoản</label>
                            <Field type='text' name='taiKhoan' className='from-control' onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Mật Khẩu</label>
                            <Field type='password' name='matKhau' className='from-control' onChange={handleChange} />
                        </div>
                        <button className='btn btn-succsess'>Đăng Nhập</button>

                    </Form>
                )
                }

            />

        )
    }
}

export default connect()(SignInScreen)
