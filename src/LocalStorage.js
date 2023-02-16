//Niv Vardi 209083278 | Orad Dostra 208939736
class LocalStorage {
    constructor() {
      if (!localStorage) {
        throw new Error("Local storage is not supported in this browser.");
      }
    }
  
    getItem(key) {
      return new Promise((resolve, reject) => {
        try {
          const value = localStorage.getItem(key);
          resolve(value);
        } catch (error) {
          reject(error);
        }
      });
    }
  
    setItem(key, value) {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem(key, value);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  
    removeItem(key) {
      return new Promise((resolve, reject) => {
        try {
          localStorage.removeItem(key);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  
    clear() {
      return new Promise((resolve, reject) => {
        try {
          localStorage.clear();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  }

  export default LocalStorage;

