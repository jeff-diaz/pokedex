import styled from "styled-components";
import { getPokemonImage } from "../../../Utils/helpers";
import Name from "./About/Name";
import Types from "./Types";
import CloseButton from "../Icons/CloseButton";

function Artwork({ data }) {
  const color = data.types[0].type.name;

  return (
    <Wrapper color={color}>
      <Header>
        <CloseButton />
        <div></div>
        <Types types={data.types} />
      </Header>
      <Name data={data} />
      <img alt="" src={getPokemonImage(data.id)} />
    </Wrapper>
  );
}
const Header = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr auto;
  width: 100%;
  padding: 10px 10px 0px 10px;
  margin: 0;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  background-color: var(--${(props) => props.color});
  width: 100%;
  display: grid;

  img {
    max-width: 300px;
    margin: 0 auto;
    @media (max-width: 768px) {
      max-width: 250px;
    }
  }
`;

export default Artwork;
