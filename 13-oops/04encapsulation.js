// Example 1: Encapsulation using Closures
function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const account1 = createBankAccount(1000);
account1.deposit(500);
console.log(account1.getBalance()); // 1500


// Example 2: Encapsulation using ES6 Classes with Private Fields
class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account2 = new BankAccount(1000);
account2.deposit(200);
console.log(account2.getBalance()); // 1200


// Example 3: Encapsulation using Getters and Setters
class Student {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName && newName.length > 0) {
      this.#name = newName;
    } else {
      console.log("Invalid name");
    }
  }
}

const student = new Student("Kavya");
console.log(student.name); // Kavya
student.name = "Arjun";
console.log(student.name); // Arjun
