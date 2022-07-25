// good to customize errors in order to hide private info
class authenticationError extends Error {
  constructor(message) {
      super(message) 
      this.name = 'authenticationError';
      this.faveSnack = 'strawberries';
  }
}

const a = new authenticationError('oopsie');
console.log(a.faveSnack) // 'strawberries'

class DatabaseError extends Error {
  constructor(message) {
      super(message) 
      this.name = 'databaseError';
      this.faveSnack = 'strawberries';
  }
}
class PermissionError extends Error {
  constructor(message) {
      super(message) 
      this.name = 'permissionError';
      this.faveSnack = 'strawberries';
  }
}


// can create instance of error

const d = new DatabaseError('data not found');
console.log(d instanceof DatabaseError); //true