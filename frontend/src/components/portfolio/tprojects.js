import amiwrite from '../../assests/AmIWrite/AmIWrite.png';
import pbix from '../../assests/pbix/Powerbi.pdf';
import pbiximg from '../../assests/pbix/PowerBI.png';
export const tProjects = [
    {
      name: "Am I Write?",
      description: "In partnership with Society Against Family Violence, an AI-enabled mobile application for early detection of youth at risk.",
      category: ["AI, Mobile Development, Cloud"],
      addition: "This is currently still in development, hence no demo is available.",
      github: "https://github.com/ShermainePeh08/portfolio/blob/master/frontend/src/assests/AmIWrite/README.md",
      // link: "",
      img: amiwrite,
    },
    {
      name: "Expense Tracker",
      description: "AI-Powered: Traffic Management in Terminal Yard With Optimum Route Algorithm & Traffic Delay Prediction.",
      category: ["Full Stack Development"],
      github: "",
      link: "https://www.github.com",
      // img: "",
    },
    {
      name: "Data Analytics on Singapore's Living",
      description: 'Using PowerBI, Created Dashboard and Visual Analysis on hypothesis of "Singapore is a good place to live or work in."',
      category: ["Data Analytics"],
      github: "https://github.com/ShermainePeh08/PowerBIDataAnalytics#readme",
      link: pbix,
      img: pbiximg,
    }
];