class User {
    constructor(name, login, password, grade) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        
        User.count++;
    }
    
    static count = 0;
    
    get name() {
        return this._name;
    }
    
    set name(newName) {
        this._name = newName;
    }
    
    get login() {
        return this._login;
    }
    
    get password() {
        return '********';
    }
    
    showInfo() {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }
    
    eq(user) {
        return this._grade === user._grade;
    }
    
    lt(user) {
        return this._grade < user._grade;
    }
    
    gt(user) {
        return this._grade > user._grade;
    }
}

class SuperUser extends User {
    constructor(name, login, password, role, grade) {
        super(name, login, password, grade);
        this._role = role;
        
        SuperUser.count++;
    }
    
    static count = 0;
    
    get role() {
        return this._role;
    }
    
    set role(newRole) {
        this._role = newRole;
    }
    
    showInfo() {
        console.log(`Name: ${this._name}, Login: ${this._login}, Role: ${this._role}`);
    }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3);
const user2 = new User('George Harrison', 'george', '5678', 2);
const user3 = new User('Richard Starkey', 'ringo', '8523', 3);
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5);

user1.showInfo();
admin.showInfo();

let users = User.count;
let admins = SuperUser.count;

console.log(`Всего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

user2.login = 'geo';

console.log(user3._grade);
console.log(admin._grade);
admin._grade = 10;
