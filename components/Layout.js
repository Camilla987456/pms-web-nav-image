import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ children }) => {
  
  const courses = [{"_id":"5f218803a569420432140993","title":"Project Management Certification Leading to PMP®","type":"projectManagement","moniker":"project-management-professional"},{"_id":"5f219290a569420432140a27","title":"Project Management Certification Leading to CAPM®","type":"projectManagement","moniker":"certified-associate-in-project-management"},{"_id":"5f2196eda569420432140a9c","title":"Diploma in Project Management","type":"projectManagement","moniker":"diploma-in-project-management"},{"_id":"5f219dc2a569420432140b32","title":"Agile Project Management Certification Leading to ACP®","type":"agile","moniker":"agile-certified-practitioner"},{"_id":"5f21a1eba569420432140b68","title":"Competent Scrum Master","type":"agile","moniker":"competent-scrum-master"},{"_id":"5f21a635a569420432140bd7","title":"Risk Management Certification Leading to RMP®","type":"projectManagement","moniker":"project-risk-management-professional"},{"_id":"5f49df5d15b57006d1113738","title":"Agile Scrum Fundamentals","type":"agile","moniker":"agile-scrum-fundamentals"},{"_id":"5f49e3b415b57006d1113792","title":"Lean - Kanban Based Agile Project Management","type":"agile","moniker":"lean-kanban-agile-project-management"},{"_id":"5f49efa615b57006d111381f","title":"Business Analysis Certification Leading to PBA®","type":"businessManagement","moniker":"professional-in-business-analysis"},{"_id":"5f871f0081e2e60331ca9f1e","title":"PMP® Revision Workshop (Paper Discussion)","type":"projectManagement","moniker":"pmp-revision"}];


  return (
    <React.Fragment>
      <div className="sw-page-wrapper">
        <Header courses={courses} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
