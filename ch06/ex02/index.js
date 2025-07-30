let o1 = {
    animal: 'dog',
    color: 'white'
};

let o2 = Object.create(o1);
o2.name = 'Pochi';

console.log(Object.getPrototypeOf(o2)); // { animal: 'dog', color: 'white' }