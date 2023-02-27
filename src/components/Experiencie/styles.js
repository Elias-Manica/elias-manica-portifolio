import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
`;

export const View = styled.div`
  background-color: #864cf0;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
`;

export const ViewTittle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextOffice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const TextDate = styled.p`
  font-size: 15px;
  margin-top: ${(props) => (props.isOffice ? 20 : 0)}px;
  font-weight: ${(props) => (props.isOffice ? "bold" : null)};
`;

export const Text = styled.p`
  font-size: 15px;
  margin-top: ${(props) => (props.isFirst ? 20 : 10)}px;
`;
