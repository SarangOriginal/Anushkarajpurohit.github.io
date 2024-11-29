"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var catsData = [{
  name: "Lion",
  image: "assets/images/lion.jpg",
  location: "Africa",
  size: 250
}, {
  name: "Tiger",
  image: "assets/images/tiger.jpg",
  location: "Asia",
  size: 220
}, {
  name: "Leopard",
  image: "assets/images/leopard.jpg",
  location: "Africa",
  size: 150
}, {
  name: "Jaguar",
  image: "assets/images/jaguar.jpg",
  location: "South America",
  size: 200
}];
var dogsData = [{
  "Species": "Dogs",
  "name": "German Shepherd",
  "image": "assets/images/german_sheopard.jpg",
  "location": "Germany",
  "size": 40
}, {
  "Species": "Dogs",
  "name": "Labrador",
  "image": "assets/images/labrador.jpg",
  "location": "Canada",
  "size": 35
}, {
  "Species": "Dogs",
  "name": "Beagle",
  "image": "assets/images/beagle.jpg",
  "location": "UK",
  "size": 25
}, {
  "Species": "Dogs",
  "name": "Bulldog",
  "image": "assets/images/bulldog.jpg",
  "location": "England",
  "size": 30
}];
var fishData = [{
  "Species": "Big Fish",
  "name": "Shark",
  "image": "assets/images/shark.jpg",
  "location": "Oceans",
  "size": 1000
}, {
  "Species": "Big Fish",
  "name": "Dolphin",
  "image": "assets/images/dolphin.jpg",
  "location": "Oceans",
  "size": 300
}, {
  "Species": "Big Fish",
  "name": "Whale",
  "image": "assets/images/whale.jpg",
  "location": "Oceans",
  "size": 30000
}, {
  "Species": "Big Fish",
  "name": "Marlin",
  "image": "assets/images/marlin.jpg",
  "location": "Oceans",
  "size": 600
}];

var Animal =
/*#__PURE__*/
function () {
  function Animal(animals, tableId, sortfields) {
    _classCallCheck(this, Animal);

    this.animals = animals;
    this.tableId = tableId;
    this.sortfields = sortfields;
    this.renderTable();
  }

  _createClass(Animal, [{
    key: "renderTable",
    value: function renderTable() {
      var _this = this;

      var tbody = document.querySelector("#".concat(this.tableId, " tbody"));
      tbody.innerHTML = "";
      this.animals.forEach(function (animal, index) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td >".concat(animal.name, "</td>\n        <td>\n          <div class=\"animal-image-container\">\n            <img src=\"").concat(animal.image, "\" class=\"animal-image\" alt=\"").concat(animal.name, "\">\n            <div class=\"animal-name\">").concat(animal.name, "</div>\n          </div>\n        </td>\n        <td>").concat(animal.location, "</td>\n        <td>").concat(animal.size || "", " kg</td>\n        <td>\n          <button class=\"btn btn-warning btn-sm\" onclick=\"window.").concat(_this.getClassName(), ".editAnimal(").concat(index, ")\">Edit</button>\n          <button class=\"btn btn-danger btn-sm\" onclick=\"window.").concat(_this.getClassName(), ".deleteAnimal(").concat(index, ")\">Delete</button>\n        </td>\n      ");
        tbody.appendChild(row);
      });
    }
  }, {
    key: "addAnimal",
    value: function addAnimal() {
      var name = prompt("Add a new animal name:");
      var location = prompt("Add a new animal location:");
      var size = prompt("Add a new animal size in kg:");

      if (!name || !location || isNaN(size)) {
        alert("Invalid inputs!");
        return;
      }

      if (this.animals.some(function (animal) {
        return animal.name === name;
      })) {
        alert("Duplicate animal!");
        return;
      }

      var newAnimal = {
        name: name,
        image: "assets/images/default.png",
        location: location,
        size: Number(size)
      };
      this.animals.push(newAnimal);
      this.renderTable();
    }
  }, {
    key: "sortAnimals",
    value: function sortAnimals(field) {
      if (field === "size") {
        this.animals.sort(function (a, b) {
          return a.size - b.size;
        });
      } else if (field === "name") {
        this.animals.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      } else if (field === "location") {
        this.animals.sort(function (a, b) {
          return a.location.localeCompare(b.location);
        });
      }

      this.renderTable();
    }
  }, {
    key: "editAnimal",
    value: function editAnimal(index) {
      var animal = this.animals[index];
      var name = prompt("Enter new name:", animal.name);
      var location = prompt("Enter new location:", animal.location);
      var size = prompt("Enter new size (kg):", animal.size);

      if (!name || !location || isNaN(size)) {
        alert("Invalid input!");
        return;
      }

      this.animals[index] = _objectSpread({}, animal, {
        name: name,
        location: location,
        size: Number(size)
      });
      this.renderTable();
    }
  }, {
    key: "deleteAnimal",
    value: function deleteAnimal(index) {
      this.animals.splice(index, 1);
      this.renderTable();
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return this.constructor.name.toLowerCase();
    }
  }]);

  return Animal;
}();

var Bigcats =
/*#__PURE__*/
function (_Animal) {
  _inherits(Bigcats, _Animal);

  function Bigcats() {
    _classCallCheck(this, Bigcats);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bigcats).call(this, catsData, "bigcats-table", ["name"]));
  }

  _createClass(Bigcats, null, [{
    key: "editAnimal",
    value: function editAnimal(index) {
      // Implement edit logic here if required
      alert("Editing animal at index ".concat(index));
    }
  }]);

  return Bigcats;
}(Animal);

var Dogs =
/*#__PURE__*/
function (_Animal2) {
  _inherits(Dogs, _Animal2);

  function Dogs() {
    _classCallCheck(this, Dogs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dogs).call(this, dogsData, "dogs-table", ["name", "location"]));
  }

  _createClass(Dogs, null, [{
    key: "editAnimal",
    value: function editAnimal(index) {
      // Implement edit logic here if required
      alert("Editing animal at index ".concat(index));
    }
  }]);

  return Dogs;
}(Animal);

var Bigfish =
/*#__PURE__*/
function (_Animal3) {
  _inherits(Bigfish, _Animal3);

  function Bigfish() {
    _classCallCheck(this, Bigfish);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bigfish).call(this, fishData, "bigfish-table", ["size"]));
  }

  _createClass(Bigfish, null, [{
    key: "editAnimal",
    value: function editAnimal(index) {
      // Implement edit logic here if required
      alert("Editing animal at index ".concat(index));
    }
  }]);

  return Bigfish;
}(Animal);

document.addEventListener("DOMContentLoaded", function () {
  window.bigcats = new Bigcats();
  window.dogs = new Dogs();
  window.bigfish = new Bigfish();
  var addAnimalButton = document.querySelector('#dogs-table .btn-primary');

  if (addAnimalButton) {
    addAnimalButton.addEventListener('click', function () {
      window.dogs.addAnimal();
    });
  }
}); // Image preview on file upload

document.getElementById('animalImageFile').addEventListener('change', function (event) {
  var file = event.target.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var imagePreview = document.getElementById('imagePreview');
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
    };

    reader.readAsDataURL(file);
  }
});