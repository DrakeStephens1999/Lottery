var generateBtn = document.getElementById('generate');
// Assignment code here
var slider = document.getElementById("myRange");
const val = slider.value
const output = document.getElementById("demo");
const current = output.innerHTML = val; // Display the default slider value
const lottery = document.getElementById('lottoN');

const num = "1234567890";


var numBox = document.getElementById("num");

// Update the current slider value (each time you drag the slider handle this is a used )
slider.oninput = function() {
  output.innerHTML = this.value;
}


// Get references to the #generate element


// Write password to the #password input
function wPassword(l, characters){
  
  var lotto = '';

  for(var i = 0; i<l; i++){
      lotto += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return lottery.innerHTML = lotto;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  var characters = num;
  
  console.log('hi')
  console.log(wPassword(slider.value, characters))
  wPassword(slider.value, characters)
});
//(numBox.checked) ? characters += num : '';