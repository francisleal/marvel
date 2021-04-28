import styled from 'styled-components'

import banner from "../../assets/fundo.png"

type ContainerPagesProps = {
   modal: boolean;
}

export const ContainerPages = styled.div<ContainerPagesProps>`
   background-color: #000;
   background-image: url(${banner});
   background-repeat: no-repeat;
   background-size: contain;
   background-attachment: fixed;
   background-position: right;
   overflow: hidden;
   width: 100vw;
   height: calc(100vh - 114px);
   padding: 0 5%;
   display: flex;
   justify-content: ${(props) => props.modal ? 'space-around' : 'center'};
   align-items: center;

   &:before {
       content: '';
       position: absolute;
       background: ${(props) => props.modal ? 'linear-gradient(to right,rgb(0 0 0) 50%,rgb(0 0 0 / 50%))' : 'rgb(0 0 0 / 85%)'} ;
       display: block;
       width: 100vw;
       height: ${(props) => props.modal ? 'calc(100vh - 114px)' : '120vh'} ;
       z-index: ${(props) => props.modal ? 0 : 1};
   } 

   span {
      display: flex;
   }

   @media(max-width: 540px) {
      justify-content: center !important;    
      flex-direction: column; 
      height: auto;
      gap: 16px;

      span {
         flex-direction: column;
      }

      &:before {
         top: 0;
         position: fixed
      }
    }
`;

export const Card = styled.div`
   height: 439px;
   width: 289px;
   background: #fff;
   position: relative;
   z-index: 5;
   border-radius: 16px;
   overflow: hidden;

   display: flex;
   flex-direction: column-reverse;

   &:hover > img {
      height: 475px !important;
      width: 325px !important;
      transition: 0.7s;
   }
`;

export const Info = styled.div`
   background: linear-gradient(to bottom,rgb(255 0 0 / 90%) 50%,rgb(0 0 0 / 50%));
   height: calc(439px / 2);
   width: 289px;
   bottom: 0;
   border-radius: 16px;
   position: relative;
   
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding: 23px;
   transition: 0.3s;

   /* &:hover {
      height: calc(450px / 2)
   } */

`;

export const Img = styled.img.attrs({
   src: `${(props: { caminho: string }) => props.caminho}`
})`
   position: absolute;
   width: 105%;
`;

export const Nome = styled.p`
   color: #fff;
   font-size: 20px;
   font-weight: bold;
`;

export const Descricao = styled.p`
   color: #fff;
   font-size: 12px;
`;

export const Detalhes = styled.p`
   color: #fff;
   font-size: 20px;
   cursor: pointer;

   &:active {
      opacity: 0.6;
   }
`;
export const DetalhesCard = styled.div`
   color: #fff;
   height: 439px;
   margin-left: -15px;
   width: 400px;
   position: relative;
   z-index: 1;
   border-radius: 0px 20px 20px 0px;
   background-image: linear-gradient(to right, rgba(255,0,0),rgb(90 0 0));

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: baseline;
   padding: 80px 80px 20px 80px;

   & > p:first-child {
       font-size: 30px
   }

   @media(max-width: 540px) {
      border-radius: 20px;
    }
`;

export const DetalhesCardHqs = styled(DetalhesCard)`
   padding: 45px 80px 20px 80px;
`;

export const FecharDetalhesCard = styled.div`
   border: 1px solid #fff;
   font-size: 20px;
   width: 29px;
   height: 29px;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
   -webkit-justify-content: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-align-items: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   cursor: pointer;
   border-radius: 50%;
   margin-left: 265px;

   &:active {
      opacity: 0.6;
   }
`;


export const Aparicoes = styled.h4`
   /* color: #fff; */
   font-size: 18px;   

   p {
       font-weight: normal;
       font-size: 16px;
   }
`;

export const Disponivel = styled.p`
   /* color: #fff; */
   font-size: 12px;
`;

export const MaisDescricao = styled.p`
   /* color: #fff; */
   font-size: 12px;
`;

export const Avaliacoes = styled.p`
   /* color: #fff; */
   font-size: 26px;
`;