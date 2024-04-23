import styled from "styled-components";
import { useContext } from "react";
import { StudentContext } from ".";
const Box = styled.div.attrs((props) => {
  console.log(props);
})`
  padding: 15px 30px;
  margin: 50px;
  height: 200px;
  width: 200px;
  border: 1px solid pink;
`;
const StudentsList = (props) => {
  const List = useContext(StudentContext);
  return <Box>{List}</Box>;
};
export { StudentsList };
