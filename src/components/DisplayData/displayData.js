import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  div {
    margin-bottom: 15px;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  p {
    margin: 5px 0;
    color: #333;
  }

    button {
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
    }
`;

function DisplayData({ users, removeUser }) {
    return (
        <StyledDisplay>
            {users.map((user, index) => (
                <div key={index}>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Gender: {user.gender}</p>
                    <button onClick={(e) => removeUser(index)}>Apagar</button>
                </div>
            ))}
        </StyledDisplay>
    );
}

export default DisplayData;
