import React from "react";
import HeroSection from "./home/HeroSection";
import FeatureHighlights from "./home/FeatureHighlights";
import MissingPersonsGrid from "./dashboard/MissingPersonsGrid";
import QuickActionPanel from "./dashboard/QuickActionPanel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Handler functions for navigation and actions
  const handleReportMissingPerson = () => {
    // In a real app, this would navigate to a form page
    console.log("Navigate to report missing person form");
    // navigate('/report-missing');
  };

  const handleReportSighting = () => {
    // In a real app, this would navigate to a sighting report form
    console.log("Navigate to report sighting form");
    // navigate('/report-sighting');
  };

  const handleViewMap = () => {
    // In a real app, this would navigate to the interactive map
    console.log("Navigate to interactive map");
    // navigate('/map');
  };

  const handleViewDetails = (id: string) => {
    // In a real app, this would navigate to the person details page
    console.log(`Navigate to details for person ${id}`);
    // navigate(`/person/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Help Find Missing Loved Ones with AI Technology"
        description="Our platform leverages advanced facial recognition and geolocation technology to help reunite families with missing individuals. Join our community effort to make a difference."
        primaryCta="Report Missing Person"
        secondaryCta="Report a Sighting"
      />

      {/* Feature Highlights */}
      <FeatureHighlights
        title="Powerful Features"
        subtitle="Our platform combines cutting-edge technology with user-friendly interfaces to help locate missing persons."
      />

      {/* Quick Action Panel */}
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto">
          <QuickActionPanel
            onReportMissingPerson={handleReportMissingPerson}
            onReportSighting={handleReportSighting}
            onViewMap={handleViewMap}
          />
        </div>
      </section>

      {/* Missing Persons Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <MissingPersonsGrid
            onViewDetails={handleViewDetails}
            onReportSighting={handleReportSighting}
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Missing Person Finder</h3>
              <p className="text-slate-300">
                Leveraging AI technology to help reunite families with missing
                loved ones.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    Report Missing Person
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    Report Sighting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    Interactive Map
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-slate-300">
                  Email: contact@missingpersonfinder.org
                </li>
                <li className="text-slate-300">Phone: (555) 123-4567</li>
                <li className="text-slate-300">
                  Address: 123 Main St, Anytown, USA
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>
              © {new Date().getFullYear()} Missing Person Finder. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
