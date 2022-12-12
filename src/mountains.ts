//Boolean, Number, BigInit, Number, Null, String, Undefined


//Objects are a way of grouping data together


//Interface....there are none in JS
//
interface Mountain{
    name:string,
    height:number
}



//Array in TS have to be same data typer, JS can mix and match
let mountains:Mountain[] = [{name:"Kilimanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}];



function findNameOfTallestMountain(mountains:Mountain[]) : string {
    if (mountains.length) {
        let tallestMountain: Mountain = mountains[0];
        mountains.forEach((mountain) => {
            if (mountain.height > tallestMountain.height) {
                tallestMountain = mountain;
            }
        });
        return tallestMountain.name;
    }
    else {
        return "";
    }
}
console.log(findNameOfTallestMountain(mountains));
export {findNameOfTallestMountain, Mountain};