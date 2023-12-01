import React from 'react';
import { useState, useEffect } from 'react';
import PageA from '../PageA/PageA';
import PageB from '../PageB/PageB';

const PaginaAleatoria = () => {
    const [paginaExibida, setPaginaExibida] = useState(null);
  
    useEffect(() => {
      
      const paginaAnterior = localStorage.getItem('ultimaPagina');
  
  
      setPaginaExibida(paginaAnterior || escolherPaginaAleatoria());
    }, []);
  
    const escolherPaginaAleatoria = () => {
      const numeroAleatorio = Math.random();
      const novaPagina = numeroAleatorio < 0.5 ? 'PaginaH' : 'PaginaM';
  
     
      localStorage.setItem('ultimaPagina', novaPagina);
  
      return novaPagina;
    };
  
    return (
      <div>
        {paginaExibida === 'PaginaH' && <PageA />}
        {paginaExibida === 'PaginaM' && <PageB />}
      </div>
    );
  };
  
  export default PaginaAleatoria;