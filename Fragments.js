/*Fragments React ke andar chhoti si cheez lagti hai, par kaam ekdum important karti hai! Chal easy hinglish me samjhta hoon 👇

🧩 Problem samajh:
React me jab hum JSX likhte hain, har component ka ek hi root element hona chahiye.

Example dekh:
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome to my app!</p>
  );
}

⚠️ Ye error dega:
“JSX expressions must have one parent element.”

Kyun?
Kyuki React ke andar return ke time ek hi parent element allowed hota hai.
Yahan <h1> aur <p> dono same level pe hain — bina ek common parent ke.

🧩 Solution: Fragment
To solve this, hum dono ko ek parent ke andar wrap kar dete hain —
lekin hum extra div nahi banana chahte har jagah.
Wahi jagah React.Fragment ka kaam aata hai 💪

Example:
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to my app!</p>
    </>
  );
}

✅ Ab ye perfectly valid hai — aur browser me extra div add nahi hota*/