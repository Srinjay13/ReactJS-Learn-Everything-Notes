/*🧩 Step-by-step: CSS folder structure in React
🧱 Step 1: Ek folder banao

Apne project ke src folder ke andar ek naya folder banao:
src/
 ┣ components/
 ┃ ┣ Card.jsx
 ┃ ┣ SearchBar.jsx
 ┃ ┗ ...
 ┣ styles/         ← 🎯 yaha hoga hamara CSS folder
 ┃ ┣ App.css
 ┃ ┣ Card.css
 ┃ ┗ SearchBar.css
 ┣ App.jsx
 ┗ index.js

🎨 Step 2: Har component ke liye ek CSS file banao
Jaise example:
Card.jsx → uske liye Card.css
SearchBar.jsx → uske liye SearchBar.css
App.jsx → uske liye App.css

📥 Step 3: Component ke andar CSS ko import karo
Har component ke top pe uska CSS import kar lo, for example:
🟩 Card.jsx:
import "./../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      {content}
    </div>
  );
};

export default Card;

🟦 SearchBar.jsx:
import "./../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by company or role"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

🎯 What Are CSS Modules in React?
React mein jab hum normal CSS file import karte hain (like import './Card.css'), toh uske class names global ho jaate hain — matlab agar kahin aur same class name hai (for example .card), dono ke styles milke clash kar sakte hain 😬

👉 CSS Modules is problem ko solve karta hai —
It automatically makes all class names unique, sirf us component ke liye.

🧩 Step-by-step: Using CSS Modules
🧱 Step 1: File ka naam change karo
Apni normal CSS file ka naam .module.css me badal do.

Example:
src/
 ┣ components/
 ┃ ┣ Card.jsx
 ┃ ┗ Card.module.css   ✅

🧠 Step 2: Component ke andar import karo
import styles from './Card.module.css';

Yaha styles ek object ban jaata hai jisme tumhare CSS classes key-value pair ke form mein hote hain.

🎨 Step 3: CSS likho as usual
Card.module.css 
.card {
  background-color: #1e1e1e;
  color: white;
  border-radius: 12px;
  padding: 20px;
}

.title {
  color: cyan;
  font-weight: 600;
}

⚙️ Step 4: Use karo className ke andar
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Frontend Engineer</h2>
    </div>
  );
};

export default Card;

React internally class ko kuch aise unique bana deta hai:
<div class="Card_card__1Jsd3">
  <h2 class="Card_title__3mKpL">Frontend Engineer</h2>
</div>

👆 Ye auto-generated hashed class names hoti hain —
matlab clash hone ka zero chance 🔥

🧠 Step 5: Conditional Classes (Bonus)
Agar tumhe ek se zyada class lagani hai ya dynamically lagani hai:

<div className={`${styles.card} ${styles.active}`}></div>

Ya conditional:
<div className={isActive ? styles.active : styles.inactive}></div>

🧪 Step 6: Example — Real Use Case
Ek small real-world style dekho 👇

Card.module.css :
.card {
  background-color: #111;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}

.title {
  color: #00c8ff;
  font-size: 20px;
}


Card.jsx :
import styles from './Card.module.css';

const Card = ({ title, company }) => {
  return (
    <div className={styles.card}>
      <h3>{company}</h3>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Card;*/