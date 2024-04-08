// Esercizio 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else {
      return otherUser.firstName + " è più vecchio di " + this.firstName;
    }
  }
}

const user1 = new User("Luca", "Dipietro", 26, "Torino");
const user2 = new User("Simone", "Rossi", 30, "Pescara");
const user3 = new User("Giovanni", "Principato", 18, "CampoBasso");
const user4 = new User("Lorenzo", "Fisichella", 55, "Mondello");

console.log(user1.compareAge(user2));
console.log(user1.compareAge(user3));
console.log(user1.compareAge(user4));
console.log(user2.compareAge(user3));
console.log(user2.compareAge(user4));
console.log(user3.compareAge(user4));

//  Esercizio 2

let owners = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(newPet) {
    if (owners.includes(newPet.ownerName)) {
      console.log(true);
    } else {
      console.log(false);
      owners.push(newPet.ownerName);
    }
  }
}

const list = function (pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");

  listItem.textContent =
    "Pet Name: " +
    pet.petName +
    ", " +
    "Owner Name: " +
    pet.ownerName +
    ", " +
    "Species: " +
    pet.species +
    ", " +
    "Breed: " +
    pet.breed;

  petList.appendChild(listItem);
};

const addPet = function () {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  list(newPet);
  newPet.sameOwner();

  document.getElementById("petName").value = "";
  document.getElementById("ownerName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
};
