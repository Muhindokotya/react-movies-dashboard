import TechnologyCard from "../components/TechnologyCard";

const technologies = [
  {
    id: 1,
    name: "React",
    description: "JavaScript library for building user interfaces."
  },
  {
    id: 2,
    name: "React Router",
    description: "SPA Navigation."
  },
  {
    id: 3,
    name: "Axios",
    description: "API Requests."
  },
  {
    id: 4,
    name: "Bootstrap",
    description: "Responsive Design."
  },
  {
    id: 5,
    name: "TVMaze API",
    description: "Public TV Shows Data."
  }
];

export default function AboutPage() {
  return (
    <>
      <h1>About React Movies Dashboard</h1>

      <p>
        This application allows users to search and discover TV shows
        using data from the TVMaze API.
      </p>

      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          name={tech.name}
          description={tech.description}
        />
      ))}
    </>
  );
}