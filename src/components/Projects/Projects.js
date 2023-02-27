import ProjectCard from "../ProjectCard/ProjectCard";

import { Container } from "./styles";

import { listProjects } from "./list";

export default function Projects() {
  return (
    <>
      <Container>
        {listProjects.map((item) => (
          <ProjectCard
            title={item.title}
            link={item.link}
            description={item.description}
            repository={item.repository}
            deploy={item.deploy}
          />
        ))}
      </Container>
    </>
  );
}
