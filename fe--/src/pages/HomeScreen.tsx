import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import Input from "react-input-emoji";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const HomeScreen = () => {
  const [task, setTask] = useState("");
  const [parent] = useAutoAnimate();
  const onHandleChange = (data: any) => {
    data.push(task);
  };

  return (
    <>
      <Container>
        <Main>
          <Left>
            <Input
              value={task}
              onchange={setTask}
              onEnter={onHandleChange}
              placeholder="Enter a task to be executed"
            />
          </Left>
          <Right>
            <RightMain>
              <Wrapp>
                <div ref={parent}>
                  <Card>
                    <Profile>
                      <Img />
                      <Details>
                        <Name>Kenny</Name>
                        <Task>TaskBar</Task>
                      </Details>
                      <Time>12pm</Time>
                    </Profile>

                    <Button>
                      <Icon />
                    </Button>
                  </Card>
                </div>
              </Wrapp>
            </RightMain>
          </Right>
        </Main>
      </Container>
    </>
  );
};

export default HomeScreen;

const Wrapp = styled.div`
  margin-left: 50px;
  width: 800px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* background-color: red; */
`;

// const Input = styled.input`
//   height: 50px;
//   width: 300px;
//   border-radius: 50px;
//   margin-top: 150px;
//   border: 1px solid silver;
//   padding-left: 5px;
//   outline: 1px none;
// `;

const Icon = styled(MdDelete)`
  font-size: 23px;
  color: #000;
  margin-top: 25px;
  cursor: pointer;
`;
const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
  margin-right: 5px;
  color: #fff;
`;
const Time = styled.div`
  font-size: 12px;
  position: absolute;
  font-weight: 600;
  margin-top: 180px;
  margin-left: 100px;
`;
const Task = styled.div`
  margin-bottom: 20px;
  font-size: 13px;
  width: 250px;
  height: 80px;
`;
const Details = styled.div`
  padding-left: 7px;
  margin-top: 20px;
  /* display: flex; */
  /* align-items: center;
  flex-direction: column; */
  /* background-color: red; */
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 4px;
  margin-bottom: 3px;
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid silver;
`;
const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 35px;
  padding-left: 10px;
  /* color: white; */
`;
const Card = styled.div`
  width: 350px;
  height: 180px;
  border: 1px solid silver;
  border-radius: 4px;
  margin-top: 40px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  /* color: black; */
  /* background-color: rgba(212, 23, 102, 0.5); */
  border: 1px solid silver;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(71, 14, 38, 0.2);
  /* align-items: center; */
`;
const RightMain = styled.div`
  margin-top: 10px;
  height: auto;
  width: 70%;
  margin-left: 425px;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  height: 150vh;
  width: 100%;
  font-size: 40px;
  display: flex;
`;

const Left = styled.div`
  height: 100vh;
  position: fixed;
  width: 30%;
  display: flex;
  align-items: center;
  border-right: 2px solid black;
`;

const Main = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
