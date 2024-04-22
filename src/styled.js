import styled from "styled-components";
const checkSize = (prop) => {
  return (
    {
      sm: "100px",
      md: "150px",
      lg: "200px",
    }[prop.type] || "md"
  );
};
export const Box = styled.div`
  padding: 15px 30px;
  margin: 50px;
  height: ${checkSize};
  width: ${checkSize};
  border: 1px solid pink;
`;
