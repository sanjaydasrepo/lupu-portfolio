import React, { useState } from "react";
import ProfileSection from "../components/ProfileSection";
import NavBar from "../components/Navbar";
import HomeSection from "../components/ContactSection";
import WorkSection from "../components/WorkSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "resume":
        return <ResumeSection />;
      case "work":
        return <WorkSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex font-sans border">
      <ProfileSection />
      <div className="w-3/5 ml-4">
        <div className="border flex justify-end">
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="bg-white rounded-xl mt-4 p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default LandingPage;
