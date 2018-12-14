import axios from 'axios';
import Cookie from 'js-cookie';

class currentUser {
  constructor() {
  }

  onLoad() {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get('/api/v1.0.0/auth');
        if (!data.success) {
          throw { message: data.message };
        }

        Cookie.set('token', data.user.token, { expires: 360 * 100 });
        resolve(data.user);
      } catch (e) {
        reject(e);
      }
    });
  }

  onLogin(params = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.post('/api/v1.0.0/auth/signin', { user: params });
        if (!data.success) {
          throw { message: data.message };
        }
        Cookie.set('token', data.user.token);
        resolve(data.user);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new currentUser();
