import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleSideBar } from "./../modules/sideBar";

const Nav = styled.nav<{ open: boolean }>`
  height: calc(100vh - 60px);
  top: 80px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  position: fixed;
  z-index: 3;
  padding: 20px;
  background: ${({ theme }) => theme.background};
  transition: 0.25s ease;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  padding: 15px 20px;
  width: 100%;
  letter-spacing: 1.4px;
  cursor: pointer;
  display: block;
  color: ${({ theme }) => theme.text}
`;


interface Props {
  open: boolean;
};

const SideBar = ({ open }: Props) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(handleSideBar());

  return (
    <Nav open={open}>
      <NavItem to="/" onClick={onClick}>
        홈으로
      </NavItem>
      <NavItem to="/VOCs" onClick={onClick}>
        2021 여름 생리용품
      </NavItem>
    </Nav>
  );
};

export default SideBar;
