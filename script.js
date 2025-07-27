
   
    const rates = {
      USD: 1,
      EUR: 0.85,
      JPY: 110,
      GBP: 0.75,
      AUD: 1.35,
      CAD: 1.25,
      CHF: 0.91,
      CNY: 6.45,
      SEK: 8.7,
      NZD: 1.4,
      ZAR: 18.2,
      MXN: 20,
      SGD: 1.36,
      HKD: 7.77,
      NOK: 8.9,
      KRW: 1150,
      TRY: 8.5,
      INR: 74,
      RUB: 73,
      BRL: 5.2,
      AED: 3.67,
      DKK: 6.3,
      PLN: 3.8,
      TWD: 27.9,
      THB: 33,
      MYR: 4.15,
      IDR: 14200,
      CZK: 21.5,
      HUF: 295,
      ILS: 3.3
    };

    function convert() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;

      if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount";
        return;
      }

      const result = amount * (rates[to] / rates[from]);
      document.getElementById('result').innerText =
        `${amount.toFixed(2)} ${from} = ${result.toFixed(2)} ${to}`;
    }
