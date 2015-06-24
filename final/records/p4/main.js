
// get all female dogs less than 3 years old
var dogs = [
{name: 'a', age: 10, gender: 'male'},
{name: 'b', age: 2, gender: 'female'},
{name: 'c', age: 7, gender: 'male'},
{name: 'd', age: 1, gender: 'female'},
{name: 'e', age: 4, gender: 'male'},
{name: 'f', age: 6, gender: 'female'}
];


var result = getFemaleDogsLessThan3(dogs);
// result => [{name: 'b', ...}, {name: 'd'}]
var names = {"dogName": ''};

function getFemaleDogsLessThan3(arr){
  console.log('call fcn: ');
  dogs.forEach(function(d){
    if (d.gender === 'female' && d.age < 3){
      console.log('d.gender: ', d.gender);
      console.log('d.age: ', d.age);
      console.log('d.name: ', d.name);
      names.dogName = d.name;
      return names.dogName;
    }
  });

}

names = getFemaleDogsLessThan3(dogs);

console.log('names: ', names);
