import React from 'react';
import Logo from '../../assets/Logo.png';
import {FiHome, FiLogOut, FiBriefcase} from 'react-icons/fi';
import { Styled } from './styles';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Hooks/contexts/AuthProvider';



// import { Container } from './styles';

function NavBar() {
  const { singOut } = useAuth()
  const history = useHistory()
  const items = [
    {
      link: '/home',
      icon: <FiHome color="#fff" />
    },
    {
      link: '/create-products',
      icon: <FiBriefcase color="#fff" />
    },
  ]

  const handleClick = async () => {
    await singOut()
    history.push("/")
  }
  return (
    <Styled.NavBar>
     <Styled.Logo src={Logo} />
      <Styled.NavArea>
       {items.map((item, key) => (
         <Styled.NavItem key={key} to={item.link}>
           {item.icon}
         </Styled.NavItem>
       ))}
       <Styled.NavButton onClick={handleClick}>
         <FiLogOut color="#fff" />
       </Styled.NavButton>         
      </Styled.NavArea>
    </Styled.NavBar>
  );
}

export default NavBar;