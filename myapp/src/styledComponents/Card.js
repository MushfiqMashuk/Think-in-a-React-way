import React from "react";
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "../styles/Container.styles";
import { H1, P, StyledButton, StyledTitle, Tag } from "../styles/Elements";
import Button from "./Button";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <StyledButton />
        <Tag color="#4361ee">EXCLUSIVE</Tag>

        <H1>
          <StyledTitle text="React Styled Component" color="brown" />
        </H1>

        <P>
          This is a React Styled Component Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </P>

        <ButtonContainer>
          <Button href="https://facebook.com" content="Facebook" />
          <Button href="https://google.com" content="Google" />
        </ButtonContainer>
      </ContentContainer>

      {/* 
      <Image src={nerdImage} width="300px" alt="nerd" /> */}
      {/* <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            */}
    </CardContainer>
  );
}
