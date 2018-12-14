// import axios from 'axios';

class Post {
  onCreate() {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(true)
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Post();
