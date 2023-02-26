import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ViewText = styled.div``;

export const ViewName = styled.div`
  display: flex;
  align-items: flex-end;
  h1 {
    font-size: 80px;
  }
  p {
    align-items: flex-end;
    font-size: 40px;
    margin-left: 30px;
    margin-bottom: 10px;
  }
`;

export const TextName = styled.h1`
  font-size: 100px;
  color: #864cf0;
  font-weight: bold;
  display: flex;
`;

export const TextDescription = styled.h2`
  font-size: 25px;
`;

export const Image = styled.img`
  margin-left: 100px;
  height: 350px;
`;
