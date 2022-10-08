import AxiosInstance from 'axios';
import Vue from 'vue';

const axios = AxiosInstance.create({
  withCredentials: true,
  baseURL: 'http://[::1]:1111',
});

let numberLogId = 0;

class Funcs {
  static eventBus = new Vue();

  static getEventBus = () => {
    if (!Funcs.eventBus)
      Funcs.eventBus = new Vue();
    return Funcs.eventBus;
  }

  static fun_log = (value, file, line) => {
    if (String(process.env.REACT_APP_DEBUG_MODE) === 'TRUE') {
      const group = file || 'Other Logs';
      const lineLog = line || 'NULL';
      console.group(`File: ${group}, Line: ${lineLog}`);
      const logHeader = `======== DEBUG LOG MODE [ File: ${group} ; Line: ${lineLog} ; logId: ${numberLogId++}] ========`;
      console.log(logHeader);
      console.log(value);
      let logFooter = '';
      const mid = logHeader.length / 2;
      for (let i = 0; i < logHeader.length; i++) {
        if (i < mid - 5 || i > mid + 5)
          logFooter += '='
        else
          logFooter += '-'
      }
      console.log(logFooter);
      if (numberLogId > 100) numberLogId = 0;
      console.groupEnd();
    }
  };

  static fun_getSuccessAxiosResponse = (res) => {
    const resFromServer = res.data;
    const result = {
      success: resFromServer.success,
      result: resFromServer.result,
      message: resFromServer.message,
      error: resFromServer.error,
      total: resFromServer.total,
    };
    return result;
  }

  static fun_getErrorAxiosResponse = (err) => {
    const result = {
      success: false,
      error: err,
    };
    return result;
  }

  static fun_get = async (url, config) => {
    return new Promise((resolve, _reject) => {
      axios.get(url, config)
        .then((res) => {
          resolve(Funcs.fun_getSuccessAxiosResponse(res));
        })
        .catch((err) => {
          resolve(Funcs.fun_getErrorAxiosResponse(err));
        });
    });
  };

  static fun_post = async (url, data, config) => {
    return new Promise((resolve, _reject) => {
      axios.post(url, data, config)
        .then((res) => {
          resolve(Funcs.fun_getSuccessAxiosResponse(res));
        })
        .catch((err) => {
          resolve(Funcs.fun_getErrorAxiosResponse(err));
        });
    });
  };

  static fun_put = async (url, data, config) => {
    return new Promise((resolve, _reject) => {
      axios.put(url, data, config)
        .then((res) => {
          resolve(Funcs.fun_getSuccessAxiosResponse(res));
        })
        .catch((err) => {
          resolve(Funcs.fun_getErrorAxiosResponse(err));
        });
    });
  };

  static fun_delete = async (url, config) => {
    return new Promise((resolve, _reject) => {
      axios.delete(url, config)
        .then((res) => {
          resolve(Funcs.fun_getSuccessAxiosResponse(res));
        })
        .catch((err) => {
          resolve(Funcs.fun_getErrorAxiosResponse(err));
        });
    });
  };
}

export default Funcs;