import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  height: 80px;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(7, 7, 7, 0.75) -1px 3px 19px 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.img`
  height: 80px;
  margin-right: 20px;
`;

export const TextSection = styled.h2`
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  ::after {
    background: none repeat scroll 0 0 transparent;
    bottom: -10px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #864cf0;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  :hover::after {
    width: 100%;
    left: 0;
  }
`;

export const ButtonCV = styled.div`
  cursor: pointer;
  height: 50px;
  width: 15%;
  background-color: #864cf0;
  border-radius: 7px;
  margin-right: 20px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
