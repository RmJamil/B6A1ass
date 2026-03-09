1. What are some differences between interfaces and types in TypeScript?
_______________________________________________________________________________________

 Ans:
 Interface সাধারণত object structure define করার জন্য ব্যবহার করা হয়।
 আবার, নতুন interface কে child হিসেবে বর্ধিত করতে interface কে extend করা যায়।
যেমনঃ 
     interface Person {
          name: string;
          }
 
interface Student extends Person {
  roll: number;
  }

অন্যদিকে, Type keyword ব্যবহার করে আমরা object ছাড়াও union, primitive, tuple ইত্যাদি define করতে পারি।
  এবং Union type ব্যবহার করা যায় ।
  যেমনঃ
  type User = {
  name: string;
  age: number;
  };

type ID = string | number;

2. What is the use of the keyof keyword in TypeScript? Provide an example.
___________________________________________________________________________________________________
Ans:
  keyof একটি type operator যা কোনো object type এর সব property key গুলোকে union type হিসেবে return

যেমনঃ

type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

এখানে UserKeys এর type হবে:
"name" | "age" | "email"
