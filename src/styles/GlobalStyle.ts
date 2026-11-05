import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{box-sizing:border-box;margin:0}
  html{scroll-behavior:smooth;scroll-padding-top:84px}
  body{font-family:${p=>p.theme.fonts.body};font-size:1.05rem;background:${p=>p.theme.colors.paper};color:${p=>p.theme.colors.ink};line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  img{max-width:100%;display:block} a{color:inherit}
  ::selection{background:${p=>p.theme.colors.coral};color:#fff}
  :focus-visible{outline:3px solid ${p=>p.theme.colors.coral};outline-offset:3px}
  @media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
