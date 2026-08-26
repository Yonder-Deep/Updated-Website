import "./About.css";
import About_Hero from "../../components/About Hero/About Hero";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const advisors = [
  {
    name: "Grant Deane",
    role: "Faculty Advisor",
    image: `${import.meta.env.BASE_URL}Images/Member Photos/Grant.png`,
    description:"",
  },
];

const executives = [
  {
    name: "Vic Lopez",
    role: "President & Mechanical Lead",
    image:"",
    description: "Leads team operations, project direction, and external coordination.",
  },
  {
    name: "Ethan Dauz",
    role: "Manufacturing Lead",
    image:"",
    description: "Oversees autonomy, perception, navigation, and onboard software systems.",
  },
  {
    name: "Mozelle Monzon",
    role: "Business Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Brennon Yoo",
    role: "Software Lead",
    image: `${import.meta.env.BASE_URL}Images/Member Photos/Brennon.jpg`,
    description: "Oversees autonomy, perception, navigation, and onboard software systems.",
  },
  {
    name: "Andrew Garcia",
    role: "Software Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Jose Umana",
    role: "Electrical Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Jess",
    role: "Electrical Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Areeba Balkhi",
    role: "Electrical Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Andrew Garcia",
    role: "Software Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Andrew Garcia",
    role: "Software Lead",
    image:"",
    description: "Oversees things"
  },
];

const business = [
  {
    name: "Brooke Nguyen",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Aiden Yan",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
]

const software = [
  {
    name: "Akhil Revuri",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Noah Small",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Annya Chung",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Suhaan Khurana",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
];

const mechanical = [
  {
    name: "Axel Arrendondo",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Carlo Barocio",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Chehak Aggarwal",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Cooper Larson",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Hanxiao Shi",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Kim Tran",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Madeiline Chang",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Max Lemieux",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
   {
    name: "Melanie Harutyunyan",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
];

const electrical = [
  {
    name: "Sam Lee",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "<Myles>",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Alan",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Andrew",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Bryan",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
  {
    name: "Andrew Stewart",
    image:"",
    description: "Works on control systems, simulation, perception, and vehicle behavior.",
  },
];

function PeopleCard({ person }) {
  return (
    <article className="peopleCard">
      <img
        className="peoplePhoto"
        src={person.image}
        alt={person.name}
      />

      <div className="peopleInfo">
        <h3>{person.name}</h3>
        <p className="peopleRole">{person.role}</p>
        <p className="peopleDescription">{person.description}</p>
      </div>
    </article>
  );
}

function PeopleSection({ title, subtitle, people }) {
  return (
    <section className="peopleGroup">

      <div className="peopleGroupHeader">

        <ScrollReveal>
          <h2>{title}</h2>
        </ScrollReveal>

        <ScrollReveal delay={75}>
          <p>{subtitle}</p>
        </ScrollReveal>

      </div>

      <div className="peopleGrid">
        {people.map((person, index) => (
          <ScrollReveal
            key={index}
            delay={index * 60}
          >
            <PeopleCard person={person} />
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}

export default function About() {
  return (
    <main className="aboutPage">

      <About_Hero />

      <PeopleSection
        title="Advisors"
        subtitle="Mentors who help guide our research, engineering standards, and long-term technical direction."
        people={advisors}
      />

      <PeopleSection
        title="Executives"
        subtitle="Student leaders responsible for team direction, project planning, and cross-subteam coordination."
        people={executives}
      />

      <PeopleSection
        title="Business"
        people={business}
      />

      <PeopleSection
        title="Software"
        people={software}
      />

      <PeopleSection
        title="Mechanical"
        people={mechanical}
      />

      <PeopleSection
        title="Electrical"
        people={electrical}
      />

    </main>
  );
}