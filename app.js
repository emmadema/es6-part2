function car(make, model, options){
	return{
		make,
		model,
		drive() {
			console.log("Vroom");
		}
	}
}

let auto = car("honda", "civic")
//=> {make: "honda", model: "civic", drive: Function}
auto.drive()
//=> vroom

// Given the data in the starting code, use a template string to produce the
// following string. Make sure the numbers, names, and team name actually come
// from the data.

//     There are 4 people on the tooling team.
//     Their names are Jennie, Ronald, Martin, Anneli.

const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
                {name: "Ronald", role: "junior"},
                {name: "Martin", role: "senior"},
                {name: "Anneli", role: "junior"}];

//can use map function
let names = [];
for(i=0; i < people.lenght; i++){

}

let message = (`There are ${people.length} on the ${teamName} team. Their names are ${names}`);

//run for loop thorugh people to get number 
//run for loop through people to get name 


console.log(message);



// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#The_tooling_team

// Write an expression using higher-order array methods (say, filter and reduce)
// to compute the total value of the machines in the inventory array.

const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
];

//filter through the array for only machine
//then add the values through reduce

let machcine = inventory.filter(function(){
	return {type: "machine"};
});

let totalMachineValue = YOUR_CODE_HERE;

console.log(totalMachineValue);

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Accounting

//Hello, Emma, today is Tuesday, isn't it a wonderful day?
let name = Emma;
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let adjective =["cool", "sweet", "pretty", "terrible"];

let suffleAdjective = adjective.sort(()=> Math.random()- 0.5)
console.log(suffleAdjective)

function getRandomAj(adjective){
	let random = Arr
}




let note = (`Hello, ${name}, today is ${days[1]}, isen't it a ${random} day?`);

console.log(note);





