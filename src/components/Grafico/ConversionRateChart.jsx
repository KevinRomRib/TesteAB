import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ChartContainer = styled.div`
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const ConversionRateChart = ({ accesses, purchases }) => {
    const conversionRateA = (purchases.filter(p => p.page === 'a').length / accesses.filter(a => a.page === 'a').length) * 100;
    const conversionRateB = (purchases.filter(p => p.page === 'b').length / accesses.filter(a => a.page === 'b').length) * 100;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Gráfico de Taxa de Conversão Pagina A e B',
            },
        },
    };
    const data = {
        labels: ['Página A', 'Página B'],
        datasets: [
            {
                label: 'Taxa de Conversão',
                data: [conversionRateA, conversionRateB],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <ChartContainer>
            <Bar data={data} options={options} />
        </ChartContainer >
    );
};

export default ConversionRateChart;
