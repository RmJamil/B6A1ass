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
}



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
}



type User = { title: string; rating: number };
type GenArr<T extends { rating: number }> = Array<T>;
const filterByRating = (val: GenArr<User>): GenArr<User>=> {
  return val.filter(one => one.rating >= 4);
};




type member={ 
    id: number;
    name:string;
    email:string;
    isActive:boolean ;
}
type GenAr<T>=Array<T>
const filterActiveUsers=(items:GenAr<member>):GenAr<member>=>{

    return items.filter(item=>item.isActive===true);
};



interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
const printBookDetails=(item:Book):void=>{
     const availability = item.isAvailable ? "Yes" : "No";
console.log(`Title: ${item.title}, Author: ${item.author}, Published: ${item.publishedYear}, Available: ${availability}`);
};



const getUniqueValues=(arr1:any[],arr2:any[]):any[]=>{
const arr=[...arr1,...arr2];
const setarr=new Set(arr);
const uniqueArr=Array.from(setarr);
return uniqueArr;
};



type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
type genProduct<T>=Array<T>;
const calculateTotalPrice=(products:genProduct<Product>):number=>{
    if(products.length===0) return 0;

   return products.reduce((acc,item)=>{
        if(!item.discount){
             acc+=item.price*item.quantity;
        }
        else if(item.discount){
            acc+=item.price*item.quantity-(item.discount*0.01*item.price*item.quantity);
        }
         return acc;
    },0);
}






