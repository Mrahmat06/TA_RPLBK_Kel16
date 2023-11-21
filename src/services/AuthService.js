// AuthService.js
class AuthService {
    static isAuthenticated() {
      // Implementasi sederhana autentikasi, misalnya cek localStorage
      return localStorage.getItem('token') !== null;
    }
  }
  
  export default AuthService;
  