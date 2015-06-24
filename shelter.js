function Shelter(name, capacity){

  this.name = name;
  this.capacity = capacity;
  this.animals = [];
}

Shelter.prototype.addAnimal = function(animal){
  if(this.animals.length < this.capacity){
    this.animals.push(animal);
  }
};

Shelter.prototype.adoptAnimal = function(name){
  var animal;
  for(var i = 0; i < this.animals.length; i++){
    if(this.animals[i].name === name ){
      animal = this.animals.splice(i,1)[0];
    }
  }
  return animal;
};

//var lassie = s1.adoptAnimal('animal3');
//condole.log(lassie);
//console.log(s1);//

function Person(name){
  this.name = name;
  this.pets = [];
}

var bob = new Person('Bob');

bob.pets.push(s1.adoptAnimal('animal3'));
bot.pets.push(s1.adoptAnimal('animal4'));

function Animal(name, age, species){
  this.name = name;
  this.age = age;
  this.species = species;
}

var s1 = new Shelter('happy', 7);


for (var i = 0; i < 10; i++){
  var animal = new Animal(makeName(i), randomAge(), randomSpecies());
  //console.log(animal);
  //s1.animal.push(animal);
  s1.addAnimal(animal);
}

//console.log(s1);

Shelter.prototype.findBySpecies = function(species){
  return this.animals.filter(function(a){
    return a.species === species;
  });
};

var bees = s1.findBySpecies('bee');
var cats = s1.findBySpecies('cat');
var dogs = s1.findBySpecies('dog');

console.log(s1);
console.log(bees);
console.log(cats);
console.log(dogs);



function makeName(i){
  return 'animal' + i;
}

function randomAge(){

  return Math.floor(Math.random() * 20 ) + 3;
}

function randomSpecies(){

  var species = ['dog', 'cat', 'spider', 'wombat', 'fish', 'bee'];

  var random = Math.floor(Math.random() * species.length);

  return species[random];
}
