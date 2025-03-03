import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import t2s from "@/assets/images/t2s.png";

export const portfolioProjects = [
    {
      company: "InventorEasy",
      year: "2025",
      title: "Java based inventory system (in progress)",
      results: [
        { title: "Open Source" },
        { title: "Real-time inventory monitoring" },
        { title: "Intuitive UI" },
      ],
      link: "https://github.com/asd1495/text2speech/tree/main",
      image: darkSaasLandingPage,
    },
    {
      company: "text2speech",
      year: "2025",
      title: "Convert your texts to speech",
      results: [
        { title: "Java based and Open source" },
        { title: "Simple but effective GUI" },
        { title: "Made just for fun!" },
      ],
      link: "",
      image: t2s,
    },
    {
      company: "Backlog App",
      year: "2025",
      title: "Keep track of your backlog (in progress)",
      results: [
        { title: "Curated game library" },
        { title: "Personalized play metrics" },
        { title: "Customizable game queue" },
      ],
      link: "",
      image: aiStartupLandingPage,
    },
  ];