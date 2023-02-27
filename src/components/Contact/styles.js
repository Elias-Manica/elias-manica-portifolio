import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
`;

export const View = styled.div`
  border-width: 1px;
  border-color: #864cf0;
  border-style: solid;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
`;

export const ViewIcon = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  margin-right: ${(props) => (props.isLast ? 0 : 50)}px;
  color: #fff;
  :hover {
    transform: scale(1);
    color: #864cf0;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
    font-size: 25px;
    margin-right: ${(props) => (props.isLast ? 0 : 30)}px;
  }
`;
