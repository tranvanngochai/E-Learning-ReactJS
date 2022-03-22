import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.jpg';
import { connect } from 'react-redux';

class Header extends Component {

    _onClickOut = () => {
        localStorage.removeItem('credentials');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <a className="navbar-brand mr-30" href="#">
                    <img src={Logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <NavLink to="/" exact className='nav-link' id='home' >Trang Chủ</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {
                            this.props.credentials ? (<li className='nav-item form-name'>
                                <span className='nav-link hiName'>Hi ! {this.props.credentials.hoTen} </span>
                                <button className='btn btn-succsess' onClick={this._onClickOut}>Đăng Xuất</button>
                            </li>) : (
                                <>
                                    <li className='nav-item'>
                                        <NavLink to="/signup" exact className='nav-link' id='signup' >Đăng ký</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to="/signin" exact className='nav-link' id='signin' >Đăng nhập</NavLink>
                                    </li>
                                </>
                            )
                        }


                    </ul>
                </div>
            </nav>


        )
    }
};

const mapStateToProps = (state) => {
    return {
        credentials: state.user.credentials
    }
}

export default connect(mapStateToProps)(Header);