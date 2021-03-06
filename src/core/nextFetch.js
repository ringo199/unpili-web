import fetch from 'isomorphic-unfetch';
import qs from 'query-string';
import { filterObject } from './util';
import { BASE_URL } from '../constants/Api';
import store from 'store2';

// initial fetch
const nextFetch = Object.create(null);
// browser support methods
// ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PATCH', 'PUT']
const HTTP_METHOD = ['get', 'post', 'put', 'patch', 'delete'];
// can send data method
const CAN_SEND_METHOD = ['post', 'put', 'delete', 'patch'];



HTTP_METHOD.forEach(method => {
  // is can send data in opt.body
  const canSend = CAN_SEND_METHOD.includes(method);
  nextFetch[method] = (path, { data, query, timeout = 10000 } = {}) => {
    let url = BASE_URL + path;
    const opts = {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      credentials: 'include',
      timeout,
      mode: 'cors',
      cache: 'no-cache'
    };
    const token = store.get('token');

    if (token) {
      opts.headers['x-access-token'] = token;
    }

    if (query) {
      url += `${url.includes('?') ? '&' : '?'}${qs.stringify(
        filterObject(query, Boolean),
      )}`;
    }

    if (canSend && data) {
      opts.body = qs.stringify(filterObject(data, Boolean));
    }

    console.info('Request Url:', url);
    console.info('Request opts:', opts);

    return fetch(url, opts)
      .then(res => res.json())
      .then(({ code = 0, message, data }) => {
        if (code !== 0) {
          if (code === 2333) {
            store.remove('token');
          }
          const err = new Error(message);
          err.message = message;
          err.code = code;
          err.data = data;
          throw err;
        }
        return {
          message,
          data
        };
      });
  };
});

export default nextFetch;