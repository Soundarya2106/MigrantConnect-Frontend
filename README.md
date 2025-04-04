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



## 🗂 Project Structure (Basic)

```
|── MCFrontend
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   │   ├── abouticon.png
    │   │   ├── BGImage.jpg
    │   │   ├── bot.png
    │   │   ├── chat.png
    │   │   ├── contact.png
    │   │   ├── down.png
    │   │   ├── faq.png
    │   │   ├── Frame 100 (1).png
    │   │   ├── gethelp.png
    │   │   ├── Impact.png
    │   │   ├── location.png
    │   │   ├── Logo.png
    │   │   ├── Mission.png
    │   │   ├── react.svg
    │   │   ├── reportIcon.png
    │   │   ├── search.png
    │   │   ├── track.png
    │   │   ├── up.png
    │   │   ├── user.png
    │   │   └── Vision.jpg
    │   ├── Components
    │   │   ├── AboutHeroSection.jsx
    │   │   ├── AboutSection.jsx
    │   │   ├── ContactCard.jsx
    │   │   ├── ContactHeader.jsx
    │   │   ├── ContactSection.jsx
    │   │   ├── CopyRight.jsx
    │   │   ├── CornerDesign.jsx
    │   │   ├── FeatureSection.jsx
    │   │   ├── FilpCard.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Icons.jsx
    │   │   ├── LanguageSelector.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── PinIcon.jsx
    │   │   ├── QuickLinks.jsx
    │   │   ├── ServicesCard.jsx
    │   │   ├── ServicesContainer.jsx
    │   │   ├── ServicesHeader.jsx
    │   │   ├── ServicesIcon.jsx
    │   │   └── SocialIcons.jsx
    │   ├── DesignFiles
    │   │   ├── AboutSection.module.css
    │   │   ├── ContactCard.module.css
    │   │   ├── ContactHeader.module.css
    │   │   ├── ContactSection.module.css
    │   │   ├── Container.module.css
    │   │   ├── FeatureSection.module.css
    │   │   ├── Footer.module.css
    │   │   ├── Header.module.css
    │   │   ├── LanguageSelector.module.css
    │   │   ├── LoginForm.module.css
    │   │   └── ServicesContainer.module.css
    │   ├── FooterPagesComponents
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── DPC.jsx
    │   │   ├── PP.jsx
    │   │   └── TAC.jsx
    │   ├── HomePageComponents
    │   │   ├── Dashboard.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── IDCardSection.jsx
    │   │   ├── Location.jsx
    │   │   ├── PieCharts.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── StatsSection.jsx
    │   │   └── WelcomeSection.jsx
    │   ├── HomePageDesignFiles
    │   │   ├── Dashboard.module.css
    │   │   ├── Footer.module.css
    │   │   ├── Header.module.css
    │   │   ├── IDCardSection.module.css
    │   │   ├── Location.module.css
    │   │   ├── Maincontent.module.css
    │   │   ├── Sidebar.module.css
    │   │   ├── StatsSection.module.css
    │   │   └── WelcomeSection.module.css
    │   ├── main.jsx
    │   ├── Pages
    │   │   ├── AboutPage.jsx
    │   │   ├── ChangePasswordPage.jsx
    │   │   ├── ChangeProfilePage.jsx
    │   │   ├── ChatbotPage.jsx
    │   │   ├── ContactPage.jsx
    │   │   ├── DataProtectionPage.jsx
    │   │   ├── HomePage.jsx
    │   │   ├── LandingPage.jsx
    │   │   ├── LocationPage.jsx
    │   │   ├── PrivacyPolicyPage.jsx
    │   │   ├── ProfilePage1.jsx
    │   │   ├── RegistrationPage1.jsx
    │   │   ├── RegistrationPage2.jsx
    │   │   ├── RegistrationPage3.jsx
    │   │   ├── RegistrationPage4.jsx
    │   │   ├── RegistrationPage5.jsx
    │   │   ├── RegistrationPage6.jsx
    │   │   ├── RegistrationPage7.jsx
    │   │   ├── RegistrationPage8.jsx
    │   │   ├── ReportIssuePage1.jsx
    │   │   ├── ReportIssuePage2.jsx
    │   │   ├── SchemeFormPage.jsx
    │   │   ├── SchemeResultPage.jsx
    │   │   ├── SupportPage.jsx
    │   │   ├── TermsAndConditionsPage.jsx
    │   │   ├── TrackingPage.jsx
    │   │   └── UserRightsPage.jsx
    │   ├── ProfilePageComponents
    │   │   ├── ChangePassword.jsx
    │   │   ├── ChangeProfile.jsx
    │   │   ├── DetailsCard.jsx
    │   │   ├── ProfileHeader.jsx
    │   │   ├── ProfileProgress.jsx
    │   │   └── ProfileTabs.jsx
    │   ├── ProfilePageDesignFiles
    │   │   ├── ChangePassword.module.css
    │   │   ├── ChangeProfile.module.css
    │   │   ├── DetailsCard.module.css
    │   │   ├── ProfileHeader.module.css
    │   │   ├── ProfilePage.module.css
    │   │   ├── ProfileProgress.module.css
    │   │   └── ProfileTabs.module.css
    │   ├── RegistrationComponents
    │   │   ├── ConsentComponents
    │   │   │   ├── CheckBoxAgreement.jsx
    │   │   │   ├── ConsentSection.jsx
    │   │   │   └── InputDesign.module.css
    │   │   ├── MainContent1.jsx
    │   │   ├── MainContent2.jsx
    │   │   ├── MainContent3.jsx
    │   │   ├── MainContent4.jsx
    │   │   ├── MainContent5.jsx
    │   │   ├── MainContent6.jsx
    │   │   ├── MainContent7.jsx
    │   │   ├── MainContent8.jsx
    │   │   └── Sidebar.jsx
    │   ├── RegistrationDesignFiles
    │   │   └── RegistrationPage.module.css
    │   ├── ReportIssue
    │   │   ├── CheckBox.jsx
    │   │   ├── ReportIssue.module.css
    │   │   ├── RI1.jsx
    │   │   └── RT2.jsx
    │   ├── SchemeFinder
    │   │   ├── EligibilityData.jsx
    │   │   ├── SchemeCard.jsx
    │   │   ├── SchemeFinder.module.css
    │   │   ├── SchemeForm.jsx
    │   │   ├── SchemeResult.jsx
    │   │   └── SplCategory.jsx
    │   ├── Support
    │   │   ├── ChatBody.jsx
    │   │   ├── ChatBody.module.css
    │   │   ├── Chatbot.jsx
    │   │   ├── Chatbot.module.css
    │   │   ├── Support.module.css
    │   │   ├── SupportContent.jsx
    │   │   └── SupportDetails.jsx
    │   ├── TrackRequests
    │   │   ├── Cards.module.css
    │   │   ├── IssueCards.jsx
    │   │   ├── SchemeCards.jsx
    │   │   ├── Track.jsx
    │   │   └── TrackRequests.module.css
    │   └── UserRightsAndResponsibilities
    │       ├── Header.jsx
    │       ├── ResponsibilityItem.jsx
    │       ├── RightItem.jsx
    │       ├── URR.jsx
    │       ├── UserRightsAndResponsibilities.module.css
    │       └── ViolationItem.jsx
    └── vite.config.js

```

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
