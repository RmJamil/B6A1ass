const formatValue=(x:number|string|boolean):number|string|boolean=>{

    if(typeof x==='string'){
        return `${x.toUpperCase()};`;
    }
       else if(typeof x==='number'){
         return `${x*10};`;
    }
    else if (typeof x==='boolean'){
        return `${!x};`;
    }
    throw new Error("Invalid type");
};



const getLength=(value:string|unknown[]):number|string=>{
    let l=0;

    if(typeof value==="string"){
        l=value.length;
    }
    else if (Array.isArray(value)){
      value.map(()=>{
          l++;
      });
    }
    return `${l};`;
};



class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}';`;
    }
};





type User = { title: string; rating: number };
type GenArr<T extends { rating: number }> = Array<T>;

const filterByRating = (val: GenArr<User>): string => {

  const filtered = val.filter(one => one.rating >= 4);

  const formatted = filtered
    .map(b => `{ title: '${b.title}', rating: ${b.rating} }`)
    .join(", ");

  return `[${formatted}];`;
};



type Member = { 
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type GenAr<T> = Array<T>;

const filterActiveUsers = <T extends { isActive: boolean }>(
  items: GenAr<Member>
): string => {

  const filtered = items.filter(item => item.isActive);

  const formatted = filtered
    .map(u => `{ id: ${u.id}, name: '${u.name}', email: '${u.email}', isActive: ${u.isActive} }`)
    .join(", ");
  return `[${formatted}];`;
};



interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

const printBookDetails=(item:Book):string=>{
     const availability = item.isAvailable ? "Yes" : "No";
return `Title: ${item.title}, Author: ${item.author}, Published: ${item.publishedYear}, Available: ${availability}`;
};



const getUniqueValues=(arr1:any[],arr2:any[]):string=>{
const arr=[...arr1,...arr2];
const setarr=new Set(arr);
const uniqueArr=Array.from(setarr);
return `[${uniqueArr}];`;
};



type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
type genProduct<T>=Array<T>;
const calculateTotalPrice=(products:genProduct<Product>):string=>{
    if(products.length===0) return "0;";

   const total= products.reduce((acc,item)=>{
        if(!item.discount){
 acc+=item.price*item.quantity;
        }
        else if(item.discount){
            acc+=item.price*item.quantity-(item.discount*0.01*item.price*item.quantity);
        }
        return acc;
    },0);

 return `${total};`;
}
