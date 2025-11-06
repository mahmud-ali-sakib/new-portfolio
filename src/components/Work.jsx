import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/1.png",
    title: "AI Photo Editing",
    projectLink: "https://pixy-ai.vercel.app/",
  },
  {
    imgSrc: "/images/2.png",
    title: "Event Ticketing System",
    projectLink: "https://ticket-x-kappa.vercel.app/",
  },
  {
    imgSrc: "/images/3.png",
    title: "3D Model Integration",
    projectLink: "https://maple-nine-delta.vercel.app/",
  },
  {
    imgSrc: "/images/5.png",
    title: "Personal Stock App",
    projectLink: "https://stock-app-puce-theta.vercel.app/",
  },
  {
    imgSrc: "/images/4.png",
    title: "Premium Cleaning Service",

    projectLink: "https://swanandsparkle.com/",
  },

  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "#",
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] ">
          {works.map(({ imgSrc, title, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
