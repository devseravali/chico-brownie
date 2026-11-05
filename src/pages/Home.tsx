import styled from "styled-components";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import {
  Button,
  Container,
  Eyebrow,
  H2,
  Marquee,
  Reveal,
  Section,
  Sticker,
} from "../components/ui";
import { brand, waLink } from "../data/brand";
import { categories, products } from "../data/products";
import { imageUrl } from "../data/assets";

const Hero = styled(Section)`
  min-height: 92vh;
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.colors.cacao};
  color: ${(p) => p.theme.colors.cream};
  &::before {
    content: "";
    position: absolute;
    width: 70vmin;
    height: 70vmin;
    right: -15vmin;
    top: -10vmin;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.coral};
    opacity: 0.9;
  }
  &::after {
    content: "";
    position: absolute;
    width: 38vmin;
    height: 38vmin;
    left: -10vmin;
    bottom: -12vmin;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.mustard};
  }
`;
const HeroIn = styled(Container)`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
  @media (min-width: ${(p) => p.theme.bp.lg}) {
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(3.4rem, 11.5vw, 9.5rem);
  line-height: 0.86;
  letter-spacing: -0.05em;
  em {
    display: block;
    font-family: ${(p) => p.theme.fonts.serif};
    font-weight: 400;
    font-style: italic;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.mustard};
  }
`;
const Lead = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  max-width: 48ch;
  margin: 1.8rem 0 2.2rem;
`;
const Row = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
const Plate = styled.div`
  position: relative;
  aspect-ratio: 1/1.05;
  border-radius: 44% 56% 48% 52% / 52% 44% 56% 48%;
  border: 4px solid ${(p) => p.theme.colors.cream};
  background: linear-gradient(150deg, ${(p) => p.theme.colors.choc}, #1a0d07);
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
  transform: rotate(3deg);
  box-shadow: 12px 12px 0 ${(p) => p.theme.colors.mustard};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: absolute;
    inset: 0;
  }
  .plate-overlay {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, transparent 65%, #1a0d0766);
  }
  .st {
    position: absolute;
    right: -18px;
    bottom: -24px;
    transform: rotate(-8deg);
  }
`;
const Two = styled.div`
  display: grid;
  gap: 3.5rem;
  @media (min-width: ${(p) => p.theme.bp.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;
const Slot = styled.div<{ $c: string }>`
  aspect-ratio: 4/5;
  border-radius: 36px;
  border: 3px solid ${(p) => p.theme.colors.ink};
  box-shadow: 10px 10px 0 ${(p) => p.theme.colors.ink};
  transform: rotate(-2deg);
  background: repeating-linear-gradient(
    45deg,
    ${(p) => p.$c},
    ${(p) => p.$c} 22px,
    ${(p) => p.theme.colors.choc} 22px,
    ${(p) => p.theme.colors.choc} 44px
  );
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem;
  color: ${(p) => p.theme.colors.cream};
  font-weight: 800;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Big = styled.p`
  font-weight: 800;
  font-size: clamp(5rem, 16vw, 12rem);
  line-height: 0.8;
  letter-spacing: -0.07em;
  color: ${(p) => p.theme.colors.coral};
  -webkit-text-stroke: 3px ${(p) => p.theme.colors.ink};
`;
const Tabs = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin: 2rem 0 3rem;
`;
const Tab = styled.button<{ $on: boolean }>`
  min-height: 50px;
  padding: 0 1.5rem;
  border-radius: 999px;
  border: 3px solid ${(p) => p.theme.colors.ink};
  cursor: pointer;
  font: inherit;
  font-weight: 800;
  transition: transform 0.15s;
  background: ${(p) => (p.$on ? p.theme.colors.ink : "transparent")};
  color: ${(p) => (p.$on ? p.theme.colors.cream : p.theme.colors.ink)};
  &:hover {
    transform: rotate(-2deg) scale(1.04);
  }
`;
const Grid = styled.div`
  display: grid;
  gap: 2.2rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;
const Values = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;
const Val = styled.li<{ $bg: string; $r: number }>`
  background: ${(p) => p.$bg};
  color: ${(p) =>
    p.$bg === p.theme.colors.coral || p.$bg === p.theme.colors.leaf
      ? "#fff"
      : p.theme.colors.ink};
  border: 3px solid ${(p) => p.theme.colors.cream};
  border-radius: 30px;
  padding: 2rem;
  min-height: 250px;
  transform: rotate(${(p) => p.$r}deg);
  transition: transform 0.2s;
  &:hover {
    transform: rotate(0) scale(1.03);
  }
  small {
    font-weight: 800;
    font-size: 0.9rem;
    opacity: 0.75;
  }
  h3 {
    font-weight: 800;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin: 0.8rem 0;
  }
  p {
    font-size: 1rem;
  }
`;
const Mosaic = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: ${(p) => p.theme.bp.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  div {
    border: 3px solid ${(p) => p.theme.colors.ink};
    border-radius: 28px;
    min-height: 190px;
    box-shadow: 6px 6px 0 ${(p) => p.theme.colors.ink};
    transition: transform 0.25s;
    overflow: hidden;
  }
  div:hover {
    transform: rotate(-2deg) scale(1.03);
  }
  div:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
    min-height: 400px;
    background: ${(p) => p.theme.colors.coral};
  }
  div:nth-child(2) {
    background: ${(p) => p.theme.colors.mustard};
  }
  div:nth-child(3) {
    background: ${(p) => p.theme.colors.leaf};
  }
  div:nth-child(4) {
    background: ${(p) => p.theme.colors.choc};
  }
  div:nth-child(5) {
    grid-column: span 2;
    background: ${(p) => p.theme.colors.cacao};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Mega = styled.h2`
  font-weight: 800;
  font-size: clamp(3rem, 10vw, 8.5rem);
  line-height: 0.88;
  letter-spacing: -0.05em;
  margin-bottom: 2rem;
  em {
    font-family: ${(p) => p.theme.fonts.serif};
    font-weight: 400;
    font-style: italic;
    color: ${(p) => p.theme.colors.mustard};
  }
`;
const Foot = styled.footer`
  background: ${(p) => p.theme.colors.ink};
  color: ${(p) => p.theme.colors.cream};
  padding: 4rem 0 1.5rem;
  overflow: hidden;
  a {
    display: block;
    text-decoration: none;
    padding: 0.25rem 0;
    font-weight: 600;
  }
  a:hover {
    color: ${(p) => p.theme.colors.mustard};
  }
`;
const FootGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  @media (min-width: ${(p) => p.theme.bp.md}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;
const FooterLogo = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 20px;
  background: ${(p) => p.theme.colors.cream};
`;
const Word = styled.p`
  font-weight: 800;
  font-size: clamp(4rem, 19vw, 17rem);
  line-height: 0.8;
  letter-spacing: -0.07em;
  margin-top: 3rem;
  color: ${(p) => p.theme.colors.choc};
  white-space: nowrap;
`;

const ticker = [
  "100% vegano",
  "Feito à mão",
  "São Paulo",
  `Desde ${brand.founded}`,
  "Todo mundo cabe aqui",
];

export function Home() {
  const [cat, setCat] = useState("Todos");
  const cats = [
    "Todos",
    ...categories.filter((c) => products.some((p) => p.category === c)),
  ];
  const list =
    cat === "Todos" ? products : products.filter((p) => p.category === cat);
  const c = (n: "coral" | "mustard" | "leaf" | "choc") =>
    ({
      coral: "#ff5d73",
      mustard: "#ffc233",
      leaf: "#3fa66b",
      choc: "#4a2416",
    })[n];
  return (
    <>
      <Header />
      <main>
        <Hero id="inicio">
          <HeroIn>
            <div>
              <Title>
                Um brownie extraordinário. <em>100% vegetal.</em>
              </Title>
              <Lead>
                Feito artesanalmente, com muito sabor, personalidade e
                propósito. Descubra uma nova experiência com doces que
                conquistam todo mundo.
              </Lead>
              <Row>
                <Button href="#cardapio">Conheça nosso cardápio</Button>
                <Button
                  $variant="ghost"
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faça seu pedido
                </Button>
              </Row>
            </div>
            <Plate>
              <img
                src={imageUrl("combo.jpg")}
                alt="Seleção de brownies Chico Brownie"
              />
              <span className="plate-overlay" aria-hidden="true" />
              <div className="st">
                <Sticker text="100% vegano" size={150} />
              </div>
            </Plate>
          </HeroIn>
        </Hero>

        <Marquee items={ticker} bg="#ffc233" fg="#1a0d07" />

        <Section id="historia" $bg="cream">
          <Container>
            <Two>
              <Reveal>
                <Eyebrow>Nossa história</Eyebrow>
                <Big aria-label={`Desde ${brand.founded}`}>{brand.founded}</Big>
                <H2 style={{ marginTop: "1.5rem" }}>
                  Artesanal <em>desde o começo.</em>
                </H2>
                {/* TODO: substituir pelo texto oficial da história */}
                <p style={{ maxWidth: "50ch" }}>
                  A Chico Brownie nasceu em São Paulo, em {brand.founded}, com
                  uma convicção: doce vegano pode ter sabor, textura e qualidade
                  de sobra. Aqui, ser 100% vegetal não é limite. É identidade.
                </p>
              </Reveal>
              <Reveal>
                <Slot
                  $c="#ff5d73"
                  role="img"
                  aria-label="Brownie sabor café Chico Brownie"
                >
                  <img
                    src={imageUrl("brownie-cafe.jpg")}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </Slot>
              </Reveal>
            </Two>
          </Container>
        </Section>

        <Section id="cardapio">
          <Container>
            <Eyebrow>Cardápio</Eyebrow>
            <H2>
              Escolha o <em>seu.</em>
            </H2>
            <Tabs role="tablist" aria-label="Categorias do cardápio">
              {cats.map((k) => (
                <Tab
                  key={k}
                  role="tab"
                  aria-selected={cat === k}
                  $on={cat === k}
                  onClick={() => setCat(k)}
                >
                  {k}
                </Tab>
              ))}
            </Tabs>
            <Grid>
              {list.map((p, i) => (
                <ProductCard key={p.id} p={p} i={i} />
              ))}
            </Grid>
          </Container>
        </Section>

        <Marquee
          items={["Brownie", "Vegano", "Artesanal", "Com propósito"]}
          bg="#ff5d73"
          fg="#1a0d07"
        />

        <Section id="diferenciais" $bg="cacao">
          <Container>
            <Eyebrow>Nosso diferencial</Eyebrow>
            <H2>
              Feito com <em>ponto de vista.</em>
            </H2>
            <Values>
              <Val $bg={c("mustard")} $r={-1.5}>
                <small>01</small>
                <h3>100% vegano</h3>
                <p>
                  Sem nenhum ingrediente de origem animal. E sem abrir mão do
                  sabor.
                </p>
              </Val>
              <Val $bg={c("coral")} $r={1.2}>
                <small>02</small>
                <h3>Produção artesanal</h3>
                <p>Feito com cuidado, em São Paulo.</p>
              </Val>
              <Val $bg={c("leaf")} $r={-1}>
                <small>03</small>
                <h3>Sabor e qualidade</h3>
                <p>Para conquistar até quem nunca provou doce vegano.</p>
              </Val>
              <Val $bg="#fff1dc" $r={1.4}>
                <small>04</small>
                <h3>Inclusão e diversidade</h3>
                <p>Todo mundo é bem-vindo à mesa.</p>
              </Val>
              <Val $bg={c("mustard")} $r={-1.2}>
                <small>05</small>
                <h3>Marca com propósito</h3>
                <p>Doce com respeito e responsabilidade.</p>
              </Val>
            </Values>
          </Container>
        </Section>

        <Section $bg="mustard">
          <Container>
            <Eyebrow>Galeria</Eyebrow>
            <H2>
              Textura, cobertura, <em>recheio.</em>
            </H2>
            <Mosaic aria-label="Galeria de produtos Chico Brownie">
              <div>
                <img
                  src={imageUrl("combo.jpg")}
                  alt="Seleção de brownies de vários sabores"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <img
                  src={imageUrl("brownie-morango.jpg")}
                  alt="Brownie sabor morango"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <img
                  src={imageUrl("brownie-maca-canela.jpg")}
                  alt="Brownie sabor maçã e canela"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <img
                  src={imageUrl("cone-brigadeiro.jpg")}
                  alt="Cones de brigadeiro"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <img
                  src={imageUrl("cone-pistache.jpg")}
                  alt="Cone de pistache"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Mosaic>
          </Container>
        </Section>

        <Section>
          <Container>
            <Two>
              <Reveal>
                <Slot
                  $c="#3fa66b"
                  role="img"
                  aria-label="Cone de pistache Chico Brownie"
                >
                  <img
                    src={imageUrl("cone-pistache.jpg")}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </Slot>
              </Reveal>
              <Reveal>
                <Eyebrow>Propósito e comunidade</Eyebrow>
                <H2>
                  Doce pra <em>todo mundo.</em>
                </H2>
                {/* TODO: validar com a marca; só afirmar ações reais */}
                <p style={{ maxWidth: "50ch" }}>
                  Acreditamos em respeito, diversidade e inclusão. Por isso
                  nossa mesa é aberta: quem chega é bem-vindo, e cada brownie
                  leva esse cuidado junto.
                </p>
              </Reveal>
            </Two>
          </Container>
        </Section>

        <Section id="contato" $bg="cacao">
          <Container>
            <Eyebrow>Contato e pedidos</Eyebrow>
            <Mega>
              Bateu a vontade? <em>Pede aqui.</em>
            </Mega>
            <p style={{ maxWidth: "55ch", marginBottom: "2rem" }}>
              {brand.orderInfo}
            </p>
            <Row>
              <Button
                $variant="coral"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir pelo WhatsApp
              </Button>
              <Button
                $variant="ghost"
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @chicobrownie
              </Button>
              {brand.orderChannels.map((o) => (
                <Button
                  key={o.url}
                  $variant="ghost"
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {o.label}
                </Button>
              ))}
            </Row>
          </Container>
        </Section>
      </main>
      <Foot>
        <Container>
          <FootGrid>
            <div>
              <FooterLogo
                src={imageUrl("logo-chico-brownie.jpg")}
                alt="Chico Brownie"
                loading="lazy"
              />
              <p style={{ opacity: 0.8, maxWidth: "38ch", marginTop: ".6rem" }}>
                Brownies e doces 100% veganos. Confeitaria artesanal de São
                Paulo, desde {brand.founded}.
              </p>
            </div>
            <nav aria-label="Rodapé">
              <a href="#historia">Nossa história</a>
              <a href="#cardapio">Cardápio</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#contato">Contato</a>
            </nav>
            <div>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </FootGrid>
          <Word aria-hidden="true">chico brownie</Word>
          <p style={{ opacity: 0.6, fontSize: ".85rem", marginTop: "1rem" }}>
            © {new Date().getFullYear()} Chico Brownie. Todos os direitos
            reservados.
          </p>
        </Container>
      </Foot>
    </>
  );
}
