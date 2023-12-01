import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Importação necessária para o Chart.js 3

const GraficoCompras = ({ dadosAgrupados }) => {
  const chartRef = useRef(null); // Ref para o canvas do gráfico

  // Assegura a destruição do gráfico anterior antes de criar um novo
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  // Extrair datas, contagem de página A e página B
  const datas = Object.keys(dadosAgrupados);
  const contagemA = datas.map(data => dadosAgrupados[data].a || 0); // Adiciona fallback para 0
  const contagemB = datas.map(data => dadosAgrupados[data].b || 0); // Adiciona fallback para 0

  // Configuração do gráfico
  const dadosGrafico = {
    labels: datas,
    datasets: [
      {
        label: 'Página A',
        data: contagemA,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Página B',
        data: contagemB,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar ref={chartRef} data={dadosGrafico} />;
};

export default GraficoCompras;
