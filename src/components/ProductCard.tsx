import styled from "styled-components";
import { Product } from "../data/products";
import { Button } from "./ui";
import { waLink } from "../data/brand";
const tints = ["coral", "mustard", "leaf"] as const;
const Card = styled.article<{ $t: number }>`
  background: ${(p) => p.theme.colors.cream};
  border: 3px solid ${(p) => p.theme.colors.ink};
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 7px 7px 0 ${(p) => p.theme.colors.ink};
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  &:hover {
    transform: translate(-4px, -4px) rotate(-0.6deg);
    box-shadow: 12px 12px 0 ${(p) => p.theme.colors[tints[p.$t % 3]]};
  }
  &:hover img {
    transform: scale(1.08);
  }
`;
const Ph = styled.div<{ $t: number }>`
  aspect-ratio: 1/1;
  overflow: hidden;
  border-bottom: 3px solid ${(p) => p.theme.colors.ink};
  position: relative;
  background: radial-gradient(
    circle at 30% 30%,
    ${(p) => p.theme.colors[tints[p.$t % 3]]},
    ${(p) => p.theme.colors.choc}
  );
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  span {
    position: absolute;
    left: 1rem;
    top: 1rem;
    background: ${(p) => p.theme.colors.ink};
    color: ${(p) => p.theme.colors.cream};
    font-weight: 800;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
  }
`;
const Body = styled.div`
  padding: 1.4rem 1.5rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
  h3 {
    font-weight: 800;
    font-size: 1.7rem;
    letter-spacing: -0.03em;
    line-height: 1;
  }
  p {
    color: ${(p) => p.theme.colors.muted};
  }
  strong {
    font-size: 1.3rem;
  }
`;
export function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <Card $t={i}>
      <Ph $t={i}>
        {p.image && (
          <img
            src={p.image}
            alt={p.alt ?? p.name}
            loading="lazy"
            decoding="async"
            width={640}
            height={640}
          />
        )}
        <span>{p.category}</span>
      </Ph>
      <Body>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        {p.price && <strong>{p.price}</strong>}
        <Button
          style={{ marginTop: "auto", justifyContent: "center" }}
          href={waLink(`Olá! Gostaria de consultar: ${p.name}`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero esse →
        </Button>
      </Body>
    </Card>
  );
}
