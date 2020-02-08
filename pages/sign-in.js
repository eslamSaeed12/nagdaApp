import {Component, useEffect, useState} from 'react'
import App from '../components/app';
import {activePage} from "../actions/actions";
import {connect} from 'react-redux'
import signUpSvg from '../public/media/undraw_fill_forms_yltj.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'


const SignInForm = (props) => {

    let formStateModel = {
        username: {},
        email: {},
        password: {},
    };
    const [validForm, setValidForm] = useState(true);
    const [formState, setFormState] = useState({...formStateModel});

    return (
        <>
            <style jsx>
                {`
                    .right-section-signup-form-column{
                        border-left:10px solid #1C4A5B;
                        border-radius:9px;
                    }
                    @media(max-width:992px){
                        .right-section-signup-form-column{
                            border:none;
                        }
                    }
                    .social-auth .nav-link{
                        color:#1C4A5B;
                        transition:opacity 0.15s ease;
                    }
                    .social-auth .nav-link:hover{
                        opacity:0.7;
                    }
                `}
            </style>
            <section className="py-4">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 mx-lg-0 mx-auto right-section-signup-form-column ">
                            <form className={"text-lg-right text-center"}>
                                <div className="form-group">
                                    <label>البريد الالكتروني</label>
                                    <input type={'email'} className={"form-control  py-4 col-sm-8 mx-lg-0 mx-auto"}/>
                                </div>
                                <div className="form-group">
                                    <label>الرقم السري</label>
                                    <input type={'password'} className={"form-control  py-4 col-sm-8 mx-lg-0 mx-auto"}/>
                                </div>
                                <div className="form-group">
                                    <label className="ml-2">تزكرني</label>
                                    <input type="checkbox"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">دخول</button>
                                </div>
                                <div className="form-group">
                                    <a href="/forget-password" className="default-link">هل نسيت كلمة السر ؟ استرجع حسابك الان</a>
                                    <br/>
                                    <a href="/forget-api" className="default-link">ليس لديك حساب ؟ سجل الان</a>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-12 mx-lg-0 mx-auto my-lg-auto mt-5 mb-4 order-lg-last order-first">
                            <div className="d-flex flex-column">
                                <div>
                                    <h3 className="text-center">تسجيل الدخول عن طريق</h3>
                                    <ul className="nav social-auth d-flex flex-row justify-content-center mt-4">
                                        <li className="nav-item">
                                            <a href="" className="nav-link" title="facebook">
                                                <FontAwesomeIcon icon={faFacebook} className="fa-4x"/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link" title="google">
                                                <FontAwesomeIcon icon={faGoogle} className="fa-4x"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4 d-lg-block d-none">
                                    <p className="text-center">
                                        كل الحقوق محفوظة لفريق عمل
                                        <span className="badge badge-primary text-uppercase font-weight-light mr-2">think first</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}


class SignIn extends Component {

    componentWillMount() {
        this.props.dispatch(activePage('sign-in'))
    }

    render() {
        return (
            <App>
                <SignInForm/>
            </App>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(SignIn)