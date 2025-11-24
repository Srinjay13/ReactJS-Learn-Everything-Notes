/*
Asaan bhasa mein prblm jo upar hamlog solve kar rhe the wo toh bas ek shortcut hai but usko agar ache se solve karna chaye toh wo kar sakte hai with the use of Context API. Ek example se samajhte hai for example Anurag ne ek netflix ka subscription lia hai toh wo data mujhe pass on kia ki password hai to srinjay, then maine use pass kar die apne GF ko toh wo bhi ab access kar sakta hai but dikkat ye hai ki jab anurag pw change karega toh wo bhi mere thru hi mere GF tak pahuchna parega, lekin agar anurag jaake koi board mein baare baare se likh deta jo sabko dikhai de toh wo hojata data centralization & context api 

Jab hamlog Context API use karna chahte hai, uske pehle ek concept dekh lo ache se ki kaise kar sakte hai use :

1. Pehle apne main.jsx mein App component ko themecontext se wrap kar do like this - 
import ThemeContext from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeContext>
      <App />
    </ThemeContext>
)

2. But ab ap soch rahe honge ki ye ThemeContext aya kaha se, so ek folder banayenege context bolke src ke andaar and usme ye ThemeContext.jsx bolke ek file bana denge

3. Then app.jsx mein ayenge aur isme kuch aisa karenge :
const App = () => {
    const [theme,setTheme] = useState('light');
    return (
      <div>
        <Navbar theme={theme}>
          <h2> This is Navbar </h2>
          <h3> Bohot acha navbar </h3>
        </Navbar>
      </div>
    )
  }
Usually ham koi bhi component ko use karte hai usse hamesha self closing tag ke tarah use karte hue aa rhe the but agar hamlog aise do tin elements uske andaar de denge toh wo as children props ke saath chala jayega and wo ek array ke form mein hoga agar ek se zyada elements hai and agar ek hi hai toh object hoga.

4. Then hamlog jayenge apne Navbar.jsx mein -
const Navbar = ({children,theme}) => {
    console.log(children); //array containing the 2 elements
    return (
      <div>
        <h2> Srinjay </h2>
        <Nav2 theme={theme} /> //Isse pass hojayega theme to the child
      </div>
    )
  }
{children,theme} aise likhne se hamlog basically props ko hi accept kar rhe hai but using destructuring toh hamlog bar bar props.<> ya props.<> kuch karke bolna nahi parega and directly use kar payenge hamlog 

Ye toh ek side concept hogya ki data kaise pass horha tha, chalo ab asli mein dekte hai ki context api kaise use karte hai hamlog :

1. Pehle toh themecontext se wrap kar dia apan log app ko main.jsx file mein taaki jaise BrowserRouter ke time bhi kie the ki use kar paye use but isse problem yahi hai ki isse hamlogo ko app dikhai hi nahi dega rather hamlogo ko themecontext dikhai dene lagega

2. Then apne ThemeContext.jsx mein jayenge aur kuch aise karenge :
const ThemeContext = (props) => {
    return (
      <div>
        {props.children};//isse jobhi uske children mein hoga wo ajayega
      </div>
    )
  }

3. So ab ata hai hamlog ka tin main steps to do the task that is - 
          1. Create karo context
          2. Provide karo data
          3. Use karo data ko

4. So pehle hamlog chaalo create karte hai context ko us file mein kuch aise :
import { createContext } from "react"
export const ThemeDataContext = createContext();

5. Ab chalo data ko provide karte hai :
<ThemeDataContext.Provider value={[theme,setTheme]}>
      {props.children}
</ThemeDataContext.Provider>

6. Ab last step ata hai ki jisme ham logo ko data ko use karna hai :
const [theme,setTheme] = useContext(ThemeDataContext);
<h4>{theme}</h4> //jaha bhi ab hame use karna hai aise use kar sakte hai
*/
