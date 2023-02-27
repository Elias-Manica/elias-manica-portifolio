import styled from "styled-components";

export const Container = styled.div`
  border-width: 1px;
  border-color: #864cf0;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  margin-right: 20px;
  margin-top: 20px;
  @media (max-width: 900px) {
    margin-right: 0px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #864cf0;
  text-shadow: 4px -2px 5px rgba(255, 255, 255, 0.65);
`;

export const ViewVideo = styled.iframe`
  width: 450px;
  height: 300px;

  @media (max-width: 900px) {
    width: 100%;
    height: 150px;
  }
`;

export const TextDescription = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
`;

export const ViewIcon = styled.a`
  height: 50px;
  width: 50px;
  border-width: 1px;
  border-color: #864cf0;
  border-style: solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 15px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  margin-right: 10px;
  color: #fff;
  :hover {
    transform: scale(1);
    color: #864cf0;
    cursor: pointer;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
`;
