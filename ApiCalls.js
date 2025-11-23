/*
⚡ Step 1: API kya hoti hai?
API (Application Programming Interface) ek bridge hoti hai frontend aur backend ke beech. Jaise tu React app se bolta hai:
"Bhai mujhe users ka data dedo"

Backend (like Node.js, Express, etc.) bolta hai: 
"Le bhai JSON format me data le jaa"

React me hum ye data fetch() ya axios se lete hain.

⚙️ Step 2: React me API call karne ke 3 popular tareeke
1. fetch() (built-in browser method)
2. axios (popular library)
3. react-query / tanstack-query (advanced – caching, retry, etc.)

Abhi hum fetch() aur axios dono samjhte hain basic level par 💪

🧩 Step 3: fetch() ka use React me
✅ Example 1: Basic fetch using useEffect
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // API call
      .then((response) => response.json())
      .then((data) => setUsers(data)) // data state me save
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // [] = sirf ek baar chale (mount par)

  return (
    <div>
      <h1>👥 Users List</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
🔁 Flow samajh lo:
1. Component render hota hai
2. useEffect chalta hai (API call karta hai)
3. Data milta hai → setUsers ke through state update hoti hai
4. UI automatically re-render hota hai updated data ke saath

🚀 Step 4: Axios version (Cleaner aur professional way):
Pehle terminal me install karo: npm install axios

✅ Example 2: Using axios
import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>📰 Blog Posts</h1>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Posts;

✅ Axios ka fayda:
Cleaner syntax
Automatic JSON conversion
Error handling easy

💡 Step 5: Loading aur Error State bhi dikhana chahiye
Production apps me ye zaruri hota hai — user ko batana chahiye data load ho raha hai ya error aayi hai.

import React, { useEffect, useState } from "react";

function UsersWithStatus() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network error!");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>⏳ Loading...</h2>;
  if (error) return <h3>❌ {error}</h3>;

  return (
    <div>
      <h1>Users</h1>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default UsersWithStatus;

🔥 Bonus Tip:
Agar tu chaahe to async-await likhne ka clean style bhi use kar sakta hai:
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, []);
*/
