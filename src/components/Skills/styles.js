import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ViewIcon = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(0.9);
  transition: all ease 0.2s;
  margin-right: 10px;
  margin-top: 10px;
  :hover {
    transform: scale(1);
    color: #864cf0;
  }
`;

export const ViewName = styled.p`
  font-size: 18px;
`;
