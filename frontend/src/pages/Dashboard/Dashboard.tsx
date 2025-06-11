import { ButtonNext, ButtonPages, IconWrapper, ImageContainer, InsertButton, Label, LeftMenu, Line, MainDiv, MenuItem, PaginationDiv, RightMenu, SearchIcon, SearchInput, SearchWrapper, TableDiv, UserInfoContainer, VerticalLine } from "./styles";
import { RxDashboard } from "react-icons/rx";
import { BsCalendar4Week } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { FiPlus } from 'react-icons/fi';
import { useState } from "react";
import { mockData, type MenuItemType, type UserInfoType } from "../../interface/Interfaces";
import Table from "../../components/Table/Table";

export default function Dashboard() {
  const [activeIndexTop, setActiveIndexTop] = useState(0);
  
  const itemsTop: MenuItemType[] = [
    { label: 'Dashboard', icon: <RxDashboard />, onClick: () => setActiveIndexTop(0), active: activeIndexTop === 0 },
    { label: 'Eventos', icon: <BsCalendar4Week />, onClick: () => setActiveIndexTop(1), active: activeIndexTop === 1 },
    { label: 'Equipes', icon: <RiTeamLine />, onClick: () => setActiveIndexTop(2), active: activeIndexTop === 2 },
    { label: 'Inscrições', icon: <AiOutlineTeam />, onClick: () => setActiveIndexTop(3), active: activeIndexTop === 3 }
  ];

  const itemsBottom: MenuItemType[] = [
    { label: 'Alterar Dados', icon: <CgProfile />, onClick: () => console.log('Alterar Dados') },
    { label: 'Sair', icon: <BiLogOutCircle />, onClick: () => console.log('Sair') },
  ];

  const user: UserInfoType = {
    name: 'Kaique Steck', 
    role: 'Administrador',
    profilePhoto: '/assets/profilePhoto.png'
  };

  return (
    <MainDiv>
      <LeftMenu>
        <div style={{display: "flex", flexDirection: "column"}}>
          <img src='/assets/tropaDigital.png' alt="" style={{width: "10.0625rem", height: "1.5625rem", marginBottom: "1rem"}} />
          <span style={{fontSize: "0.5625rem",  fontWeight: "800", color: "#A3A3A3", marginBottom: '0.5rem', marginLeft: "0.8rem", letterSpacing: "0.2rem"}}>MENU</span>
          <div style={{gap: "0.3rem", display: "flex", flexDirection: "column", height: "2rem"}}>
            {itemsTop.map((item, index) => (
              <MenuItem key={index} onClick={item.onClick} active={item.active}>
                <IconWrapper>{item.icon}</IconWrapper>
                <Label>{item.label}</Label>
              </MenuItem>
            ))}
          </div>
        </div>
        <div style={{minHeight: "10rem", color: "black"}}>
            <Line />
            <UserInfoContainer>
              <ImageContainer>
                <img src={user.profilePhoto} alt="Profile Photo" />
              </ImageContainer>
              <div style={{display: "flex", flexDirection: "column", gap: "0.2rem"}}>
                <span>{user.name}</span>
                <a>{user.role}</a>
              </div>
            </UserInfoContainer>
            <div style={{gap: "0.3rem", display: "flex", flexDirection: "column", height: "2rem"}}>
              {itemsBottom.map((item, index) => (
                <MenuItem key={index} onClick={item.onClick} active={item.active}>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <Label>{item.label}</Label>
                </MenuItem>
              ))}
          </div>
        </div>

      </LeftMenu>
      <VerticalLine />

      <RightMenu>
        <span>Bem vindo de volta, <strong>{user.name}</strong></span>

        <h3>Todos eventos</h3>

        <TableDiv>
          <SearchWrapper>
            <div>
              <SearchIcon />
              <SearchInput placeholder="Buscar eventos" />
            </div>
            <InsertButton primary>
            <FiPlus /> Inserir novo
            </InsertButton>
          </SearchWrapper>
          <Table data={mockData}/>
          <PaginationDiv>
            <ButtonNext>
              Anterior
            </ButtonNext>
            <ButtonPages  active={true}>
              1
            </ButtonPages>
            <ButtonPages>
              2
            </ButtonPages>
            <ButtonPages>
              3
            </ButtonPages>
            <ButtonPages>
              ...
            </ButtonPages>
            <ButtonNext active={true}>
              Próxima
            </ButtonNext>
          </PaginationDiv>
        </TableDiv>
          
      </RightMenu>
    </MainDiv>
  );
}