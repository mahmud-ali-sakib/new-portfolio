import SkillCard from "./SkillCard";

const skillItem = [
  
  {
    imgSrc: '/images/html5.svg',
    label: 'HTML',
    
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    
  },
   {
    imgSrc: '/images/typescript.svg',
    label: 'Typescript',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'Node Js',
    
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'Express Js',
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'Mongo DB',
  },
 
  {
    imgSrc: '/images/nextjs.svg',
    label: 'Next Js',
  },
  {
    imgSrc: '/images/nestjs.svg',
    label: 'Nest Js',
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    
  },
]




const Skill = () => {



  return (
  <section className="section">
    <div className="container">
      <h2 className="headline-2 reveal-up">
        Essential Tools I use
      </h2>

      <p className="text-zinc-400 mt-3 mb-8 max-w-[50xh] ">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
      </p>

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {
          skillItem.map(({imgSrc, label, desc}, key) => (
            <SkillCard 
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            classes="reveal-up"
            />
          ))
        }
      </div>
    </div>
  </section>
  );
};

export default Skill;