var movies = [
    'lion king',
    'cinderella',
    'beauty and the beast',
    'mulan',
    'maleficent'
];

movies.forEach(item => {
    console.log(item);
});

for(var i = 0; i < movies.length; i++) {
    console.log(i);
    var x = movies[i];
    console.log(x);
}

var movies2 = movies.map(item => {
    return item + ':The Season Finale';
}) 
console.log(movies2);

var movies3 = movies.filter(item => {
    return  item.length > 15;
})
console.log(movies3);