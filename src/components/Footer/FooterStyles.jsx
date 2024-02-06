import { styled } from 'styled-components'

export const FooterMenu = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #171538;
  position: fixed;
  top: 90%;
  animation-name: anim-exit;
  animation-duration: .1s;
  animation-timeline: view();
  animation-range: cover 30% cover 100%;
  
  @keyframes anim-exit{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }

`

export const MenuLinks = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;`
  
