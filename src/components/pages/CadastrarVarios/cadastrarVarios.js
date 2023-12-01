import React, { useState } from 'react';
import Form from '../../Form/form';
import DisplayData from '../../DisplayData/displayData';
import styled from 'styled-components';
import userService from '../../../services/user';
import { toast } from 'react-toastify';

const Button = styled.button`
    width: 30%;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
const ContainerA = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    /* margin: 2rem; */
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



function CadastrarVariosUsers() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const removeUser = (index) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    const enviarEmMassa = async () => {
        console.log(users);
        for (const user of users) {
            console.log(user);
            if (user.username != '' && user.gender != '' && user.email != '') {
                const response = await userService.cadastrar({username: user.username, email: user.email, genero: user.gender});
                if (response.status == 200 || response.status == 201) {
                    toast.success('Usuário cadastrado com sucesso!');
                    removeUser(users.indexOf(user));
                }
                if(response.status == 202){
                    toast.error('Usuário já cadastrado!');
                }
                if(response.status == 500){
                    toast.error('Erro ao cadastrar usuário!');
                }

            } else {
                toast.error('Preencha todos os campos!');
            }
        }
    }

    return (
        <div>
            <Form onAddUser={addUser} />
            <DisplayData users={users} removeUser={removeUser} />
            <ContainerA>
                <Container>
                    <Button onClick={enviarEmMassa}>Enviar em Massa</Button>
                </Container>
            </ContainerA>
        </div>
    );
}

export default CadastrarVariosUsers;