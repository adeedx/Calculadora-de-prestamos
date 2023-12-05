function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;

    document.getElementById('monthlyPayment').innerText = 'Pago mensual: $' + monthlyPayment.toFixed(2);
    document.getElementById('totalPayment').innerText = 'Pago total: $' + totalPayment.toFixed(2);
  }