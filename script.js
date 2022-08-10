const myList=[
    'Water',
    'Chicken',
    'Banana',
    'Banana',
    'Cake',
    'Water',
]


var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'John',   'age': 45, 'active': true },
    { 'user': 'Belly',   'age': 39, 'active': false },
    { 'user': 'Stephen',   'age': 34, 'active': true },
    { 'user': 'Angel',   'age': 42, 'active': true },
    { 'user': 'Chris',   'age': 40, 'active': false },
  ];
   

//Chunk() Method
const arr=_.chunk(myList,3)
console.log(arr)


//reduce() method
const arr1=_.reduce(myList,function(result,value,key){
    (result[value] || (result[value]=[])).push(key)
    return result
},[])
console.log(arr1)


//filter() method
const arr2=_.filter(users,function(result){
   return (!result.active)
})
console.log(arr2)

//find() method
const arr3=_.find(users,function(result){
    return (result.age>40)
})
console.log(arr3)

//sum() method
const arr4=_.sum([2,6,8,9,3,5])
console.log(arr4)


