class errorHelper {
  errors() {
    return {
      geolocationPermision: {
        code: 1,
        msg:
          "لم نتمكن من تحديد موقعك الحالي لرفضك استخدام خاصية الموقع الجغرافي للمتصفح"
      }
    };
  }
}

const injected = new errorHelper();

export default injected;
