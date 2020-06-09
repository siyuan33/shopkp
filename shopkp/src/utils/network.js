import axios from 'axios';
import Vue from 'vue'

function normalRequest (url, path = "", method = "GET", options, obj) {
  return axios({
    url: url + path,
    method: method,
    params: options,
    data: obj,
    validateStatus: function (status) {
      return status <= 500;
    }
  })
};

const http = {
  install: () => {
    Vue.prototype.$http = normalRequest
  }
}

export default http