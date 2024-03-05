import React from "react";
import Layout from "../components/layouts/layout";
import AboutSection from "../components/about_section";
import ExperienceSection from "../components/experience_section";
import ProjectsSection from "../components/projects_section";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <Layout>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </Layout>
  );
};

export const Head = () => <title>Geraldine Ragsac | Fullstack Engineer</title>;

export default IndexPage;
