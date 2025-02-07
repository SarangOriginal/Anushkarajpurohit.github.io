const catsData = [
  { name: "Minu", image: "assets/images/minu.jpg", location: "Nu", size: 47 },
  { name: "Lion", image: "assets/images/lion.jpg", location: "Africa", size: 250 },
  { name: "Tiger", image: "assets/images/tiger.jpg", location: "Asia", size: 220 },
  { name: "Leopard", image: "assets/images/leopard.jpg", location: "Africa", size: 150 },
  { name: "Jaguar", image: "assets/images/jaguar.jpg", location: "South America", size: 200 }
];

const dogsData = [
  { "Species": "Dogs", "name": "German Shepherd", "image": "assets/images/german_sheopard.jpg", "location": "Germany", "size": 40 },
  { "Species": "Dogs", "name": "Labrador", "image": "assets/images/labrador.jpg", "location": "Canada", "size": 35 },
  { "Species": "Dogs", "name": "Beagle", "image": "assets/images/beagle.jpg", "location": "UK", "size": 25 },
  { "Species": "Dogs", "name": "Bulldog", "image": "assets/images/bulldog.jpg", "location": "England", "size": 30 }
];

const fishData = [
  { "Species": "Big Fish", "name": "Shark", "image": "assets/images/shark.jpg", "location": "Oceans", "size": 1000 },
  { "Species": "Big Fish", "name": "Dolphin", "image": "assets/images/dolphin.jpg", "location": "Oceans", "size": 300 },
  { "Species": "Big Fish", "name": "Whale", "image": "assets/images/whale.jpg", "location": "Oceans", "size": 30000 },
  { "Species": "Big Fish", "name": "Marlin", "image": "assets/images/marlin.jpg", "location": "Oceans", "size": 600 }
];

class Animal {
  constructor(animals, tableId) {
    this.animals = animals;
    this.tableId = tableId;
    this.renderTable();
  }

  renderTable() {
    const tbody = document.querySelector(`#${this.tableId} tbody`);
    tbody.innerHTML = "";
    this.animals.forEach((animal, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${animal.name}</td>
        <td><img src="${animal.image}" class="animal-image" alt="${animal.name}" width="50"></td>
        <td>${animal.location}</td>
        <td>${animal.size} kg</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="window.${this.getClassName()}.editAnimal(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="window.${this.getClassName()}.deleteAnimal(${index})">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  addAnimal() {
    const name = prompt("Enter animal name:");
    const location = prompt("Enter location:");
    const size = prompt("Enter size in kg:");

    if (!name || !location || isNaN(size)) {
      alert("Invalid input!");
      return;
    }

    this.animals.push({ name, image: "assets/images/default.png", location, size: Number(size) });
    this.renderTable();
  }

  editAnimal(index) {
    const animal = this.animals[index];
    const name = prompt("Enter new name:", animal.name);
    const location = prompt("Enter new location:", animal.location);
    const size = prompt("Enter new size (kg):", animal.size);

    if (!name || !location || isNaN(size)) {
      alert("Invalid input!");
      return;
    }

    this.animals[index] = { ...animal, name, location, size: Number(size) };
    this.renderTable();
  }

  deleteAnimal(index) {
    this.animals.splice(index, 1);
    this.renderTable();
  }

  getClassName() {
    return this.constructor.name.toLowerCase();
  }
}

class Bigcats extends Animal {
  constructor() {
    super(catsData, "bigcats-table");
  }
}

class Dogs extends Animal {
  constructor() {
    super(dogsData, "dogs-table");
  }
}

class Bigfish extends Animal {
  constructor() {
    super(fishData, "bigfish-table");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.bigcats = new Bigcats();
  window.dogs = new Dogs();
  window.bigfish = new Bigfish();

  // Event listeners for Add buttons
  document.querySelector("#addBigCatBtn").addEventListener("click", function () {
    window.bigcats.addAnimal();
  });
  document.querySelector("#addDogBtn").addEventListener("click", function () {
    window.dogs.addAnimal();
  });
  document.querySelector("#addFishBtn").addEventListener("click", function () {
    window.bigfish.addAnimal();
  });
});
