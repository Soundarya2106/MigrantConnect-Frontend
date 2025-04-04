# MigrantConnect – Frontend

MigrantConnect is a comprehensive platform designed to support migrant workers in Tamil Nadu. This repository contains the frontend code for the MigrantConnect web application, built using React with Vite.

## ✨ Features

- 🔐 **User Login & Access Control**
  - Differentiates between new and existing users
  - Existing users see their Unique ID and full profile
  - New users are prompted to register via "Activate Account"

- 🧾 **Dynamic Modules**
  - **1. Registration Module:** Collects user details like basic info, address, work, bank details, family, documents, and emergency contacts
  - **2. Dashboard:** Overview of user status and services
  - **3. Issue Reporting Module:** Report problems faced by migrant workers
  - **4. Government Scheme Finder Module:** Helps users check scheme eligibility and application status
  - **5. Support Module:**
    - 🤖 **Chatbot** for instant answers
    - 📞 **Call Assistance** feature for personalized support

## 🛠 Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS / Tailwind CSS (optional)
- **Routing & Navigation:**
  - `react-router-dom`
  - `useNavigate`, `useParams`, `useLocation` hooks
- **State Management:** useState, useEffect
- **Icons & UI Enhancements:** [Iconify](https://iconify.design/)– 100k+ open source icons in one framework



<pre>## 🗂 Project Structure (Basic)

<code>src/ ├── assets/ ├── components/ ├── modules/ │ ├── Registration/ │ ├── Dashboard/ │ ├── Issues/ │ ├── SchemeFinder/ │ └── Support/ ├── pages/ │ ├── Login.jsx │ ├── HomePage.jsx │ └── ... ├── App.jsx └── main.jsx</code></pre>

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Soundarya2106/MigrantConnect-Frontend.git
   cd MigrantConnect-Frontend
   ```

2. **Install dependencies**
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app in your browser**
   Navigate to:
   ```
   http://localhost:5173
   ```

✅ You should now see the MigrantConnect frontend running on your machine!

## 📌 Author

👩‍💻 **Soundarya** – *Frontend Developer | UI/UX Designer*  
Passionate about building inclusive and impactful web applications.

---

## 💡 Future Plans

- 🔗 Integrate with backend using **MERN stack**
- 📱 Improve **mobile responsiveness** and overall performance
- ✅ Add **unit tests** and proper **API error handling**
- 🚀 Deploy the application using **GitHub Pages** or **Netlify**
