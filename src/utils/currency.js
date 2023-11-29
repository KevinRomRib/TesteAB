export const formatCurrency = (value) => {
    let currency = (parseFloat(value)).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return currency
}