const labels = document.querySelectorAll('.form-control label');
labels.forEach(label => {
  label.innerHTML = label.innerText
  // The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. More info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  .split('')
  //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. More info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes. More info https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
  .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
  .join('')
  
});