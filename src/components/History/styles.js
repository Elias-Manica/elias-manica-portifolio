import styled from "styled-components";

export const Container = styled.div`
  margin-top: 130px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Tittle = styled.h3`
  font-size: 40px;
  margin-top: ${(props) => (props.isFirst ? 0 : "70")}px;
  color: #864cf0;
  font-weight: bold;
  display: flex;
  text-shadow: 4px -2px 5px rgba(255, 255, 255, 0.65);
  @media (max-width: 1080px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const TextAbout = styled.p`
  width: 50%;
`;

export const ViewApresentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 250px;
  @media (max-width: 900px) {
    height: 150px;
  }
`;
