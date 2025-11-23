/*
🧩 Step 1: Default HTML Forms ka Problem
Normal HTML me hum likhte hain:

<form>
  <input type="text" name="username" />
  <button>Submit</button>
</form>

Yahan jab tu submit karta hai → page reload ho jaata hai 😩
But React me hum nahi chahte page reload ho, kyunki React ek Single Page Application (SPA) hai.

⚛️ Step 2: Controlled Components
React me forms handle karne ka best tareeka hota hai —
use Controlled Components.

Matlab:
React ka state hi input ke value ko control kare.
Toh input ke andar kuch likhne par React state update hoti hai, aur state se hi value input box me aati hai.

✅ Example: Simple Controlled Input
import React, { useState } from "react";

function FormExample() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔒 Stops page reload
    console.log("Form submitted:", username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // 2-way binding
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;

🔁 Flow:
1. User likhta hai → onChange trigger hota hai
2. State update hoti hai (setUsername)
3. Input ka value update hota hai (via state)
4. Jab form submit hota hai → page reload nahi hota (preventDefault)

🧾 Step 3: Handling Multiple Inputs
Jab form me multiple fields ho jaaye (like name, email, password),
toh har ek ke liye alag-alag useState banana boring lagta hai 😅
Isliye hum ek object state bana lete hain.

✅ Example: Multiple Fields Handling
import React, { useState } from "react";

function MultiForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // dynamic key update
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiForm;

⚙️ What’s happening:
1. handleChange har input ke name aur value ko read karta hai
2. Ek hi state (formData) me saare fields update ho jaate hain
3. Jab submit karte ho → saara data ek saath mil jaata hai

✨ Step 4: Optional — Reset Form After Submit
Agar tu chahe submit ke baad form clear ho jaaye:
setFormData({ name: "", email: "", password: "" });
Ye line handleSubmit ke end me daal de.

💡 Step 5: Validation (Optional)
Tu form validation bhi easily kar sakta hai:
if (!formData.email.includes("@")) {
  alert("Invalid email!");
  return;
}
*/