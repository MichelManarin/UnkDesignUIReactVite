import React from "react"
import Layout from "./components/ui/content-container";
import Sidebar from "./components/ui/sidebar";
import Navbar from "./components/ui/navbar";
import Main from "./components/ui/main";
import Alert from "./components/ui/alert";
import Card from "./components/ui/card";
import Table from "./components/ui/table";
import Form from "./components/ui/form";
import Submenu from "./components/ui/submenu";
import SectionTitle from "./components/ui/section-title";
import ContentContainer from "./components/ui/content-container";
import OnboardingCard from "./components/ui/onboarding-card";

import './App.css'

const App = () => {
  return (
    <>
      <Sidebar />
      <Main>
        <Navbar />
        <ContentContainer>
          <Alert />
          <OnboardingCard />
          <Card>
            <Table />
          </Card>
          {/* <SectionTitle />
          <Submenu></Submenu>
          <br></br>
          <Card>
            <Form />
          </Card> */}
        </ContentContainer>
      </Main>
    </>
  );
};

export default App;
