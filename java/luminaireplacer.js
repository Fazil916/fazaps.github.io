// Event listener for the 'arrangement' button

document.getElementById('arrangment').addEventListener('click', function () {
  var length = parseFloat(document.getElementById('length').value);
  var width = parseFloat(document.getElementById('width').value);
  var illumination = parseFloat(document.getElementById('illumination').value);

  // Check if the inputs are too large
  if (length > 100000 || width > 100000 || illumination > 100000) {
    alert("The input values are too large. Please enter smaller values.");
    return;
  }

  // Calculate required luminaire
  var requiredLuminaire = Math.ceil((length * width * illumination) / 1000);
  // Calculate x and y (row and column)
  var x = Math.ceil(Math.sqrt(requiredLuminaire));

  var y = Math.ceil(requiredLuminaire / x);

  // Store in input fields
  document.getElementById('row').textContent = x;
  document.getElementById('column').textContent = y;

  // Store the input values in localStorage
  localStorage.setItem('Length', length);
  localStorage.setItem('Width', width);
  localStorage.setItem('Row', x);
  localStorage.setItem('Column', y);
});