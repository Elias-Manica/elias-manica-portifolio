import {
  Container,
  Image,
  TextAbout,
  Tittle,
  ViewApresentation,
} from "./styles";

import image from "../../assets/images/bit-comp.png";
import Skills from "../Skills/Skills";
import Experiencie from "../Experiencie/Experiencie";

export default function History() {
  return (
    <>
      <Container>
        <Tittle isFirst={true}>Sobre mim</Tittle>
        <ViewApresentation>
          <Image src={image} />
          <TextAbout>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </TextAbout>
        </ViewApresentation>
        <Tittle>Skills</Tittle>
        <Skills />
        <Tittle>Experiência</Tittle>
        <Experiencie />
      </Container>
    </>
  );
}
