/*
🧩 What is “Binding” in React?
Binding ka matlab hota hai — “React state aur UI ke beech connection”.
Jab React ka state change hota hai, UI automatically update hoti hai.
Ye process hoti hai 1-way data binding.

🔹 1-Way Data Binding (Default in React) :
By default, React me 1-way binding hoti hai →
Data flow sirf ek direction me jaata hai:
State → UI (view)

Example:
function App() {
  const [name, setName] = React.useState("Srinjay");

  return (
    <div>
      <h2>Hello, {name}</h2>
    </div>
  );
}

🧠 Yahan name state change hoga → UI automatically update ho jaayegi.
Lekin agar user input box me kuch likhe, usse name change nahi hoga — kyunki wo sirf one-way flow hai.

🔁 2-Way Data Binding (Manual Setup in React)
2-way binding ka matlab hota hai: “State UI ko control kare, aur UI user ke through state ko update kare.”

Matlab: React state se input box me value aaye, Aur jab user input me kuch likhe, wo state update kar de

✅ Example: Two-Way Binding
import React, { useState } from "react";

function TwoWayBindingExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}                  // ← State controls input
        onChange={(e) => {
          e.preventDefault(); //Avoid the form submission
          setName(e.target.value);
          setName('');//wapas se khaali hojayega jab bhi submit karenge
        }}  // ← Input updates state
        placeholder="Enter your name"
      />
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default TwoWayBindingExample;

🔁 What’s happening:
1. value={name} → State controls the input box.
2. onChange={(e) => setName(e.target.value)} → User ke likhne par state update hoti hai.
3. State update → UI re-render → Input aur heading dono update.
👉 This creates a loop (state ↔ UI) → That’s why it’s called 2-way binding.
*/