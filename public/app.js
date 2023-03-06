// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "shaun",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spend ", amount);
//     return amount;
//   },
// };
// const greetPerson = (person: IsPerson) =>{
//   console.log('hello', person.name);
// }
// greetPerson(me)
// console.log(me);
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", 'web work', 250);
docTwo = new Payment("mario", 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice("mario", "work on the web", 250);
const invTwo = new Invoice("luigi", "work on the web", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
// const addUID = <T extends object>(obj: T)=>{
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj,uid};
// }
// let docOnee = addUID({name: "yoshi", age: 20});
// console.log(docOnee.age);
// // with interface
// interface Resource<T> {
//   uid: number,
//   reourceName: string, 
//   data: T
// }
// const docThreee: Resource<object> = {
// uid: 1,
// reourceName: 'person',
// data:  {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//   uid: 2,
//   reourceName: "dkdkd",
//   data: ['a','b','c']
// }
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Flim"] = 1] = "Flim";
    ResourceType[ResourceType["Director"] = 2] = "Director";
    ResourceType[ResourceType["Person"] = 3] = "Person";
})(ResourceType || (ResourceType = {}));
const docOnee = {
    uid: 1,
    resourceType: ResourceType.Director,
    data: { title: "name of the wind" }
};
console.log(docOnee);
