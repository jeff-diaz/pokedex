import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: white;
     @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    font-family: "Poppins", sans-serif, Helvetica, Arial, sans-serif;
    --water: #539AE2;
    --ice: #55c3ec;
    --bug: #94BC4A;
    --grass: #71C558;
    --electric: #ffd726;
    --fire: #EA7A3C;
    --fairy: #f7a3b2;
    --ghost: #846AB6;
    --psychic: #a854a8;
    --poison: #B468B7;
    --ground: #CC9F4F;
    --rock: #B2A061;
    --normal: #AAB09F;
    --flying: #7DA6DE;
    --dragon: #6A7BAF;
    --dark: #736C75;
    --fighting: #CB5F48;
    --steel: #89A1B0;
    --lightwater: #539AE220;
    --lightice: #55c3ec20;
    --lightbug: #94BC4A20;
    --lightgrass: #71C55820;
    --lightelectric: #ffd72620;
    --lightfire: #EA7A3C20;
    --lightfairy: #f7a3b220;
    --lightghost: #846AB620;
    --lightpsychic: #a854a820;
    --lightpoison: #B468B720;
    --lightground: #CC9F4F20;
    --lightrock: #B2A06120;
    --lightnormal: #AAB09F20;
    --lightflying: #7DA6DE20;
    --lightdragon: #6A7BAF20;
    --lightdark: #736C7520;
    --lightfighting: #CB5F4820;
    --lightsteel: #89A1B020;
    }
`;

export default GlobalStyle;
