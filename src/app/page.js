"use client";
import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import { useState, useEffect } from "react";

async function fetchData(currentSection) {
  try {
    const res = await fetch(`/api/${currentSection}/get`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data && data.data;
  } catch (error) {
    console.error("Can't fetch data", error);
    return null;
  }
}

export default function Home() {
  const [homeSectionData, setHomeSectionData] = useState(null);
  const [aboutSectionData, setAboutSectionData] = useState(null);
  const [experienceSectionData, setExperienceSectionData] = useState(null);
  const [educationSectionData, setEducationSectionData] = useState(null);
  const [projectSectionData, setProjectSectionData] = useState(null);

  useEffect(() => {
    async function loadAllData() {
      const homeData = await fetchData("home");
      const aboutData = await fetchData("about");
      const experienceData = await fetchData("experience");
      const educationData = await fetchData("education");
      const projectData = await fetchData("project");

      setHomeSectionData(homeData);
      setAboutSectionData(aboutData);
      setExperienceSectionData(experienceData);
      setEducationSectionData(educationData);
      setProjectSectionData(projectData);

       console.log(homeSectionData);
      console.log(aboutSectionData);
      console.log(experienceSectionData);
      console.log(educationSectionData);
      console.log(projectSectionData);
    }

    loadAllData();
  }, []);

  if (
    !homeSectionData ||
    !aboutSectionData ||
    !experienceSectionData ||
    !educationSectionData ||
    !projectSectionData
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
