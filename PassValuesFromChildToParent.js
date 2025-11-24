/*Say for example usually hamlog jante hai ki props drilling se hamlog koi bhi data parent se child tak bhej sakte hai but if we want to do the opposite we have a tricky way to do it, let's see how - 

App.jsx :
import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  
  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App

Navbar.jsx :
import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        props.setTheme('Dark')
    }
    
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar

Isse kya horha hai ki hamlog jo setTheme bolke jo function hai use bhi pass on kar de rhe hai from the parent to the child and jab bhi child mein usme change karna hoga us function ko chala dega toh wo changed value parent mein bhi reflect karne lagega, and that is how we do it !
*/