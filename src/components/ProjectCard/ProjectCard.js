import {
  Container,
  ContainerIcon,
  Name,
  TextDescription,
  ViewIcon,
  ViewVideo,
} from "./styles";

import { SiGithub } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";

export default function ProjectCard({
  title,
  link,
  description,
  repository,
  deploy,
}) {
  return (
    <>
      <Container>
        <Name>{title}</Name>
        <ViewVideo src={link} />
        <TextDescription>{description}</TextDescription>
        <ContainerIcon>
          <ViewIcon href={repository} target="_blank">
            <SiGithub />
          </ViewIcon>
          <ViewIcon href={deploy} target="_blank">
            <TfiWorld />
          </ViewIcon>
        </ContainerIcon>
      </Container>
    </>
  );
}
