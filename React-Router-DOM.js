/*
Sabse basic kindof browser route karna agar hai toh ye hai, kuch bhi server side ka kuch render mein change nahi hoga like -
sheryians.com = /
sheryians.com/courses = /courses
sheryians.com/about = /about

1. Install karne ke baad pehli cheez jo karo is ki main.jsx file mei jao
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
Isse kya hoga ki hamlog BrowserRouter ko invlove kar denge hamare project mein and usse hamlog jaha chahye toh use kar sakte hai

2. src folder mein ab jaana and ek pages bolke folder bana lena and then uske andaar jobhi saare pages ko rakhna chaho uske andaar ek ek karke .jsx files bana lena jaise hamlog components bolke ek folder ke andaar sab rakhte the(e.g - Home.jsx, About.jsx, Contact.jsx, etc.)

3. Ab jab wo hogya hai then abhamlog App.jsx mein aate hai :
import {Route,Routes} from 'react-router-dom'
const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
Isse kya hoga ki jab bhi hamlog http://localhost:5176//about type karenge browser About page render hojayega, and aise hi saare SPA(Single-Page Applications) kaam karte hai but ek problem hai ki agar hamlog uss page taak jane chaiyenege toh page reload hoga, usko rokne ke lie LINK bole ek cheez hota hai, usko use kar sakte hai!

4. Ab socho hamlogo chahe toh ek navbar component bana rahe hai jisme hamlog sab kuch link kaam karana chahte hai toh kuch aise karenge :

Navbar.jsx - 
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <h3>Sheryians</h3>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    )
}
Isse kya hoga ki jab bhi jaise hamlog chahte the ki click karne par page change hojai par page reload na ho toh bilkul waise hi kaam kar rha hai

5. Ab agar hamlogo ko nested routing karna hai to, do taarike hai, ek toh boht hi basic way hojayega ki hamlog aur do pages bana le for example Men.jsx and Women.jsx, and apne App.jsx mein Route add akr de dono page ke lie, toh jab bhi koi uss route pe jayega toh hamlog usse usi page mein redirect kar denge as and when needed

6. Ideally hamlogo ko waise nhi karna chaiye tha, hamlog ko rather App.jsx mein :
<Route path='/product' element={<Product />}>
    <Route path='men' element={<Men />} />
    <Route path='women' element={<Women />} />
    <Route path='kids' element={<Kids />} />
</Route>
Itnader Route ek self closing tag tha, toh usko wo na karke hamlog ne normal tag jaise kie and uske andaar jaake hamare child tags ko rakh die and path mein yaad rakhna baas naam dene sei hi wo parent ke saath/ laga ke kaam karne lagega alag se nhi dena hai hamlogo ko 

7.Chaalo ab hamlog dekte hai ki Dynamic Routing kaise handle kar sakte hai. So pehle ekdam App.jsx mein jao and waha pe ek route banao aise :
<Route path='/courses/:courseId' element={<CourseDetail />} />

"":courseId" ke jagah pe tum kuch bhi likh sakte ho but isse basically kya hoga ki hamlog jo bhi url mein likhenge after /course/<> wo cheez iss parameter ke andaar aa jayega and use karte time uss page mein aise likh dena :
import { useParams } from 'react-router-dom'
const params = useParams();
return (
        <div>
            <h1>{params.courseId} Course Detail</h1>
        </div>
)
Isse jo bhi hamlog page likhenge url main uska value isme aajayega dynamically

8. Ab chalo dekte hai ki history kaise maintain karte hai hamlog using "UseNavigate":

import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {


    let navigate = useNavigate()


    return (
        <div className='py-2 px-5 bg-cyan-800'>
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Return to Home Page
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back
            </button>
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    )
}
navigate('/') ye karne se hamlog home page par chaale jayenge and navigate(+1) or navigate(-1) karne se ek page aage ya ek page picche chale jayenge maintaining the history of the pages
 
💡 Step 1: What is React Router DOM?
React me by default single page hota hai (SPA - Single Page Application).
Matlab — jab tu "About" ya "Contact" pe jaata hai, page reload nahi hota, sirf component change hota hai.

👉 Ye magic hota hai React Router DOM ke through.
Ye ek library hai jo React me routing (navigation) handle karti hai bina page reload ke.

⚙️ Step 2: Installation
Project ke andar terminal me run kar: npm install react-router-dom

Agar tu Vite use kar raha hai (jo hum use karte hain), ye bhi bilkul same command hai.

🏗 Step 3: Basic Setup (BrowserRouter)
Sabse pehle apne main.jsx (ya index.js) me BrowserRouter wrap karna padta hai 👇
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
⚠️ BrowserRouter ek parent wrapper hai jo routing system ko enable karta hai.

🧩 Step 4: Routes aur Route components
Ab apne App.jsx me likh:
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

🧱 Step 5: Pages banana
Create a folder src/pages/ and make 3 files:

📄 Home.jsx -
function Home() {
  return <h1>Welcome to Home Page</h1>;
}
export default Home;

📄 About.jsx -
function About() {
  return <h1>About Us Page</h1>;
}
export default About;

📄 Contact.jsx -
function Contact() {
  return <h1>Contact Us Page</h1>;
}
export default Contact;

🚀 Step 6: Navigation — Link Component
Ab tu chahe toh normal <a> tag se link bana sakta hai, lekin React me use hota hai <Link> (jo reload nahi karta).

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

Ab App.jsx me Navbar add kar de:
import Navbar from "./components/Navbar";
...
<Navbar />
<Routes> ... </Routes>
✅ Ab tu navigate karega bina page reload ke. (SPA magic!)

⚡ Step 7: Dynamic Routing (Parameters)
Agar tu product page banata hai jisme har product ka alag id ho,
toh tu route parameters use karega:
<Route path="/product/:id" element={<Product />} />

Aur Product.jsx me:
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
}
export default Product;
🧠 URL agar /product/5 hoga → output: Product ID: 5

🧭 Step 8: useNavigate Hook (for programmatic navigation)
Kabhi tu button click pe navigate karna chahta hai (without <Link>):
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About Page</button>
    </>
  );
}

export default Home;
✅ Ab button pe click karega → About page pe chala jayega.

🧱 Step 9: Nested Routes (Parent-Child)
Agar tu ek layout chahta hai (Navbar + Outlet), use kar:
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h2>Header</h2>
      <Outlet /> {// child components yaha render honge }
      <h4>Footer</h4>
    </div>
  );
}

export default Layout;

Aur App.jsx me likh:
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>

🧠 Step 10: 404 Page (Not Found)
<Route path="*" element={<h1>404 Page Not Found</h1>} />
*/
