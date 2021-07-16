let employees = [{
	id:1,
	name:'Linux Torvalds'
},{
	id:2,
	name:'Bill Gates'
},{
	id:3,
	name:'Jeff Bezos'
}];

let salaries = [{
	id:1,
	name:4000
},{
	id:2,
	name:1000
},{
	id:3,
	name:2000
}];

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
});