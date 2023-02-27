import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const View = styled.div`
  background-color: #864cf0;
  width: 50%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
`;

export const ViewTittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextOffice = styled.p`
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const TextDate = styled.p`
  font-size: 13px;
  margin-top: ${(props) => (props.isOffice ? 20 : 0)}px;
  font-weight: ${(props) => (props.isOffice ? "bold" : null)};
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: ${(props) => (props.isFirst ? 20 : 10)}px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  height: ${(props) => (props.isFirst ? 250 : 200)}px;
`;
