import { Container, View, ViewIcon } from "./styles";

import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";

export default function Contac({ scollToCont }) {
  return (
    <>
      <Container ref={scollToCont}>
        <View>
          <ViewIcon
            href="https://www.linkedin.com/in/eliasmanica/"
            target="_blank"
          >
            <SiLinkedin />
          </ViewIcon>
          <ViewIcon href="mailto:eliasmanica@poli.ufrj.br">
            <SiGmail />
          </ViewIcon>
          <ViewIcon
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5551991167466",
                "_blank"
              )
            }
          >
            <SiWhatsapp />
          </ViewIcon>
          <ViewIcon
            isLast={true}
            href="https://github.com/Elias-Manica"
            target="_blank"
          >
            <SiGithub />
          </ViewIcon>
        </View>
      </Container>
    </>
  );
}
