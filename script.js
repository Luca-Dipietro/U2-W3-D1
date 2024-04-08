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

let pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(newPet) {
    if (
      pets.some((pet) => pet != newPet && pet.ownerName === newPet.ownerName)
    ) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

const list = function (pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");

  listItem.textContent =
    "Pet Name: " +
    pet.petName +
    ",   " +
    "Owner Name: " +
    pet.ownerName +
    ",   " +
    "Species: " +
    pet.species +
    ",   " +
    "Breed: " +
    pet.breed;

  petList.appendChild(listItem);
};

const addPet = function (event) {
  event.preventDefault();

  const petNameInput = document.getElementById("petName");
  const ownerNameInput = document.getElementById("ownerName");
  const speciesInput = document.getElementById("species");
  const breedInput = document.getElementById("breed");
  const petName = petNameInput.value;
  const ownerName = ownerNameInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;

  const newPet = new Pet(petName, ownerName, species, breed);

  list(newPet);
  pets.push(newPet);
  if (pets.length > 1) {
    newPet.sameOwner(newPet);
  }

  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

document.getElementById("petForm").addEventListener("submit", addPet);
