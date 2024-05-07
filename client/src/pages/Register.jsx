import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { Checkbox } from "@material-ui/core";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/perspective-exterior-nobody-empty-box_1258-260.jpg?t=st=1715036361~exp=1715039961~hmac=33a4919701e76b1e008d230763d62f5c7bd94bbef0bcecefaace8537cba04454&w=1060")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const Register = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!agreement) {
      alert("You need to agree to the terms!");
      return;
    }
    register(dispatch, { name, lastName, username, email, password });
  };


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name" onChange={e => setName(e.target.value)} />
          <Input placeholder="last name" onChange={e => setLastName(e.target.value)} />
          <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
          <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
          <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
          <Input placeholder="confirm password" type="password" onChange={e => setConfirmPassword(e.target.value)} />
          <Agreement>
            <Checkbox type="checkbox" onChange={e => setAgreement(e.target.checked)} />
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" disabled={isFetching}>CREATE</Button>
          {error && <Error>{error}</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
