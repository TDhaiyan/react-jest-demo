import { Singleton } from "../singleton";


function factory(name: string, age
    ?: number   
) {
  return `${name} have been working ${age} years`
}

const single = new Singleton(() => factory('John', 5))
const single2 = new Singleton(()=> factory('John', 5))

console.log(single === single2); 