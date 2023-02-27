import {
  Container,
  Image,
  Text,
  TextDate,
  TextOffice,
  View,
  ViewTittle,
} from "./styles";

import bookimg from "../../assets/images/bit-livro.png";
import angry from "../../assets/images/bit-pistola.png";

export default function Education() {
  return (
    <>
      <Container>
        <View>
          <ViewTittle>
            <TextOffice>Bootcamp de desenvolvimento web Full Stack</TextOffice>
            <TextDate>05/2022 – 03/2023</TextDate>
          </ViewTittle>
          <TextDate isOffice={true}>Driven Education</TextDate>
          <Text isFirst={true}>
            • Formação intensiva de +1.200h focadas em projetos práticos.
          </Text>
          <Text>
            • +25 projetos práticos nas tecnologias: HTML, CSS, Javascript
            (React, Node.js, Typescript e Prisma).
          </Text>
          <Text>
            • Fundamentos da engenharia de software: lógica de programação,
            algoritmos, estrutura de dados, orientação a objetos, arquitetura,
            otimização, performance e clean code.
          </Text>
          <Text>
            • Bancos de dados relacionais e não relacionais com PostgreSQL,
            MongoDB e Redis.
          </Text>
          <Text>• Princípios de DevOps com GitHub Actions, Docker e AWS.</Text>
          <Text>
            • Testes unitários, integração e ponta a ponta com Jest e SuperTest.
          </Text>
          <Text>
            • Trabalhos em equipe usando metodologias ágeis (Scrum), Git, Slack,
            Trello, Zoom, colaborando, dando e recebendo feedbacks;
          </Text>
          <Text>
            • Desenvolvimento de competências comportamentais e habilidades
            profissionais.
          </Text>
        </View>
        <Image src={bookimg} isFirst={true} />
      </Container>
      <Container>
        <Image src={angry} />
        <View>
          <ViewTittle>
            <TextOffice>
              UFRJ - Universidade Federal do Rio de Janeiro
            </TextOffice>
            <TextDate>04/2021 – 06/2022 (TRANCADA)</TextDate>
          </ViewTittle>
          <TextDate isOffice={true}>Engenharia de materiais</TextDate>
          <Text isFirst={true}>
            Tive contato com a linguagem Python, fazendo as cadeiras de
            computação 1 e computação 2
          </Text>
        </View>
      </Container>
    </>
  );
}
