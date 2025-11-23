/*Bhai, React hooks aur functions ek jaise dikhte hain syntax mein, lekin kaam aur role bilkul alag hai, Hooks React ke special functions hote hain jo tumhe state, lifecycle, context, etc. ka access dete hain function components ke andar

🪝 Hooks — React ke Superpowers

Hooks wo functions hain jo React ke andar se features unlock karte hain
(e.g. state, lifecycle, context, etc.)

React ke saare built-in hooks hamesha "use" se start hote hain, jaise:
1. useState
2. useEffect
3. useRef
4. useContext
5. useReducer
6. useMemo, useCallback (advanced optimization hooks)

💥 1️⃣ useState – State handle karne ka hook
React me agar tu chahta hai koi data change hone par UI automatically update ho, to uske liye useState lagta hai(matlab ki ek state se dusri state mein jab jana ho ya state chenge pe kuch karna ho to)

Example:
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial value = 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
🧠 React automatically re-render karega jab setCount() se value badlegi

CONCEPT : Ek aur cheez always yaad rakhna ki agar hamlog kuch value ko change kar rhe hai setNum() se, toh wo screen main toh dikhai deta hai jab bhi click karenge but but agar hamlog usko setNum() call karne ke turaant baad dekhenge console.log karke toh wo value turaant change nahi hoga matlab ki socho ek method hai - 
const [num,setNum] = useState(0);
const btnClicked = () => {
  setNum(10);
  console.log(num); // 0 ayega kyu??????????????????
  }
Kyukiiiiiiiii ye setNum ek asynchronous process hai toh ye peche chalne lag jata hai and ye jab UI mein ayega toh sahi hi kaam karta hai kyuki UI render hone mein thora time lagta hai but log turaant ho jata hai islie waha pe values lagega ki thora sa piche chal rha hai

CONCEPT : Ek aur cheez badhiya hai ki agar socho hamlog setNum() mein wahi value pass kar deta hu jo pehle bhi tha toh react kuch bhi re render nahi karega kyuki actually to state change hua hi nahi hai toh wo bekar ka kaam dubara nahi karega 

CONCEPT of Object/Array :
const [num,setNum] = useState({user:"Srinjay",age:23});
const btnClicked = () => {
  const newNum = {...num};
  newNum.user = "Mome";
  newNum.age=25;
  setNum(newNum);//Toh click hone par object ki values chng hojayega
}

Ham chahe toh setNum(prev => ({...prev,age:27})) aise bhi change kar sakte hai sirf age ko chahye toh !

CONCEPT OF BATCH UPDATE : 
const [num,setNum] = useState(0);
const btnClicked = () => {
  setNum(num+1);
  setNum(num+1);
  setNum(num+1);
}
Haame ye code dekh ke laag rha hoga ki jab bhi button click hone par num ka value 3 se barna chaiye but waise kaam nhi karega ye code,isko kaam karane ke lie aise likhna hoga aur else num ka value nhi mil rha hai actually react ko -
const btnClicked = () => {
  setNum(prev =>(prev+1));
  setNum(prev =>(prev+1));
  setNum(prev =>(prev+1));
}

💥 2️⃣ useEffect – Lifecycle control karne ka hook
Isse tu side effects (jaise API calls, timers, console logs) handle karta hai(maan lete hai ki ek rasta hai bara sa jisme react apna main kaam kar rha hai and tum uske bagal se ek cycle leke nikalna chahte ho toh ye tum kar sakte ho using this)

Example:
import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Component mount hua 🚀");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setData);
  }, []); // empty array = run only once (on mount)

  return (
    <ul>
      {data.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
🔹 Dependency array ke basis pe ye decide hota hai kab chalana hai
1. [] → sirf ek baar (mount hone par)
2. [count] → jab count change ho
3. bina array ke → har render pe

💥 3️⃣ useRef – Access DOM ya store mutable data
Asaan bhasa mein kisi bhi DOM element ko agar pakarna chahte hai toh useRef lagega,i.e mujhe us cheez ka reference chaiye toh uska reference de dega mujhe directly react(Mutable values hold karne ke liye jo re-render trigger na karein, ya DOM access karne ke liye)

Example:
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // access DOM node directly
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Kar</button>
    </div>
  );
}

💥 4️⃣ useContext – Props drilling ka solution
Props drilling me data ek se dusre component me pass karte karte deep jaata hai. useContext se tu ek global data create karke kahin bhi access kar sakta hai.

Example:
import { createContext, useContext } from "react";

const MyContext = createContext("Srinjay");

function Child() {
  const name = useContext(MyContext);
  return <h2>Hello {name}</h2>;
}

function Parent() {
  return (
    <MyContext.Provider value="Bhai">
      <Child />
    </MyContext.Provider>
  );
}
}
🔹 createContext → context banata hai
🔹 .Provider → value provide karta hai
🔹 useContext → kahin bhi consume kar sakta hai

💥 5️⃣ useReducer – Complex state management ke liye
Jaise Redux ka mini version. Agar multiple actions aur conditions hain, use this instead of useState.

Example:
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </div>
  );
}

⚡ Why useMemo aur useCallback?
React me har render ke time, poora component function dobara run hota hai 😶→ Matlab har variable, function, calculation fir se ban jaata hai(Optimization ke liye,unnecessary re-renders avoid karne ke liye)

Lekin agar koi cheez change hi nahi hui hai, to kya har baar usko dobara calculate karna zaruri hai?
Nahi 😅 Yahan aate hain ye dono heroes:
useMemo — expensive calculation ya derived data memoize karta hai.
useCallback — function reference memoize karta hai.

💥 6️⃣ useMemo – Expensive Calculation Optimization
📘 Basic Syntax: const memoizedValue = useMemo(() => computeSomething(a, b), [a, b]);

🔹 useMemo ek function leta hai (jo koi heavy calculation karta hai)
🔹 Aur ek dependency array deta hai ([a, b])
🔹 Ye tabhi dobara compute karega jab dependencies change hongi
Otherwise, purana cached value hi de dega 🚀

⚙️ Example 1: Without useMemo - 
import { useState } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const slowCalculation = (num) => {
    console.log("⚙️ Running slow calculation...");
    for (let i = 0; i < 1000000000; i++) {} // heavy loop
    return num * 2;
  };

  const double = slowCalculation(count);

  return (
    <div>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
🧨 Problem: Jab bhi tu input me type karega, poori heavy calculation dobara chalegi, chahe count change hua ho ya nahi.

✅ Solution: With useMemo -
import { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const slowCalculation = (num) => {
    console.log("⚙️ Running slow calculation...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const double = useMemo(() => slowCalculation(count), [count]);

  return (
    <div>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
✅ Ab ye heavy calculation sirf tab chalegi jab count change hoga,
input type karne par nahi.

💥 7️⃣ useCallback – Function Reference Optimization 
📘 Basic Syntax: const memoizedFn = useCallback(() => doSomething(a, b), [a, b]);

🔹 React me har render pe function ka naya reference ban jaata hai
🔹 Isse unnecessary re-render ho sakte hain (especially agar wo function child component me pass kar rahe ho)
🔹 useCallback ye function memoize karta hai → Matlab reference same rakhta hai jab tak dependencies same hain

⚙️ Example: Without useCallback - 
import { useState } from "react";

function Child({ onClick }) {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}
😓 Problem: Har baar parent re-render hone par, handleClick ka naya version banta hai → Child bhi unnecessary re-render hota hai.

✅ Solution: With useCallback - 
import { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // dependencies empty, so same reference always

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}
✅ Ab jab parent re-render hoga (count badhne par), handleClick ka reference same rahega → Child re-render nahi karega unnecessarily 😎

⚙️ Ek Simple Rule Yaad Rakhna:
🔹 useMemo → memoize value
🔹 useCallback → memoize function
*/