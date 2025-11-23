/*const App = () => {
  function btnClicked(){
    console.log("Button is clicked !");
  }  
  return (
    <div>
      <button onDoubleClick={btnClicked}>Click Here</button>
    </div>
  )
}

Isse kya hoga ki jab bhi ham doubleclick karenge toh ham uss function ko call kar denge and aise hamlog kuch events ko handle kar sakte hai agar hooks na use kare toh

And ek aur cheez yaad rakhna always ki jo function ham event hone pe likh rahe hai usko () aise call mat kardena warna wo event hone ke pehele hi wo function call hojayega

Hamlog chahe toh alag se function ko na banake sidha uss jagya pe hi bana sakte hai like(Arrow function bhi bana sakte hai) :
const App = () => {
  return (
    <div>
    <button onDoubleClick={function(){
        console.log("Button is clicked !");  
      }}>Click Here</button>
    </div>
  )
}

Now socho ki hame ek input tag mein jo values input horha hai usko haame capture karna hai using functions, then kaise karenge dekte hai:
const App = () => {
  function inputChanging(val){
    console.log(val);
  }  
  return (
    <div>
      <input
      onChange = {function(elem){
        inputChanging(elem.target.value);
      }}
      type="text"
      placeholder = "Enter you name"
      />
    </div>
  )
}

Ek baat pe ache se dhyan do ki deko hamlog agar sidha us function jo inputChanging hai usko sidha hi chalane jaate toh kya hota ki inputchanging function pehle hi chal jata toh islie hamlog ne ek pehle function bana lie and fir usme se wo elem ko utha rhe hai and then usme se jo value hamlogo ko pass karna hai wo finally pass kar dete hai hamare waale function mein..samjheeeeeeee

const App = () => {
  function pageScrolling(val){
    if(val>0){
      console.log("Going down the page");
    }else{
      console.log("Going above back again");
    }
  }  
  return (
    <div>
      <div onWheel = {(elem) => {
          pageScrolling(elem.deltaY);
      }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}
Isme hamlog kya kar rhe hai ki socho hamlog ko track karna hai ki user abhi niche ja rhe hai ya upaar aa rhe hai, toh isse hamlog aise track kar sakte hai to know the exact direction in which they are going
*/