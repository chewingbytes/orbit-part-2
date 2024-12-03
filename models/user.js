class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password; // You would normally hash the password in a real application
      const timestamp = new Date().getTime();
      const random = Math.floor(Math.random() * 1000);
      this.id = timestamp + "" + random.toString().padStart(3, '0');
    }
  }
  
  module.exports = { User };
  