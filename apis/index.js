document.getElementById("convertir").addEventListener("click", function () {
  const monto = document.getElementById("monto").value;
  const moneda = document.getElementById("moneda").value;

  //  API offline
  const data = {
    version: "1.7.0",
    autor: "mindicador.cl",
    fecha: "2022-08-04T20:00:00.000Z",
    uf: { valor: 33455.92 },
    ivp: { valor: 34000.48 },
    dolar: { valor: 907.82 },
    dolar_intercambio: { valor: 758.87 },
    euro: { valor: 922.21 },
    ipc: { valor: 0.9 },
    utm: { valor: 58772 },
    imacec: { valor: 3.7 },
    tpm: { valor: 9.75 },
    libra_cobre: { valor: 3.54 },
    tasa_desempleo: { valor: 7.81 },
    bitcoin: { valor: 23298.94 },
  };

  const valorMoneda = data[moneda].valor;
  const conversion = monto / valorMoneda;
  document.getElementById(
    "resultado"
  ).innerHTML = `El monto en ${moneda.toUpperCase()} es: ${conversion.toFixed(
    2
  )} ${moneda.toUpperCase()}`;
});

//gráfico
function generarGrafico(data) {
  const fechas = data.map((entry) => entry.fecha);
  const valores = data.map((entry) => entry.valor);

  const ctx = document.getElementById("historial").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: fechas,
      datasets: [
        {
          label: "Valor de la moneda",
          data: valores,
          borderColor: "blue",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

//  10 días
const historial = [
  { fecha: "2024-03-28", valor: 730 },
  { fecha: "2024-03-29", valor: 735 },
  { fecha: "2024-03-30", valor: 740 },
  { fecha: "2024-03-31", valor: 745 },
  { fecha: "2024-04-01", valor: 750 },
  { fecha: "2024-04-02", valor: 755 },
  { fecha: "2024-04-03", valor: 760 },
  { fecha: "2024-04-04", valor: 765 },
  { fecha: "2024-04-05", valor: 770 },
  { fecha: "2024-04-06", valor: 775 },
];

generarGrafico(historial);
