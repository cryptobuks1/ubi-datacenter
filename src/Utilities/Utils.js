import constant from './Constant.js';
class Utils {
    constructor() {
        if (!Utils.instance) {
          Utils.instance = this;
        }
        return Utils.instance;
    }

    _getApi(method) {
        return constant.api + method;
    }
}

const instance = new Utils();
Object.freeze(instance);
export default instance;