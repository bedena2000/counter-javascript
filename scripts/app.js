// Logic

const changeNumber = (pointer, number) => {
  console.log(number);
  // Step 1: Get number current Value
  let numberCurrentValue = document.querySelector(".counter-title").textContent.trim();
  // Step 2: Convert this value to number
  let numberOfCurrentValue = parseInt(numberCurrentValue);
  // Step 3: Check Pointer
  switch (pointer) {
    case '+':
      numberOfCurrentValue += number;
      break;
    case '-':
      numberOfCurrentValue -= number;
      break;
    case 'x':
      numberOfCurrentValue = 0;  
      break;
  };
  // Step 4: Display the number
  const currentText = document.querySelector(".counter-title");
  currentText.textContent = numberOfCurrentValue;
};

const getNumberOption = () => {
  const selectElement = Number(document.querySelector(".number").value);
  return selectElement;
};

// Get All i Elements 
const allIcons = document.querySelectorAll('.fa-solid');
// Click event on all Icons
allIcons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    // Step 1: Get Clicked Icon ClassList
    const iconClassList = Array.from(event.target.classList);
    // Step 2: Check Includes
    if(iconClassList.includes("counter-plus")) {
      const numberOfCurrentOption = getNumberOption();
      changeNumber('+', numberOfCurrentOption);
      let plusSound = new Audio('mp3/plus-sound.mp3');
      plusSound.play();
    } else if (iconClassList.includes("counter-minus")) {
      const numberOfCurrentOption = getNumberOption();
      changeNumber('-', numberOfCurrentOption);
      let plusSound = new Audio('mp3/minus-sound.mp3');
      plusSound.play();
    } else if (iconClassList.includes("counter-reset")) {
      const numberOfCurrentOption = getNumberOption();
      changeNumber('x', numberOfCurrentOption);
      let plusSound = new Audio('mp3/reset-sound.mp3');
      plusSound.play();
    }
  });
});