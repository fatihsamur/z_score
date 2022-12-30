function calculateZScore(mean, standardDeviation, value) {
  return (value - mean) / standardDeviation;
}

document.querySelector('#calculate-button').addEventListener('click', () => {
  const mean = document.querySelector('#mean').value;
  const standardDeviation = document.querySelector('#standard-deviation').value;
  const value = document.querySelector('#value').value;
  const result = calculateZScore(mean, standardDeviation, value);
  document.querySelector('#result').textContent = `Z-Score: ${result}`;
  document.querySelector('#result').style.display = 'block';
  document.querySelector('#clear-form-button').style.display = 'block';
});

document.querySelector('#clear-form-button').addEventListener('click', () => {
  document.querySelector('#z-score-form').reset();
  document.querySelector('#result').textContent = '';
  document.querySelector('#result').style.display = 'none';
  document.querySelector('#clear-form-button').style.display = 'none';
});
