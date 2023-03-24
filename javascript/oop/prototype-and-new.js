function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++;},
  login: function() {console.log("You're loggedin");}
};

const user1 = userCreator("Phil", 4)
const user2 = userCreator("Julia", 5);
user1.increment();

///////

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
}

UserCreator.prototype.login = function() {
  console.log("login");
}

const user1 = new UserCreator("Eva", 9)

user1.increment()
