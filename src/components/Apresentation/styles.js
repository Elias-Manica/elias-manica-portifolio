import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ViewText = styled.div``;

export const ViewName = styled.div`
  display: flex;
  align-items: flex-end;
  p {
    align-items: flex-end;
    font-size: 40px;
    margin-left: 30px;
    margin-bottom: 10px;
    @media (max-width: 900px) {
      margin-left: 10px;
      margin-bottom: 5px;
      font-size: 15px;
    }
  }
`;

export const HelloText = styled.h6`
  font-size: 80px;
  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

export const TextName = styled.h3`
  font-size: 100px;
  color: #864cf0;
  font-weight: bold;
  display: flex;
  @media (max-width: 1080px) {
    font-size: 70px;
  }
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

export const TextDescription = styled.h2`
  font-size: 25px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  margin-left: 100px;
  height: 350px;
  @media (max-width: 900px) {
    margin-left: 0px;
    height: 250px;
    margin-top: 50px;
  }
`;
