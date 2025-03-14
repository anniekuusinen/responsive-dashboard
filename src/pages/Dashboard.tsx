import React from "react";
import styles from "./Dashboard.module.scss";
import PerformanceCard from "../components/PerformanceCard";
import CampainPerformance from "../components/CampaignPerformance";
import ScheduleCampaign from "../components/ScheduleCampaign";
import TopNav from "../components/navigations/TopNav";
import SideBar from "../components/navigations/SideBar";

const Dashboard = () => {
  const mockData = [
    { label: "Delivered", value: "42,642", change: "+0.02%", positive: true },
    { label: "Opened", value: "26,843", change: "-0.02%", positive: false },
    { label: "Clicked", value: "525,753", change: "+0.02%", positive: true },
    { label: "Subscribe", value: "425", change: "+0.02%", positive: true },
  ];
  return (
    <div className={styles.dashboardContainer}>
      <SideBar></SideBar>
      <div className={styles.mainContent}>
        <TopNav></TopNav>
        <h1>Dashboard</h1>
        <p>Welcome, let’s dive into your personalized setup guide.</p>

        <PerformanceCard data={mockData}></PerformanceCard>
        <CampainPerformance></CampainPerformance>
        <ScheduleCampaign></ScheduleCampaign>
      </div>
    </div>
  );
};

export default Dashboard;
