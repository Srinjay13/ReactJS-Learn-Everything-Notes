/*Ek cheez yaad rakhna ki koi bhi variable ko agar haame print karna ho toh haam kya karte hai ki :
Isse kya hoga ki user ka jo value hai wo uss jaga pe aa jayega !
const user = 'Srinjay';
return (
  <div>
    <h1> Hello from {user}</h1>
  </div>
)

Ab hamlog chaye toh jo hamara component hai usse import Card from './compponents/Card' karke then niche jaha use karna ho waha pe {Card} bolke use kar sakte but easier way hai ek aur that is <Card /> ye likhne se khud se hi wo import bhi ho jata hai and kaam bhi same karta hai !

Aree wah bhai 🔥 ab tu React ke dil tak aa gaya hai —
kyunki “Components” hi React ka heart hain ❤️
🧠 1. Simple Definition
React me Components matlab —
chhote-chhote reusable parts jo milke poori website banate hain.

Jaise Lego blocks 🧱 —
har block alag bana hota hai, par sab milke ek bada structure banate hain.

Functional Component ✅
function Navbar() {
  return <h1>This is Navbar</h1>;
}
export default Navbar;

Aur jab use karna ho:
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h2>Welcome to my site!</h2>
    </>
  );
}
✅ Ye simple JavaScript function hai jo JSX return karta hai.
Functional Components React 16.8+ ke baad se standard ban gaye hain (Hooks ki wajah se).

🎯 4. Features of Components:

| Feature          | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| **Reusable**     | Ek component ko multiple jagah use kar sakte ho.                |
| **Independent**  | Har component apna logic aur styling rakhta hai.                |
| **Nested**       | Ek component ke andar dusra component daal sakte ho.            |
| **Maintainable** | Code chhote-chhote parts me divide hone se maintain karna easy. |

💬 5. Component Naming Rule
Component ka first letter capital hona chahiye
(React ko ye signal milta hai ki ye custom component hai).

🔄 6. Component Tree
React app ek component tree hoti hai:
src/
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┗ Footer.jsx
 ┣ App.jsx
 ┗ main.jsx

But ek cheez soch rhe ho tum bhi shayad ki socho maine ek Card.jsx karke banaya jisme ek card feature hai but usme agar mein data same rakh dunga toh harbar toh wo same hi data ayega,toh kitna hi aisa bar bar components banate rahenge? 
Right & that is where Props in React comes in to render data dynamically*/