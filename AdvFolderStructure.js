/*

🧩 1. Feature-Based Folder Structure :

Ye industry-standard structure hai — mostly used in scalable React apps.
Isme hum har feature ko ek independent unit treat karte hain (jaise Login, Dashboard, Profile, etc.) — jisme us feature ke components, CSS, hooks, aur context sab ek hi folder ke andar hote hain.

📁 Example structure:
src/
 ┣ assets/
 ┣ components/        # Reusable UI parts (buttons, modals, etc.)
 ┣ features/          # Major app sections (self-contained)
 ┃ ┣ auth/
 ┃ ┃ ┣ components/
 ┃ ┃ ┣ hooks/
 ┃ ┃ ┣ AuthPage.jsx
 ┃ ┃ ┣ authSlice.js
 ┃ ┃ ┗ auth.css
 ┃ ┣ jobs/
 ┃ ┃ ┣ components/
 ┃ ┃ ┣ JobList.jsx
 ┃ ┃ ┣ JobDetail.jsx
 ┃ ┃ ┗ jobs.css
 ┣ hooks/
 ┣ utils/
 ┣ context/
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css

💡 Benefits:
Har feature self-contained hota hai — maintain karna easy.
Team collaboration simple ho jata hai (ek banda ek feature handle kare).
Reusability aur scalability dono possible.

⚡ When to use:
Jab app medium ya large scale ka ho, jaise:
Job Portal, E-commerce, Dashboard, Social App, etc.

⚛️ 2. Atomic Design Folder Structure :
Atomic Design ek UI-first approach hai — ye idea hai ki UI ko smallest to biggest reusable blocks me tod diya jaye.

Ye 5 levels me divide hota hai:
Atoms → smallest UI (button, input, icon)
Molecules → combination of atoms (search bar, card)
Organisms → complex reusable section (navbar, footer, form section)
Templates → page layout structure
Pages → actual pages using templates + data

📁 Example structure:
src/
 ┣ assets/
 ┣ components/
 ┃ ┣ atoms/
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┣ Input.jsx
 ┃ ┃ ┗ Avatar.jsx
 ┃ ┣ molecules/
 ┃ ┃ ┣ SearchBar.jsx
 ┃ ┃ ┗ JobCard.jsx
 ┃ ┣ organisms/
 ┃ ┃ ┣ Navbar.jsx
 ┃ ┃ ┗ JobsGrid.jsx
 ┃ ┣ templates/
 ┃ ┃ ┗ HomeTemplate.jsx
 ┃ ┗ pages/
 ┃   ┣ HomePage.jsx
 ┃   ┗ JobDetailPage.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css

💡 Benefits:
Perfect for design systems aur component libraries (like Material UI or design-driven projects).
Reusability ka maximum level milta hai.
Structure visually and logically aligned hota hai UI/UX thinking ke saath.

⚡ When to use:
Jab tu UI-heavy project bana raha ho (e.g. landing pages, SaaS dashboards, design systems).

Basically practical life mein hamlog dono ka mixture hi use karte hai

Koi bhi icon wagera agar use karna hai hame toh hamlog lucide ya remix-icon ke website se utha sakte hai jo hamlog kaise karte hai ki :
npm install lucide-react

Ye chalane ke baad jobhi icon chaiye hoga usko waha se copy karke sidha hamare jobhi jsx file usme aake sidha paste karenge and jobhi import ka command hai us icon ke lie wo bhi upar usi jsx file mein import bhi kar lena bhai, toh chal jayega badhiya
*/