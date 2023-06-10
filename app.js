/* eslint-disable no-undef */
  
  // Storing the list items
  let lists = document.querySelectorAll('.list');
  let rightBox = document.querySelector('.cont2');
  let leftBox = document.querySelector('.cont1');
  
  // Function to drag
  for (let listNo of lists) {
    listNo.addEventListener('dragstart', function (e) {

      let selected = e.target;
      // Allowing it to drag over the right container

      rightBox.addEventListener('dragover', function (e) {
        e.preventDefault(); // Prevent the default feature
      });

      rightBox.addEventListener('drop', function (e) {
        e.preventDefault();
        // Add the selected element in the right box
        rightBox.appendChild(selected); 
        // For clearing the selection to drag the other element
        selected = null;

        //Show success message when item is dropped
        const currMessage = document.querySelector('.sucess');
        currMessage.classList.add('show');
        setTimeout(function () {
          currMessage.classList.remove('show');
        }, 1000);
      });
  
      leftBox.addEventListener('dragover', function (e) {
        e.preventDefault(); // Prevent the default feature
      });
      leftBox.addEventListener('drop', function (e) {
        e.preventDefault();
        // Add the selected element in the right box
        leftBox.appendChild(selected); 
        // For clearing the selection to drag the other element
        selected = null;
      });
    });
    //reseting the leftBox
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function () {
        while (rightBox.childNodes.length > 2) {
            leftBox.appendChild(rightBox.childNodes[2]);
          }
    });
  }
  