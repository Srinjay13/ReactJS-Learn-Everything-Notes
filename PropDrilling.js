/*🧩 1. What are Props?
Props ka full form hota hai “Properties”.
Ye React me data pass karne ka tareeka hota hai ek component se dusre component me.

Matlab —
Parent component apne child component ko data bhejta hai props ke through.
🎯 Example:

// App.jsx
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Srinjay" age={20} />
      <Student name="Aman" age={22} />
    </div>
  );
}

export default App;

// Student.jsx
function Student(props) {
  return (
    <h2>
      Hello {props.name}, you are {props.age} years old.
    </h2>
  );
}

export default Student;
🧠 Output:
Hello Srinjay, you are 20 years old.
Hello Aman, you are 22 years old.

⚙️ 2. Samjho Props Ka Kaam

Props read-only hote hain (child unhe change nahi kar sakta).
Parent → Child data flow ke liye use hota hai.
Jaise function arguments hote hain, waise hi props behave karte hain.

⚡ 3. Destructuring Shortcut
Props ko baar-baar likhna bore lagta hai 😅
Isliye hum destructuring use karte hain:

function Student({ name, age }) {
  return <h2>Hello {name}, you are {age} years old.</h2>;
}

Cleaner and pro-level code ✅

🔁 4. Prop Drilling Kya Hota Hai?
Ab maan le bhai, data App se ek bohot niche wale component tak bhejna hai. Jaise : App → Parent → Child → GrandChild

Aur data App me hai, par use GrandChild me chahiye.

React me direct App → GrandChild bhej nahi sakte, to hume data har layer ke through pass karna padta hai. Ye process kehlata hai 👉 Prop Drilling

function App() {
  const user = "Srinjay";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h2>Hello {user}</h2>;
}
✅ Output:
Hello Srinjay

😫 Par dikkat ye hai ki har beech ke component ko forcefully prop pass karna padta hai, chahe use data kaam me aaye ya na aaye.

Lekin agar hame array ya object pass karna hai props ke thru toh kaise karenge chalo dekte hai bhai - 

🧩 1. Array ko Props ke through Pass karna

React me hum array ko bilkul normal variable ki tarah props ke through bhej sakte hain.

📘 Example:
// App.jsx
import StudentList from "./StudentList";

function App() {
  const students = ["Srinjay", "Mome", "Anurag", "Paul"];

  return (
    <div>
      <StudentList names={students} />
    </div>
  );
}

export default App;

// StudentList.jsx
function StudentList({ names }) {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default StudentList;

✅ Output:
- Srinjay
- Mome
- Anurag
- Paul

🧠 Breakdown:
names={students} → ye array ko prop ke through bhej diya.
Child component me destructuring se liya { names }.
map() use karke har naam ko display kar diya.

🧩 2. Object ko Props ke through Pass karna

Bilkul same logic object ke saath bhi —
bus syntax thoda alag hota hai 👇

📘 Example:
// App.jsx
import Profile from "./Profile";

function App() {
  const user = {
    name: "Srinjay",
    age: 23,
    city: "Kolkata",
  };

  return (
    <div>
      <Profile details={user} />
    </div>
  );
}

export default App;

// Profile.jsx
function Profile({ details }) {
  return (
    <div>
      <h2>{details.name}</h2>
      <p>Age: {details.age}</p>
      <p>City: {details.city}</p>
    </div>
  );
}

export default Profile;

✅ Output:
Srinjay
Age: 20
City: Kolkata

⚡ Shortcut: Object Destructuring Inside Props
Agar tu aur clean likhna chahta hai 👇

function Profile({ details: { name, age, city } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

🧠 3. Mix Example (Array of Objects)-
Kabhi-kabhi data aise hota hai:

const users = [
  { name: "Srinjay", age: 20 },
  { name: "Aman", age: 22 },
  { name: "Riya", age: 19 }
];

To isko bhi props ke through bhejna ekdum easy hai:

// App.jsx
import UserList from "./UserList";

function App() {
  const users = [
    { name: "Srinjay", age: 20 },
    { name: "Aman", age: 22 },
    { name: "Riya", age: 19 },
  ];

  return <UserList data={users} />;
}

export default App;

// UserList.jsx
function UserList({ data }) {
  return (
    <ul>
      {data.map((user, i) => (
        <li key={i}>
          {user.name} — {user.age} years old
        </li>
      ))}
    </ul>
  );
}

export default UserList;

✅ Output:
Srinjay — 20 years old
Aman — 22 years old
Riya — 19 years old*/