import styled from "styled-components";
import avatar from "../../assets/avatar.png";
import { useState } from "react";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const Schema = yup.object({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState(avatar);

  const onHandleImage = (e:any) => {
    try {
      const file = e.target.files[0];
      const realImage = URL.createObjectURL(file);
      setImage(realImage);
      setAvatar(file);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleSubmit = handleSubmit(async (data) => {
    const { name, email, password, lastname } = data;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("lastname", lastname);
    formData.append("password", password);
    navigate("/signin");
    reset();
  });

  return (
    <div>
      <Container>
        <Main>
          <Card onSubmit={onHandleSubmit}>
            <Left>
              <Top>
                <Text>Register</Text>
                {/* <Img />  */}
                <ImageInput />
                <ImageHolder>
                  <Image src={image} />
                  <ImageInput id="img1" type="file" onChange={onHandleImage} />
                  <ImageLabel htmlFor="img1">Upload Image</ImageLabel>
                </ImageHolder>
              </Top>

              <Bottom>
                <Hold>
                  <InputHolder>
                    <Input placeholder="Name" {...register("name")} />
                    {errors.name && <Error>name error</Error>}
                  </InputHolder>
                  <InputHolder>
                    <Input placeholder="Last Name" {...register("lastname")} />
                    {errors.lastname && <Error>last name error</Error>}
                  </InputHolder>
                </Hold>
                <Second>
                  <InputHolder>
                    <Input placeholder="Email" {...register("email")} />
                    {errors.email && <Error>email error</Error>}
                  </InputHolder>
                  <InputHolder>
                    <Input placeholder="Password" {...register("password")} />
                    {errors.password && <Error>password error</Error>}
                  </InputHolder>
                </Second>
                <InputHolder>
                  <Input
                    placeholder="ConfirmPassword"
                    {...register("confirm")}
                  />
                  {errors.confirm && <Error>repeat password</Error>}
                </InputHolder>

                <Button type="submit">Register</Button>
                <Txt>
                  Already have an account? <Sign to="/signin">Sign in</Sign>
                </Txt>
              </Bottom>
            </Left>
            <Right>
              <About>
                <Header>Hello, Friend</Header>
                <Parag>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nobis velit natus aperiam.
                </Parag>
              </About>

              <Acc>
                <TextAcc>Don't have an account</TextAcc>
                <Button1>Login</Button1>
              </Acc>
            </Right>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default Register;

const Sign = styled(NavLink)`
text-decoration: none;
color: red;
font-weight: 600;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: white;
`;

const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Second = styled.div`
  display: flex;
`;

const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  align-items: center;
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
const Button1 = styled.button`
  width: 200px;
  height: 30px;
  border: 1px solid #fff;
  font-weight: 600;
  color: #fb2676;
  border-radius: 4px;
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
`;
const TextAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
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
  width: 110px;
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
  margin-top: 15px;
`;
const Bottom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImageLabel = styled.label`
  padding: 8px 15px;
  border-radius: 5px;
  background-color: fb2676;
  margin-top: 5px;
  background-color: #fb2676;
  color: #fff;
  margin-bottom: 10px;
`;
const ImageInput = styled.input`
  display: none;
`;

const Img = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid #52bbff;
  margin-top: -10px;
  margin-bottom: 10px;
`;
// const ImageHolder = styled.div`

// `
const Text = styled.div`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  font-size: 24px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  height: 450px;
  margin: 20px;
  display: flex;
  justify-content: center;
  margin-top
  /* align-items: center; */
`;
const Main = styled.div`
  width: 700px;
  height: 550px;
  display: flex;
  align-items: center;
  border-radius: 30px;
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

// import React, { useState } from 'react'
// import styled from 'styled-components'
// import img from "../../../assets/image.png"
// import img1 from "../../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
// import { yupResolver } from "@hookform/resolvers/yup"
// import { useForm } from "react-hook-form"
// import * as yup from "yup"
// import img2 from "../../assets/shape.svg"
// import {Link, useNavigate} from "react-router-dom"
// // import { registerAuthor } from '../../../utils/Api/authApi'

// const Register = () => {
//   const navigate = useNavigate()
//     const [image, setImage] = useState(img1)
//     const [avatar, setAvatar] = useState("")

//     const model = yup.object({
//       name: yup.string().required(),
//       email: yup.string().required(),
//       password: yup.string().required(),
//       confirm: yup.string().oneOf([yup.ref("password")])
//   })

//   const { register,
//     formState: { errors },
//     handleSubmit,
//     reset } = useForm({
//         resolver: yupResolver(model)
// })

// const onHandleImage = (e) => {
//   try {
//       const file = e.target.files[0]
//       const realImage = URL.createObjectURL(file)
//       setImage(realImage)
//       setAvatar(file)

//   } catch (error) {
//       console.log(error)
//   }
// }

// const onHandleSubmit = handleSubmit(async (data)=>{
//   const {name, email, password} = data

//   const formData = new FormData()

//   formData.append("name", name)
//   formData.append("email", email)
//   formData.append("password", password)
//   formData.append("avatar", avatar)

// //   registerAuthor(formData).then(()=>{
// //       navigate("/siginin1")

// //   })
//   reset()

// })

//   return (
//     <div>
//       <Container >
//         <Main>
//             <Right>
//                 <BackgroundImage src={img}/>

//             </Right>
//             <Left>
//                 <Card onSubmit={onHandleSubmit}>
//                 <BigText>Start Creating Articles of interest to the world</BigText>
//                 <SmallText>Begin now to explore more</SmallText>
//                 {/* Image Uploading */}
//                 <ImageHolder>
//                     <Image src={image}/>
//                     <ImageInput id='img1' type='file' onChange={onHandleImage}/>
//                     <ImageLabel htmlFor='img1' >Upload Image</ImageLabel>
//                 </ImageHolder>

//                 {/* Username */}
//                 <Div>
//                 <InputHolder>
//                 <InputTitle>UserName</InputTitle>
//                 <Input {...register("name")}/>
//                 {errors.name && <Error>Error</Error>}
//                 </InputHolder>

//                 {/* Email */}
//                 <InputHolder>
//                 <InputTitle>Email</InputTitle>
//                 <Input {...register("email")}/>
//                 {errors.email && <Error>Error</Error>}
//                 </InputHolder>

//                 {/* Password */}
//                 <InputHolder>
//                 <InputTitle>Password</InputTitle>
//                 <Input {...register("password")}/>
//                 {errors.password && <Error>Error</Error>}
//                 </InputHolder>

//                 {/* Confirm Password */}
//                 <InputHolder>
//                 <InputTitle>Confirm Password</InputTitle>
//                 <Input {...register("confirm")}/>
//                 {errors.confirm && <Error>Error</Error>}
//                 </InputHolder>
//                 </Div>
//                 <div style={{display:"flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
//                 <Button type='submit'>Sign Up</Button>
//                 </div>

//                 <TextHolder>
//                     <Text>Already have an account?</Text>
//                     <Link to="/siginin1">
//                     <Login>Login</Login>
//                     </Link>
//                 </TextHolder>
//                 </Card>
//             </Left>
//         </Main>
//       </Container>
//     </div>
//   )
// }

// export default Register
// const Error = styled.div`
// font-size: 10px;
// color: #53012e;
// font-weight: bold;
// text-align: right;
// width:90%;
// margin-bottom: 7px;
// `
// const Login = styled.div`
// font-size: 12px;
// font-weight: 600;
// color: rgb(120, 221, 175);
// margin-left: 10px;
// text-decoration: double;
// cursor: pointer;

// `
// const Text = styled.div`
// font-size: 12px;
// font-weight: 400;
// `
// const TextHolder = styled.div`
// display: flex;
// align-items: center;
// `
// const Button = styled.button`
// padding: 10px 50px;
// background: linear-gradient(rgb(120, 221, 175), rgb(140, 234, 165));
// border: 0;
// outline: none;
// font-family: Poppins;
// cursor: pointer;
// transition: all 350ms;
// color: white;
// margin: 20px 0;
// align-self: center;
// border-radius: 5px;
// :hover{
//     transform: scale(1.09);
// }

// `
// const Input = styled.input`
// flex: 1;
// border: 0;
// outline: none;
// background-color: transparent;
// caret-color: #8BE9A5;
// border-bottom: 1px solid #8BE9A5 ;
// font-family: Poppins;
// `

// const InputTitle = styled.div`
// font-size: 13px;
// color: #615f5f;
// `
// const Div = styled.div`
// width: 100%;
// display: flex;
// flex-wrap: wrap;

// `

// const InputHolder = styled.div`
// display: flex;
// width: 45%;
// height: 50px;
// flex-direction: column;
// margin: 20px 10px;
// `

// const ImageLabel = styled.label`
// padding: 5px;
// background-color: black;
// border-radius: 5px;
// color: white;
// cursor: pointer;

// `

// const ImageInput = styled.input`
// display: none;
// `

// const Image = styled.img`
// width: 80px;
// height: 80px;
// object-fit: cover;
// border-radius: 50%;
// background-color: #8BE9A5;
// margin-bottom: 5px;
// `

// const ImageHolder = styled.div`
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// `

// const SmallText = styled.div`
// font-size: 14px;
// color: #585757;
// margin: 10px 0;
// `

// const BigText = styled.div`
// font-size: 30px;
// font-weight: 700;
// line-height: 30px;
// margin-bottom: 10px;
// `

// const Card = styled.form`
// width: 100%;

// `
// const Left = styled.div`
// width: 50%;
// display: flex;
// align-items: center;
// justify-content: center;
// `

// const BackgroundImage = styled.img`
// width: 100%;
// height: 100%;
// /* object-fit: cover; */

// `

// const Right = styled.div`
// width: 50%;
// display: flex;
// height: 100%;
// overflow: hidden;
// border-radius: 10px;
// `

// const Main = styled.div`
// width: 65%;
// height: 90%;
// display: flex;
// background-color: #F1F6FD;
// border-radius: 10px;

// `
// const Container = styled.div`
// width: 100%;
// height: 100vh;
// display: flex;
// align-items: center;
// justify-content: center;
//     background: radial-gradient(rgb(74, 158, 120), rgb(115, 248, 150));

// `
