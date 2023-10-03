import styled from "styled-components";
import UpdateBox from "./UpdateBox";

export const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 5px 5px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
  }
  background: white;
  border-radius: 10px;
  overflow: auto;
`;

export default function UpdatesGrid({updates}) {
  return (
    <StyledProductsGrid>
       {updates?.length > 0 && updates.map(update => (
          <UpdateBox key={update._id} {...update} />
        ))}
    </StyledProductsGrid>
  )
}
