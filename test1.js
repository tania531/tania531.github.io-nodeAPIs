function process(input){
  console.log('hi');
}


function Cat(name, age){

  this.name = name;
  this.age = age;


}

Cat.prototype.purr = function(){

    console.log(this.name + ' cat is purring and is ' + this.age + ' years old');
}

  var fluffy = new Cat('miss kitty', 3);
  console.log('miss kitt', fluffy);
  fluffy.purr();  //flufy is this

  var molly = new Cat('molly',5);
  molly.purr();

  var cats = [];

  for(var i = 1; i < 11; i++){

    var cat = new Cat( 'cat'+i  , i);
    cats.push(cat);


    cats.forEach(function(c){
      if(c.age > 5){

        c.purr();
      }


    });




}
