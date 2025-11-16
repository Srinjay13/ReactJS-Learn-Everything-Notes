/*Bhai sun, ReactDOM.createRoot ko samajhne ke liye ek chhoti analogy lete hain — socho tum ek ghar bana rahe ho React se.
- Tumhare paas ek plot of land hai (ye hai HTML ka <div id="root">)
- Tum React se ek ghar banana chahte ho (React components)
- Par pehle tumhe ek builder ko bolna padta hai ki "ye plot le lo aur yahan ghar banao"
🛠️ ReactDOM.createRoot kya karta hai?
Ye builder ko bolta hai:
"Bhai, ye plot le lo (div#root) aur yahan se React ka ghar banana start karo!"
Code mein:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

🆚 Pehle kya hota tha?

Pehle hum likhte the:
ReactDOM.render(<App />, document.getElementById('root'));

Ab React 18 ke baad bolte hain:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/