/*
🧠 What is React?

React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai.
Matlab — React ka kaam hai tere app ke dikhne wale part ko handle karna (frontend ka view part).

💡 Why React is used?

React use karne ke main reasons:

1. Fast Rendering (Virtual DOM)
Normally browser har baar poora page reload karta hai.
React me ek Virtual DOM hota hai — matlab ek copy of DOM memory me store hoti hai.
React sirf wahi part update karta hai jahan change hua ho.
👉 Result: App super fast lagti hai ⚡

2. Component-Based Architecture
Tu apni app ko chhote chhote parts (components) me tod sakta hai.
Example: Navbar, Footer, PostCard, CommentBox — sab alag components.
Ek baar bana liya toh kahin bhi reuse kar le.
👉 Code reusable + maintain karna easy.

3. One-way Data Flow (Predictable Behavior)
Data ek hi direction me flow karta hai (parent → child).
Isse bug find karna aur code samajhna simple ho jaata hai.

4. Huge Ecosystem
React ke paas bohot saare tools aur libraries hain (React Router, Redux, etc).
Plus, community support massive hai — har problem ka solution mil jaata hai online.

🧩 Library vs Framework – Kya Faraq Hai?

| Point      | Library                                                | Framework                                         |
| ---------- | ------------------------------------------------------ | ------------------------------------------------- |
| Definition | Ek **tool** hoti hai jo tu use karta hai apni marzi se | Ek **structure** hota hai jisme tu kaam karta hai |
| Control    | **Tu control karta hai** kab aur kaise use karna hai   | **Framework control karta hai** tera code ka flow |
| Example    | React, Lodash, jQuery                                  | Angular, Vue (partly), Django                     |
| Concept    | “You call the library”                                 | “Framework calls your code”                       |

🧠 Simple example:

Library: Tu driver hai, aur React ek tool hai jise tu kabhi bhi use kar sakta hai.
Framework: Tu passenger hai, aur framework driver hai — wo decide karta hai kahaan jana hai.

⚙️ Concept: Import / Export in JavaScript (ES Modules)

React app me hum code ko chhote chhote files me todte hain (components).
Ab ye alag files ek dusre ke saath kaise baat karein?
Answer: export aur import ke through.

🔹 1. Export ka matlab kya hai?

Export ka matlab —
“Is file se ye cheez bahar bhej raha hoon taaki koi aur file ise use kar sake.”

Example 👇
// file: math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

Yahan humne add aur sub ko export kar diya.
Ab koi bhi file inhe import karke use kar sakti hai.

🔹 2. Import ka matlab kya hai?

Import ka matlab —
“Main kisi aur file se koi cheez le raha hoon taaki main ise yahan use kar saku.”

Example 👇
// file: app.js
import { add, sub } from "./math.js";
console.log(add(2, 3)); // 5
console.log(sub(5, 2)); // 3

Bas! Ab app.js file math.js ke functions use kar sakti hai 💪

🔹 3. Default Export / Import

Kabhi kabhi hum sirf ek hi cheez export karte hain file se —
tab hum use karte hain default export.

Example 👇
// file: greet.js
export default function greet(name) {
  return `Hello ${name}!`;
}

Aur import karte waqt:
// file: app.js
import greet from "./greet.js";
console.log(greet("Srinjay")); // Hello Srinjay!


Notice:
Default export me {} lagane ki zarurat nahi hoti.
Ek file me sirf ek hi default export hota hai.

🔹 4. Named + Default dono ek saath

Kabhi kabhi mix karte hain:
// utils.js
export const PI = 3.14;
export default function area(r) {
  return PI * r * r;
}

Import karte hue:
import area, { PI } from "./utils.js";
console.log(area(5)); // 78.5
console.log(PI);      // 3.14

Let's say hamare paas ek "app.js" hai and ek script.js hai:

App.js :-
export var a =20;

Script.js :-
import a from './app.js'
console.log(a); // this will still not work but we will not get the error

🧠 Thoda analogy se samjho:
Socho app.js ek dabba hai jismein tumne likha:
"Is dabbe mein ek cheez hai jiska naam hai a."

Lekin script.js bol raha hai:
"Mujhe us dabbe ka default item do."

Ab app.js ne default item diya hi nahi, sirf a diya hai. Toh script.js confuse ho gaya — aur bolega:
"Error: 'a' is not a default export from './app.js'"

✅ Sahi tareeka kya hota?
Option 1 : Default export karo agar tumhe import a from likhna hi hai:
// app.js
export default 20;

// script.js
import a from './app.js';
console.log(a); // ✅ Output: 20

Option 2: Named import use karo (jo ki match karta hai):
// script.js
import { a } from './app.js';
console.log(a); // ✅ Output: 20
*/
