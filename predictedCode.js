//PREDICTED CODE
//#1
var hello;
console.log(hello);
hello = 'world';

//OUTPUT:
//undefined


//#2
var needle
function test(){
    var needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

//OUTPUT:
//'magnet'

//#3
var brendan
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

//OUTPUT:
//'super cool'

//#4
var food
function eat(){
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = chicken;
console.log(food);
eat();

//OUTPUT:
//'chicken'
//'half-chicken'

//#5
var mean;
var food;
mean();
console.log(food);
mean = function() {
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

//OUTPUT:
//mean is not a function

//#6
var genre;
function rewind(){
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

//OUTPUT:
//undefined
//"rock"
//"r&b"
//"disco"

//#7
var dojo;
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//OUTPUT:
//"san jose"
//"seattle"
//"burbank"
//"san jose"

//#8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

//OUTPUT
//{name: 'Chicago', students: 65, hiring = true}
//"closed for now"