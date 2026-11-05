import styled from "styled-components";
import { useState } from "react";
import { Button, Container } from "./ui";
import { waLink } from "../data/brand";
import { imageUrl } from "../data/assets";
const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${(p) => p.theme.colors.cream};
  color: ${(p) => p.theme.colors.ink};
  border-bottom: 3px solid ${(p) => p.theme.colors.ink};
`;
const Row = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
`;
const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  width: 70px;
  height: 70px;
  flex: 0 0 70px;
`;
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-shadow: 0 0 0 3px ${(p) => p.theme.colors.ink};
  background: ${(p) => p.theme.colors.cream};
  object-fit: contain;
  mix-blend-mode: multiply;
`;
const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  a:not([data-btn]) {
    text-decoration: none;
    font-weight: 600;
    position: relative;
  }
  a:not([data-btn])::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    width: 0;
    background: ${(p) => p.theme.colors.coral};
    transition: width 0.2s;
  }
  a:not([data-btn]):hover::after {
    width: 100%;
  }
  @media (max-width: ${(p) => p.theme.bp.lg}) {
    position: fixed;
    inset: 76px 0 0 0;
    flex-direction: column;
    justify-content: center;
    background: ${(p) => p.theme.colors.mustard};
    gap: 1.6rem;
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    transform: ${(p) => (p.$open ? "none" : "translateX(105%)")};
    transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
`;
const Burger = styled.button`
  display: none;
  background: ${(p) => p.theme.colors.ink};
  color: ${(p) => p.theme.colors.cream};
  border: 0;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
  min-height: 46px;
  padding: 0 1.2rem;
  font: inherit;
  @media (max-width: ${(p) => p.theme.bp.lg}) {
    display: block;
  }
`;
const links = [
  ["#inicio", "Início"],
  ["#historia", "Nossa história"],
  ["#cardapio", "Cardápio"],
  ["#diferenciais", "Diferenciais"],
  ["#contato", "Contato"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Bar>
      <Row>
        <Logo href="#inicio" aria-label="Chico Brownie, início">
          <LogoImage src={imageUrl("logo-chico-brownie.jpg")} alt="Chico Brownie" />
        </Logo>
        <Burger
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Fechar" : "Menu"}
        </Burger>
        <Nav id="nav" $open={open} aria-label="Principal">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Button
            data-btn="1"
            $variant="coral"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer pedido
          </Button>
        </Nav>
      </Row>
    </Bar>
  );
}
