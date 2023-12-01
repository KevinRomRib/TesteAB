// import styled, { keyframes, css } from "styled-components";
// import React from "react";
// import { toast } from "react-toastify";
// import userService from "../../../services/user";
// // criando container
// const Container = styled.div`
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: center;
// background-color: #000;
// height: 100vh;
// width: 100vw;
// color: #fff;
// font-size: 20px;
// font-weight: bold;
// `;

// const Direita = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// background-color: #646464;
// height: 100vh;
// width: 40%;
// color: #fff;
// font-size: 20px;
// font-weight: bold;
// `;

// const Esquerda = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// background-color: #000000;
// height: 100vh;
// width: 60%;
// color: #fff;
// font-size: 20px;
// font-weight: bold;
// `;

// // Definição da animação de piscar usando keyframes
// const blink = keyframes`
//   from, to {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0.5; // ajustei para 0.5 para manter um pouco de visibilidade
//   }
// `;

// const neonEffect = css`  // Agora estamos usando a função css para envolver a string
//   text-shadow:
//     0 0 5px #ff0000,
//     0 0 10px #ff0000,
//     0 0 15px #ff0000,
//     0 0 20px #ff19d5,
//     0 0 35px #ff19d5,
//     0 0 40px #ff19d5,
//     0 0 50px #ff19d5,
//     0 0 175px #ff19d5;
//   text-transform: uppercase; // Transforma o texto em maiúsculas
//   letter-spacing: 1.5px; 
//   animation: ${blink} 5s infinite alternate; // Adiciona a animação de piscar
// `;

// const TextDescriptTitle = styled.h2`
// font-size: 20px;
// font-weight: bold;
// ${neonEffect};
// margin: 0;
// `;

// const TextTitle = styled.h1`
// font-size: 40px;
// font-weight: bold;
// ${neonEffect}
// margin: 0;
// `;

// const TituloEsquerda = styled.h1`
// font-size: 2rem;
// font-weight: bold;
// margin: 1rem;
// width: 100%;
// text-align: center;
// `;

// const DescriptEsquerda = styled.p`
// font-size: 1rem;
// font-weight: 200;
// margin: 1rem;
// width: 100%;
// text-align: center;
// `;

// const Input = styled.input`
// width: 98%;
// height: 2rem;
// margin: 1rem;
// border: 1px solid #000;
// border-radius: 5px;
// padding: 0.5rem;
// `;

// const Label = styled.label`
// width: 90%;
// height: 2rem;
// margin: 1rem;
// /* border: 1px solid #ffffff; */
// border-radius: 5px;
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// justify-content: center;
// padding: 2rem;
// font-size: 1rem;
// font-weight: 200;
// color: #ffffff;
// text-align: left;
// text-transform: uppercase;
// letter-spacing: 1.5px;
// `;

// const Button = styled.button`
// width: 30%;
// margin: 1rem;
// border: 1px solid #000;
// border-radius: 5px;
// padding: 20px 15px;

// /* criando hover e onclick */
// &:hover {
//     background-color: #c69494;
//     color: #fff;
//     cursor: pointer;
// }

// font-size: 1rem;
// font-weight: bold;
// color: #000000;
// text-align: center;
// text-transform: uppercase;
// letter-spacing: 1.5px;
// `;

// const Select = styled.select`
// width: 100%;
// height: 2rem;
// margin: 1rem;
// border: 1px solid #000;
// border-radius: 5px;
// padding: 0.5rem;
// `;






// function PageHome() {

//     const [nome, setNome] = React.useState("");
//     const [email, setEmail] = React.useState("");
//     const [genero, setGenero] = React.useState("");


//     const handleCadastrar = async () => {
//         if (nome === "" || email === "" || genero === "") {
//             toast.error("Preencha todos os campos!")
//             return;
//         }
//         if (!email.includes("@")) {
//             toast.error("Email inválido!")
//             return;
//         }
//         if (nome.length < 3) {
//             toast.error("Nome inválido!")
//             return;
//         }
//         if (nome.length > 100) {
//             toast.error("Nome inválido!")
//             return;
//         }
//         if (email.length > 100) {
//             toast.error("Email inválido!")
//             return;
//         }
//         if (email.length < 3) {
//             toast.error("Email inválido!")
//             return;
//         }
//         const usuario = {
//             username: nome,
//             email: email,
//             genero: genero
//         }
//         const response = await userService.cadastrar(usuario);
//         console.log(response.status)
//         if (response.status !== 201 && response.status !== 202) {
//             toast.error("Erro ao cadastrar!")
//         }
//         if (response.status === 201) {
//             setNome("");
//             setEmail("");
//             setGenero("");
//             toast.success("Cadastrado com sucesso!")
//         }
//         if (response.status === 202) {
//             toast.warning("Email Já cadastrado")
//         }
//     }


//     return (
//         <Container>
//             <Direita>
//                 <TextDescriptTitle>Seja bem vindo a</TextDescriptTitle>
//                 <TextTitle>FashionStore</TextTitle>
//             </Direita>
//             <Esquerda>
//                 <TituloEsquerda>Insira suas informações para ter acesso ao site</TituloEsquerda>
//                 <DescriptEsquerda>Ao inserir suas informações, você receberá um email com o link exclusivo de nosso site! Este link é feito especialmente para você e nele você poderá alem de ter acesso a todo nosso catalogo comprar nele!</DescriptEsquerda>
//                 <Label>Nome
//                     <Input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome} />
//                 </Label>
//                 <Label>Email
//                     <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
//                 </Label>
//                 <Label>Genero

//                     <Select onChange={(e) => setGenero(e.target.value)} value={genero}>
//                         <option value="">Selecione</option>
//                         <option value="masculino">Masculino</option>
//                         <option value="feminino">Feminino</option>
//                     </Select>
//                 </Label>

//                 <Button onClick={() => handleCadastrar()}>Enviar</Button>
//             </Esquerda>
//         </Container>
//     );
// }

// export default PageHome;
