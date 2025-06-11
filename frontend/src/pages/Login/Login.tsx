import { useNavigate } from "react-router";
import { FormDiv, Input, LeftDiv, LoginDiv, MainDiv, PasswordInputContainer, PersonImg, RightDiv, SendButton, ViewPasswordButton } from "./styles";
import { IoEyeOutline } from "react-icons/io5";

export default function Login() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Dashboard');
  };

  return (
    <MainDiv>
      <LoginDiv>
        <RightDiv>
          <FormDiv>
            <div>
              <img src="../src/assets/tropaDigital.png" alt="Logo Tropa Digital"/>
            </div>
            <div>
              <h1 style={{color:"#CC6237", fontSize: "26px", lineHeight: "15px", fontWeight: "700", marginBottom: 0}}>Bem-vindo de volta</h1>
              <span style={{color:"#2A4D8E80", fontSize: "13px", lineHeight: "15px", marginTop: 0}}>Entre com sua conta para acessar o painel</span>
            </div>
            <div>
              <p style={{color:"#CC6237", fontSize: "13px", lineHeight: "15px", fontWeight: "600", marginBottom: 0}}>E-mail</p>
              <Input type="text" name="" id="" placeholder="seunome@seuservidor.com"/>
              <p style={{color:"#CC6237", fontSize: "13px", lineHeight: "15px", fontWeight: "600", marginBottom: 0}}>Senha</p>
              <PasswordInputContainer>
                <Input type="password" placeholder="Digite aqui"/>
                <ViewPasswordButton>
                  <IoEyeOutline size="1.625rem" color="#CC6237"/>
                </ViewPasswordButton>
              </PasswordInputContainer>
              <SendButton onClick={handleClick}>Enviar</SendButton>
            </div>
          </FormDiv>
        </RightDiv>
        <LeftDiv>
            <PersonImg src="../src/assets/loginPerson.png" alt="Logo Tropa Digital" />
        </LeftDiv>
      </LoginDiv>
    </MainDiv>
  ) 
}