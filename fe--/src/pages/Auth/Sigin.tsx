import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Sigin = () => {
  const navigate = useNavigate();
  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    console.log(data);
    navigate("/home");
    reset();
  });

  return (
    <div>
      <Container>
        <Main>
          <Card onSubmit={onHandleSubmit}>
            <Left>
              <Top>Login</Top>

              <Bottom>
                {/* <Hold> */}
                <InputHolder>
                  <Input placeholder="Email" {...register("email")} />
                  {errors.email && <Error>email error</Error>}
                </InputHolder>

                {/* </Hold> */}
                <InputHolder>
                  <Input placeholder="Password" {...register("password")} />
                  {errors.password && <Error>password error</Error>}
                </InputHolder>
                <Second></Second>

                <Button type="submit">Signin</Button>
                <Txt>
                  Don't have an account? <Sign to="/register">Signup</Sign>
                </Txt>
              </Bottom>
            </Left>
            <Right>
              <About>
                <Header>Welcome back, Friend</Header>
                <Parag>
                  Write down your tasks as we help you <br />
                  get them done, faster, and stressfree.
                </Parag>
              </About>

              <Acc>
                <TextAcc>
                  Don't have an account? <Sign to="/register">Signup</Sign>
                </TextAcc>
                {/* <Button1>Login</Button1> */}
              </Acc>
            </Right>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default Sigin;

const Sign = styled(NavLink)`
  color: red;
  text-decoration: none;
  font-weight: 600;
  margin-left: 5px;
`;

const Second = styled.div`
  display: flex;
`;

const Error = styled.div`
  font-size: 11px;
  color: red;
  font-weight: 500;
  display: flex;
  margin-right: 20px;
  margin-bottom: 4px;
  justify-content: flex-end;
`;

// const Btn = styled.div``

const Txt = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: white;

  span {
    color: orange;
    cursor: pointer;
    margin-left: 5px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: #fb2676;
  color: #fff;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
`;
const TextAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;
const Parag = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`;
const Header = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 11px;
`;
const Acc = styled.div`
  margin-top: 50px;
  /* display: flex;
   flex-direction: column;
   justify-content: flex-end; */
`;
const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

// const Icon = styled(AiOutlineEyeInvisible)`
//   display: flex;
//   justify-items: flex-end;
//   margin-left: -28px;
//   margin-top: 15px;
//   color: silver;
// `;

const Input = styled.input`
  height: 25px;
  width: 250px;
  margin-right: 8px;
  outline: none;
  border: 1px solid silver;
  padding-left: 7px;
  border-radius: 4px;
  background: transparent;
  color: white;

  ::placeholder {
    color: white;
  }
`;
const InputHolder = styled.div`
  /* display: flex; */
  margin-top: 20px;
`;
const Bottom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const ImageHolder = styled.div`

// `

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-top: 40px;
  margin-top: 30px;
`;
const Right = styled.div`
  width: 46%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Left = styled.div`
  width: 54%;
  min-height: 375px;
  background-color: #181a1e;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin-right: 15px;

  .your-element {
    background: linear-gradient(to right, #fb2676);
    z-index: 1;
  }

  /* border: 1px solid silver; */
  /* border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  /* background-color: green; */
`;
const Card = styled.div`
  width: 90%;
  height: 350px;
  margin: 20px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const Main = styled.div`
  width: 700px;
  height: 450px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #121519, #111417 67%, #5f0b2b);
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
  height: 98vh;
`;
