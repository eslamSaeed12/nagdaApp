import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons/faAndroid";
import { faChrome } from "@fortawesome/free-brands-svg-icons/faChrome";

const Footer = () => {
  return (
    <footer
      className="footer py-5 mt-5 shadow-lg"
      style={{ backgroundColor: "#1C4A5B", color: "#Ffff" }}
    >
      <div className="container">
        <div className="row toColumnPlease">
          <div className="col-lg-4 col-md-6 mx-lg-0 mx-auto">
            <h4 className="text-lg-right text-center">القائمة</h4>
            <ul className="list-group list-group-flush text-lg-right text-center pr-0 ">
              <li className="list-group">
                <Link href="/home">
                  <a className="nav-link">الرئيسية</a>
                </Link>
              </li>

              <li className="list-group">
                <Link href="/who-we-are">
                  <a className="nav-link">من نحن</a>
                </Link>
              </li>
              <li className="list-group">
                <Link href="/faq">
                  <a className="nav-link">اسئله مكرره</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mx-lg-0 mx-auto my-lg-0 my-5">
            <h4 className="text-lg-right text-center">روابط سريعه</h4>
            <div className="mt-4 d-flex flex-column">
              <div className="col-12 text-lg-right text-center">
                <h6>حمل تطبيق الاندرويد</h6>
                <button className="btn btn-primary">
                  <span>تحميل</span>
                  <FontAwesomeIcon icon={faAndroid} className="mr-2 fa-lg" />
                </button>
              </div>
              <div className="col-12 mt-4 text-lg-right text-center">
                <h6>تصفح تطبيق الويب</h6>
                <button className="btn btn-secondary">
                  <a href="/web-app">
                    <span>تشغيل</span>
                    <FontAwesomeIcon icon={faChrome} className="mr-2 fa-lg" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 text-right text-center mx-lg-0 mx-auto">
            <h4 className="text-lg-right text-center">معلومات هامة</h4>
            <p className="lead mt-4 text-lg-right text-center">
              جميع الحقوق محفوظة فريق عمل
              <span className="badge badge-warning mx-2 text-capitalize">
                think first
              </span>
              كلية الاداب - قسم الجغرافيه - شعبه نظم المعلومات الجغرافيه - 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
