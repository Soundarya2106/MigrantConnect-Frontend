"use client";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./Pages/LandingPage";
import HomePageContainer from "./Pages/HomePage";
import RegistrationPage1 from "./Pages/RegistrationPage1";
import RegistrationPage2 from "./Pages/RegistrationPage2";
import RegistrationPage3 from "./Pages/RegistrationPage3";
import RegistrationPage4 from "./Pages/RegistrationPage4";
import RegistrationPage5 from "./Pages/RegistrationPage5";
import RegistrationPage6 from "./Pages/RegistrationPage6";
import RegistrationPage7 from "./Pages/RegistrationPage7";
import RegistrationPage8 from "./Pages/RegistrationPage8";
import ProfilePage1 from "./Pages/ProfilePage1";
import UserRightsPage from "./Pages/UserRightsPage";
import DataProtectionPage from "./Pages/DataProtectionPage";
import TandCPage from "./Pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ReportIssuePage1 from "./Pages/ReportIssuePage1";
import ReportIssuePage2 from "./Pages/ReportIssuePage2";
import SchemeFormPage from "./Pages/SchemeFormPage";
import SchemeResultPage from "./Pages/SchemeResultPage";
import TrackingPage from "./Pages/TrackingPage";
import SupportPage from "./Pages/SupportPage";
import ChatbotPage from "./Pages/ChatbotPage";
import ChangePasswordPage from "./Pages/ChangePasswordPage";
import ChangeProfilePage from "./Pages/ChangeProfilePage";
import LocationPage from "./Pages/LocationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/homepageContainer" element={<HomePageContainer />} />
        <Route path="/registrationpage1" element={<RegistrationPage1 />} />
        <Route path="/registrationpage2" element={<RegistrationPage2 />} />
        <Route path="/registrationpage3" element={<RegistrationPage3 />} />
        <Route path="/registrationpage4" element={<RegistrationPage4 />} />
        <Route path="/registrationpage5" element={<RegistrationPage5 />} />
        <Route path="/registrationpage6" element={<RegistrationPage6 />} />
        <Route path="/registrationpage7" element={<RegistrationPage7 />} />
        <Route path="/registrationpage8" element={<RegistrationPage8 />} />
        <Route path="/profilepage1" element={<ProfilePage1 />} />
        <Route path="/userrightspage" element={<UserRightsPage />} />
        <Route path="/dataprotectionpage" element={<DataProtectionPage />} />
        <Route path="/tandcpage" element={<TandCPage />} />
        <Route path="/privacypolicypage" element={<PrivacyPolicyPage/>} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/reportpage" element={<ReportIssuePage1 />} />
        <Route path="/reportpage2" element={<ReportIssuePage2 />} />
        <Route path="/schemeform" element={<SchemeFormPage />} />
        <Route path="/schemeresult" element={<SchemeResultPage />} />
        <Route path="/trackpage" element={<TrackingPage />} />
        <Route path="/supportpage" element={<SupportPage />} />
        <Route path="/chatbotpage" element={<ChatbotPage />} />
        <Route path="/changepasswordpage" element={<ChangePasswordPage/>} />
        <Route path="/changeprofilepage" element={<ChangeProfilePage/>} />
        <Route path="/locationpage" element={<LocationPage/>} />
      </Routes>
    </Router>
  );
};

export default App;