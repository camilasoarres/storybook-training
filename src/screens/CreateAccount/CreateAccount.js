import React, { Component } from 'react';
import styled from 'styled-components';


import Input from '../../components/Petronect/Inputs/Input'
import Button from '../../components/Petronect/Button/Button'
import LogoWhite from '../../assets/logo-petronect-white.png'

const Overlay = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to bottom, #115680, #116EA0);	
`;

const ImageLogo = styled.img`
	margin-bottom: 4rem;
`;

const Container = styled.div`
	width: 30vw;
	min-height: 55vh;
	background: #FFF;
	border-radius: 4px;
	padding: 1rem;
	display: flex;
	justify-content: center;
`;

const Form = styled.form`
	width: 90%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

const TitleForm = styled.h1`
	font-size:24px;
	color: #116EA0;
	align-self: flex-start;
	margin: 2rem 0 1.5rem 1.4rem;
`;

const TextTerms = styled.p`
	font-size: 12px;
	margin: 1rem 0;
	color: #505050;

	u{
		cursor: pointer;
	}
`;

// MODAL TERMS

const OverlayModal = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(to bottom, #115680, #116EA0);	
`;

const Modal = styled.div`
width: 35vw;
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
padding: 0.5rem;
border-radius: 4px;

span{
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
`;

const TitleTerms = styled.h1`
color: #116EA0;
font-size: 24px;
align-self: flex-start;
margin: 0.5rem 0 0.5rem 1.3rem;
`; 

const Content = styled.div`
width: 95%;
background: #F7F7F7;
display: flex;
flex-direction: column;
justify-content: space-evenly;
border-radius: 4px;
padding: 1rem;
`;

const Petro = styled.p`
color: #505050;
font-weight: bold;
font-size: 14px;
margin: 0.5rem 0 1rem 0;
`;

const TitleBlue = styled.p`
font-weight: normal;
color: #116EA0;
font-size: 14px;
margin: 0.5rem 0 1rem 0;
`;

const SubTitleTerms = styled.p`
font-weight: bold;
color: #505050;
font-size: 14px;
margin: 0.5rem 0 1rem 0;
`;

const Terms = styled.p`
font-size: 14px;
margin: 0.5rem 0 1.2rem 0;
line-height: 22px;
`;

export default class CreateAccount extends Component {

	state = {
		modalTerms: false, 
	}


	modalTerms = () => {
  return (
		<OverlayModal>
			<ImageLogo src={LogoWhite} />
			<Modal>
				<TitleTerms>Termos de Serviço</TitleTerms>
				<Content>
					<Petro>Petronect</Petro>
					<TitleBlue>LAST UPDATE: December 06,2019</TitleBlue>
					<SubTitleTerms>1. Acceptance of Petronect terms of servisse</SubTitleTerms>
					<Terms>
						 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac consectetur massa. Pellentesque at vestibulum justo. Donec sed nibh dignissim, vestibulum neque sed, ornare ex. In purus odio, sodales non nibh quis, interdum maximus neque. Proin et imperdiet elit. Aliquam erat volutpat. Etiam luctus libero id neque commodo placerat. Etiam vitae molestie eros. Etiam dui urna, pulvinar eget neque in, pharetra bibendum diam. Donec sit amet sem eu enim sollicitudin consectetur tristique ac nunc.
					 </Terms>
					<Terms>
							Quisque nec risus id nisi viverra gravida. Fusce sed lacus lorem. Ut sit amet luctus est. Donec facilisis justo mi, ut consequat urna blandit at. Quisque eleifend rutrum felis.
					</Terms>
				</Content>
				<span>
					<Button
						width="6rem"
						height="2rem"
						background="#116EA0"
						margin="0.3rem 0 0 0"
						onClick={this.renderModalTerms}
					>
						OK
					</Button>
				</span>
			</Modal>
		</OverlayModal>
  );
}

	
	renderModalTerms = () => {
		this.setState({
			modalTerms: !this.state.modalTerms,
		})
	}

  render() {
		return (
			<Overlay>
				{this.state.modalTerms === true ? (
					this.modalTerms()
				) : (
					<>
					<ImageLogo src={LogoWhite} />
						<Container>
						<Form>
							<TitleForm>Create account</TitleForm>
							<Input labelText="Nome" placeholder="Nome" margin="0.5rem 0"/>
							<Input labelText="Email" placeholder="nome@mail.com" margin="0.5rem 0"/>
							<Input labelText="Senha" placeholder="Inserir Senha" margin="0.5rem 0"/>
							<TextTerms onClick={this.renderModalTerms}>Clique abaixo para concordar com os <u>Termos de Serviço</u> e registrar.</TextTerms>
							<Button width="20rem" height="3rem" background="#116EA0" margin="0.5rem 0 1rem 0">Criar Conta</Button>
						</Form>
					</Container>
					</>
						
				)}
			</Overlay>
    );
  }
}
