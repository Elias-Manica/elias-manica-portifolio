import Typewriter from "typewriter-effect";

import {
  Container,
  HelloText,
  Image,
  TextDescription,
  TextName,
  ViewName,
  ViewText,
} from "./styles";

import studing from "../../assets/images/bit-estudando.png";

export default function Apresentation() {
  return (
    <>
      <Container>
        <ViewText>
          <ViewName>
            <HelloText>Olá,</HelloText>
            <p>eu sou o</p>
          </ViewName>
          <TextName>
            Elias Manica
            <Typewriter
              options={{
                strings: [""],
                autoStart: true,
                loop: true,
              }}
            />
          </TextName>
          <TextDescription>
            <Typewriter
              options={{
                strings: ["Desenvolvedor Full Stack 😎", "Eterno estudante 🤓"],
                autoStart: true,
                loop: true,
              }}
            />
          </TextDescription>
        </ViewText>
        <Image src={studing} />
      </Container>
    </>
  );
}
