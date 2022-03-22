import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userServices } from '../../Services';
import { signupUserSchema } from '../../Services/user';


class SignupScreen extends Component {
    _handleSubmit = values => {
        userServices.signUp(values)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className='w-50 mx-auto'>
                <h1 className='display-4 text-center'>
                    Đăng Ký
                </h1>
                <Formik
                    initialValues={{
                        "taiKhoan": '',
                        "matKhau": '',
                        "hoTen": '',
                        "soDT": '',
                        "maNhom": 'GP01',
                        "email": ''
                    }}
                    validationSchema={signupUserSchema}
                    onSubmit={this._handleSubmit}
                    render={(formikProps) => (
                        <Form>
                            <div className='form-group'>
                                <label>Tài Khoản:</label>
                                <Field type='text' className='form-control' name='taiKhoan' onChange={formikProps.handleChange} />
                                <ErrorMessage name='taiKhoan' />
                            </div>
                            <div className='form-group'>
                                <label>Mật Khẩu:</label>
                                <Field type='password' className='form-control' name='matKhau' onChange={formikProps.handleChange} />
                                <ErrorMessage name='matKhau' />
                            </div>
                            <div className='form-group'>
                                <label>Họ Tên:</label>
                                <Field type='text' className='form-control' name='hoTen' onChange={formikProps.handleChange} />
                                <ErrorMessage name='hoTen' />
                            </div>
                            <div className='form-group'>
                                <label>Email:</label>
                                <Field type='email' className='form-control' name='email' onChange={formikProps.handleChange} />
                                <ErrorMessage name='email' />
                            </div>
                            <div className='form-group'>
                                <label>Số Điện Thoại:</label>
                                <Field type='text' className='form-control' name='soDT' onChange={formikProps.handleChange} />
                                <ErrorMessage name='soDT' />
                            </div>
                            <div className='form-group'>
                                <label>Mã Nhóm:</label>
                                <Field component='select' className='form-control' name='maNhom' onChange={formikProps.handleChange}>
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                </Field>
                                <ErrorMessage name='maNhom' />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-success'>Submit</button>
                            </div>
                        </Form>
                    )} />
            </div>
        )
    }
}

export default SignupScreen