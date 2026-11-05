import styled, { css, keyframes } from "styled-components";
import { useEffect, useRef, useState, ReactNode } from "react";
const rise = keyframes`from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}`;
const spin = keyframes`to{transform:rotate(360deg)}`;
const slide = keyframes`to{transform:translateX(-50%)}`;
export const Container = styled.div`
  width: min(1240px, 100% - 2.5rem);
  margin-inline: auto;
`;
export const Section = styled.section<{
  $bg?: "cacao" | "cream" | "coral" | "mustard";
}>`
  position: relative;
  padding: clamp(4.5rem, 10vw, 8rem) 0;
  overflow: hidden;
  ${(p) =>
    p.$bg &&
    css`
      background: ${p.theme.colors[p.$bg]};
      color: ${p.$bg === "cacao" ? p.theme.colors.cream : p.theme.colors.ink};
    `}
`;
export const Eyebrow = styled.p`
  display: inline-block;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 2px solid currentColor;
  margin-bottom: 1.2rem;
`;
export const H2 = styled.h2`
  font-weight: 800;
  font-size: clamp(2.6rem, 7vw, 5.6rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  margin-bottom: 1.4rem;
  em {
    font-family: ${(p) => p.theme.fonts.serif};
    font-weight: 400;
    font-style: italic;
    letter-spacing: -0.01em;
  }
`;
export const Button = styled.a<{ $variant?: "solid" | "ghost" | "coral" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 54px;
  padding: 0 1.9rem;
  border-radius: 999px;
  font-weight: 800;
  font-size: 1.05rem;
  text-decoration: none;
  cursor: pointer;
  border: 2.5px solid ${(p) => p.theme.colors.ink};
  box-shadow: 4px 4px 0 ${(p) => p.theme.colors.ink};
  transition:
    transform 0.15s,
    box-shadow 0.15s;
  ${(p) =>
    p.$variant === "ghost"
      ? css`
          background: transparent;
          color: inherit;
          border-color: currentColor;
          box-shadow: 4px 4px 0 currentColor;
        `
      : p.$variant === "coral"
        ? css`
            background: ${p.theme.colors.coral};
            color: #fff;
          `
        : css`
            background: ${p.theme.colors.mustard};
            color: ${p.theme.colors.ink};
          `}
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 ${(p) => p.theme.colors.ink};
  }
  &:active {
    transform: translate(3px, 3px);
    box-shadow: 1px 1px 0 ${(p) => p.theme.colors.ink};
  }
`;
const Wrap = styled.div<{ $on: boolean }>`
  opacity: 0;
  ${(p) =>
    p.$on &&
    css`
      animation: ${rise} 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
    `}
`;
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Wrap ref={ref} $on={on}>
      {children}
    </Wrap>
  );
}
const Band = styled.div<{ $bg: string; $fg: string }>`
  background: ${(p) => p.$bg};
  color: ${(p) => p.$fg};
  overflow: hidden;
  white-space: nowrap;
  border-block: 3px solid ${(p) => p.theme.colors.ink};
  padding: 1rem 0;
`;
const Track = styled.div`
  display: inline-flex;
  animation: ${slide} 28s linear infinite;
  span {
    font-weight: 800;
    font-size: clamp(1.3rem, 3vw, 2rem);
    letter-spacing: -0.02em;
    padding-right: 2.5rem;
    text-transform: uppercase;
  }
  span::after {
    content: "✺";
    margin-left: 2.5rem;
  }
`;
export function Marquee({
  items,
  bg,
  fg,
}: {
  items: string[];
  bg: string;
  fg: string;
}) {
  const row = [...items, ...items];
  return (
    <Band $bg={bg} $fg={fg} aria-hidden="true">
      <Track>
        {[...row, ...row].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </Track>
    </Band>
  );
}
const Badge = styled.div<{ $size?: number }>`
  position: relative;
  width: ${(p) => p.$size ?? 150}px;
  height: ${(p) => p.$size ?? 150}px;
  display: grid;
  place-items: center;
  svg {
    position: absolute;
    inset: 0;
    animation: ${spin} 18s linear infinite;
  }
  b {
    font-weight: 800;
    text-align: center;
    line-height: 1;
    font-size: 1.5rem;
    color: ${(p) => p.theme.colors.ink};
  }
`;
export function Sticker({ text, size = 150 }: { text: string; size?: number }) {
  return (
    <Badge $size={size} role="img" aria-label={text}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path
          d="M50 2l9 8 12-3 5 11 12 1 1 12 11 6-4 12 8 9-9 8 3 12-12 4-3 12-12-1-8 10-10-7-11 6-6-11-12-2 0-12-11-7 5-11-7-10 10-8-2-12 12-4 2-12 12 2z"
          fill="#ffc233"
          stroke="#1a0d07"
          strokeWidth="2"
        />
      </svg>
      <b>{text}</b>
    </Badge>
  );
}
