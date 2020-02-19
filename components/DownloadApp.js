import androidVersionSvg from "../public/media/undraw_android_jr64.svg";
import browserVersionSvg from "../public/media/undraw_mobile_browsers_lib5.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons/faAndroid";
import { faChrome } from "@fortawesome/free-brands-svg-icons/faChrome";

const DownloadApp = () => {
  const styles = {
    section: {
      backgroundColor: "#f8f8f8",
      borderRadius: 9
    }
  };

  return (
    <section className="mt-5">
      <div className="container shadow py-5 px-5 my-4" style={styles.section}>
        <h2 className="display-4 text-center mb-lg-4  mb-4">التحميل</h2>
        <div className="row">
          <div className="col-lg-6 col-12 mb-lg-0 mb-5 text-center">
            <h4 className="text-center mb-4">حمل تطبيق الاندرويد</h4>
            <img src={androidVersionSvg} className="w-75" />
            <div>
              <button className="btn btn-dark mt-3 btn-lg">
                <span>تحميل</span>
                <FontAwesomeIcon icon={faAndroid} className="mr-2" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <h4 className="text-center mb-4">جرب تطبيق الويب</h4>
            <img src={browserVersionSvg} className="w-75" />
            <div>
              <button className="btn btn-dark mt-3 btn-lg">
                <span>تشغيل</span>
                <FontAwesomeIcon icon={faChrome} className="mr-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
