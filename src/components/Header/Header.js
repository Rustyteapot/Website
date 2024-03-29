import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFlag, AiFillLinkedin} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Professional Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="https://drive.proton.me/urls/2SH7A5YHZW#cnlnbpd6Y5YT">CV / Resume</NavLink>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
      <Div3>
      <SocialIcons href="https://www.linkedin.com/in/anthonie-immelman/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://tryhackme.com/p/rustyteapot">
          <AiFillFlag size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/AntImmelman">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
