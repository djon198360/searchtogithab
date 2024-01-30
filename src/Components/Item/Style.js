import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  width: 100%;
  background-color: #009ee4;
  height: 5rem;
  gap: 0.3rem;
  border-radius: 1rem;
  flex-direction: row;
  align-items: center;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s;
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  width: 100%;
  background-color: #009ee4;
  height: 5rem;
  gap: 0.3rem;
  border-radius: 1rem;
  flex-direction: row;
  align-items: center;
`;

export const AvatarBlock = styled.div`
  display: flex;
  /*  width: 100%; */
  background-color: aliceblue;
  height: 4rem;
  margin: 0.3rem 0.1rem;
  border-radius: 1rem;
  border: 0.3rem solid aliceblue;
  border-radius: 0.6rem;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  margin: 0.1rem;
  border: 2px solid #f0f8ff;
  border-radius: 50%;
  height: inherit;
  background-size: cover;
`;

export const AvatarSpan = styled.span``;
