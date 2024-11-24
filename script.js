function draw() {
    try {
      // mengkompilasi ekspresi sekali 
      const expression = document.getElementById('eq').value;
      const expr = math.compile(expression);
  
      // mengevaluasi ekspresi berulang kali untuk nilai x yang berbeda
      const xValues = math.range(-10, 10, 0.5).toArray();
      const yValues = xValues.map(function (x) {
        return expr.evaluate({ x: x });
      });

    
  
      // merender plot menggunakan plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter',
      };
      const data = [trace1];
      Plotly.newPlot('plot', data);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }

  
  document.getElementById('form').onclick = function (event) {
    event.preventDefault();
    draw();
  };
  
  draw();

 