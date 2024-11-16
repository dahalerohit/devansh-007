/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer = arr.filter(employee => employee.profession ==="developer");
  let developernames = developer.map(developer => developer.name);
  console.log("developers (using map:) :", developernames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log("Developer (using for Each):");
  arr.forEach(employee =>{
    if(employee.profession === developer){
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newemployee = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newemployee);
  console.log("Added Employee:",newemployee);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredarray = arr.filter(employee => employee.profession!= "admin");
  console.log("Employee After remove admin",filteredarray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newarray = [
    {id: 5, name: "Virat", age: "27", profession: "Cricketer"},
    {id: 6, name: "TripleH", age: "35", profession: "Wrestler"},
    {id: 7, name: "Sunil", age: "40", profession: "Footballer"}
  ];
  const concatarr = arr.concat(newarray);
  console.log("Concatenated array:", concatarr);

  

}
