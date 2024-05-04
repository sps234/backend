import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
// import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 115%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> SwiftCart </Logo>
        <Desc>
          SwiftCart is a cutting-edge e-commerce platform designed to streamline online shopping experiences with its intuitive interface and robust features. Our platform offers a wide range of products, including clothing, accessories, electronics, and more.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Container>

            <Left>
              <ListItem>Home</ListItem>
              <ListItem>Men Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>Terms</ListItem>
            </Left>

            <Right>
              <ListItem>Cart</ListItem>
              <ListItem>Women Fashion</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Wishlist</ListItem>
            </Right>


          </Container>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> LPU , Jalandhar 144411
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 1234567890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> swiftcart@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
