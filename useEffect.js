/*
🧩 Step 1: useEffect kya hota hai?
React me jab tu component render karta hai, toh sirf UI update hoti hai.
Lekin kabhi-kabhi tu chahta hai kuch “extra kaam” bhi ho jaaye render ke baad — jaise:
✅ API call karna
✅ Console me log likhna
✅ LocalStorage me data save karna
✅ Window scroll ya resize detect karna
✅ Timer chalana

Ye sab “extra kaam” (side-effects) kehlate hain.
👉 Aur useEffect hook inhi side-effects ko handle karta hai.

⚙️ Step 2: Syntax of useEffect
useEffect(() => {
  // yaha likho jo side-effect karna hai
}, [dependencies]);

1st argument: callback function — kya karna hai
2nd argument: dependency array — kab karna hai

🚀 Step 3: useEffect ke 3 major cases
🔹 Case 1: Run only once (on mount) - 
useEffect(() => {
  console.log("Component mounted!");
}, []);
📦 Ye tab chalega sirf ek baar jab component screen pe aata hai.
👉 Mostly API calls isi me karte hain.

🔹 Case 2: Run every render - 
useEffect(() => {
  console.log("Component rendered!");
});
⚠️ Agar dependency array chhoda diya, to ye har render pe chalega (matlab har re-render).

🔹 Case 3: Run only when specific value changes - 
useEffect(() => {
  console.log("Count badla:", count);
}, [count]);
📌 Iska matlab: jab bhi count change hoga tab ye effect chalega.
Ye dependency array me likhe hue variables pe depend karta hai.

🎯 Step 4: Example — Counter with useEffect -
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
🧠 Flow:
Component render hua
count badla → effect trigger hua
Console me message aaya

⏳ Step 5: Cleanup Function -
Kayi baar hum event listeners, timers, ya subscriptions use karte hain.
Unko component ke unmount hone pe cleanup karna padta hai.

✅ Example: Timer cleanup:
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  // cleanup return function
  return () => {
    clearInterval(timer);
    console.log("Timer stopped");
  };
}, []);
🧹 Cleanup kab hota hai:
Component unmount hone par
Ya effect dobara run hone se pehle (agar dependency badli ho)

⚠️ Step 7: Common Mistakes -
❌ Forgetting dependency array → effect har render pe chalega
❌ Infinite loop: agar tu effect ke andar state update kare bina condition ke
❌ Cleanup bhool jaana → memory leak ho jaata hai

Example of infinite loop:
useEffect(() => {
  setCount(count + 1); // ❌ ye har render pe count badhata rahega
});

🎨 Bonus Example — API call with useEffect :
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []); // 👈 ALWAYS USE LIKE THIS nahi toh galat use hojayega bhai

  return (
    <div>
      <h2>Users List</h2>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default Users;


useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, [num]); //Agar aise num ya fir koi bhi value pass kar denge toh wo sirf usi par dependant hojayega that is ki uska agar state change hoga tabhi useEffect function chalega

  */
 