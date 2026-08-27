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
    image:`${import.meta.env.BASE_URL}Images/Member Photos/Ethan.jpg`,
    description: "The Freak.",
  },
  {
    name: "Mozelle Monzon",
    role: "Business Lead",
    image:"",
    description: "Oversees things"
  },
  {
    name: "Rosslyn Farnan",
    role: "Triton RoboSub Lead",
    image:`${import.meta.env.BASE_URL}Images/Member Photos/Rosslyn.JPG`,
    description: "Leads team operations, project direction, and external coordination.",
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
];

const business = [
  {
    name: "Brooke Nguyen",
    image:"",
    description: "",
  },
  {
    name: "Aiden Yan",
    image:"",
    description: "",
  },
]

const software = [
  {
    name: "Akhil Revuri",
    image:"",
    description: "",
  },
  {
    name: "Noah Small",
    image:"",
    description: "",
  },
  {
    name: "Annya Chung",
    image:"",
    description: "",
  },
  {
    name: "Suhaan Khurana",
    image:"",
    description: "",
  },
];

const mechanical = [
  {
    name: "Axel Arrendondo",
    image:"",
    description: "",
  },
  {
    name: "Carlos Barocio",
    image:"",
    description: "",
  },
  {
    name: "Chehak Aggarwal",
    image:"",
    description: "",
  },
  {
    name: "Cooper Larson",
    image:"",
    description: "",
  },
  {
    name: "Hanxiao Shi",
    image:"",
    description: "",
  },
  {
    name: "Kim Tran",
    image:"",
    description: "",
  },
  {
    name: "Madeiline Chang",
    image:"",
    description: "",
  },
  {
    name: "Max Lemieux",
    image:"",
    description: "",
  },
   {
    name: "Melanie Harutyunyan",
    image:"",
    description: "",
  },
];

const electrical = [
  {
    name: "Sam Lee",
    image:"",
    description: "",
  },
  {
    name: "<Myles>",
    image:"",
    description: "",
  },
  {
    name: "Alan",
    image:"",
    description: "",
  },
  {
    name: "Andrew",
    image:"",
    description: "",
  },
  {
    name: "Bryan",
    image:"",
    description: "",
  },
  {
    name: "Andrew Stewart",
    image:"",
    description: "",
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