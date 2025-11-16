/*🌳 1. Pehle samajh le: DOM kya hota hai?
DOM ka full form hai — Document Object Model

Jab tu koi HTML page browser me open karta hai —
browser ek tree-like structure banata hai us HTML ka.
Wo tree hi hota hai DOM Tree.
Example:
<body>
  <h1>Hello</h1>
  <p>Welcome to React</p>
</body>

Browser isko kuch aise samajhta hai:
Document
 └── body
      ├── h1 → "Hello"
      └── p  → "Welcome to React"

Ab agar tu JS se kuch change karta hai jaise:

document.querySelector("h1").textContent = "Hi!";

Browser poora tree check karega, update karega aur fir re-render karega.
👉 Matlab — har chhoti update ke liye browser real DOM ko manipulate karta hai, aur ye process slow hota hai jab changes zyada ho jaate hain.

⚡ 2. Virtual DOM kya karta hai?

React ne bola —

“Bhai har baar real DOM ko mat chhed, main ek copy rakhta hoon memory me — usse bolte hain Virtual DOM.”

Virtual DOM ek lightweight JavaScript object hota hai jo real DOM ka virtual copy hota hai.

Jab bhi state change hoti hai, React virtual DOM me update karta hai, na ki directly real DOM me.

🧠 3. React ka Smart Step-by-Step Process

React ka kaam kuch aise hota hai 👇
User clicks or data changes → React creates a new Virtual DOM.
React compares new Virtual DOM with old Virtual DOM (ye process bolte hain diffing algorithm).
React dekh leta hai exactly kya change hua hai (for example sirf 1 <p> tag badla hai).

React sirf wahi change real DOM me update karta hai, poora page nahi.
👉 Isse time aur performance dono bacha lete hain ⚡

⚖️ 4. Real DOM vs Virtual DOM (Table)

| Feature      | Real DOM                    | Virtual DOM               |
| ------------ | --------------------------- | ------------------------- |
| Update Speed | Slow                        | Fast                      |
| Re-render    | Whole page                  | Only changed part         |
| Memory Usage | High                        | Low                       |
| Manipulation | Directly in browser         | In JS (then syncs)        |
| Example      | `document.getElementById()` | React updates via diffing |

--------------------------- JavaScript XML ---------------------------

⚛️ 1. JSX kya hota hai?

JSX ka full form hai: JavaScript XML
React me JSX basically ek syntax extension hai JavaScript ka —
matlab JS ka hi ek naya style hai jisme tu HTML jaise likh sakta hai directly apni JS file me.
Example:

function App() {
  return <h1>Hello Bhai! Welcome to React 👋</h1>;
}

👀 Dekhne me HTML lag raha hai na?
Par ye actually HTML nahi, ye JSX hai.
JSX likhne se code readable aur declarative ban jaata hai.

🧠 2. Par andar se kya hota hai bhai?
React browser ko HTML directly nahi deta.
Browser sirf JavaScript samajhta hai, JSX nahi.
Isliye React ke tools (like Babel) JSX ko convert kar dete hain normal JS me.
Example 👇

JSX likha tha:
const element = <h1>Hello Bhai!</h1>;

Ye convert hota hai:
const element = React.createElement("h1", null, "Hello Bhai!");

Matlab JSX sirf shortcut hai React elements banane ka.

🔥 3. Kyu use karte hain JSX?

Kuch solid reasons hain 👇
Easy aur clean syntax:
HTML + JS ek saath likhne se code readable hota hai.
Less code:
React.createElement() likhne se better hai <h1> likh do 😅
Dynamic power:
JSX me tu JS expressions use kar sakta hai directly {} ke andar.

Example:
const name = "Srinjay";
function abc(){
    console.log("Hello World !");
}
return <h1>Hello {name}!</h1>;
<abc /> //isse hi hamara wo function call hojata hai in JSX filesF

Output → Hello Srinjay!

Error detection:
Babel compiler turant bata deta hai agar syntax galat likha.

🧩 4. Rules of JSX (important bhai)

Agle time tu JSX likhega, to ye chhoti chhoti cheezein yaad rakh le:

✅ 1. Ek parent element ke andar sab hona chahiye
// ❌ Wrong
return (
  <h1>Hello</h1>
  <p>World</p>
);

// ✅ Right
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);


✅ 2. JS likhne ke liye {} use karte hain
const age = 20;
return <p>I am {age} years old.</p>;


✅ 3. Class nahi, className likhna padta hai
return <h1 className="title">Hello</h1>;


✅ 4. Attributes camelCase me hote hain
return <button onClick={handleClick}>Click Me</button>;

🧮 5. JSX file ke extension

Normally hum .jsx extension use karte hain React components ke liye,
taaki IDE (VS Code etc.) ko pata chale ye file me JSX likha hai.

Example:
App.jsx
Header.jsx
Footer.jsx

Technically .js file me bhi JSX likh sakte ho,
lekin .jsx likhne se clarity rehti hai ki ye component file hai.

🧠 6. React me JSX ka role
React me har component kuch aise likha hota hai:

function Header() {
  return (
    <header>
      <h1>Welcome Bhai!</h1>
    </header>
  );
}
export default Header;

Yahan <header> aur <h1> JSX hai,
jo baad me convert ho jaata hai JS me,
aur fir React usse Virtual DOM me daal deta hai.*/