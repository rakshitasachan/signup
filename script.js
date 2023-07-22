// Get the "Select All" checkbox and individual checkboxes
const selectAllCheckbox = document.getElementById('selectAll');
const checkboxes = document.getElementsByClassName('checkbox-item');

// Add an event listener to the "Select All" checkbox
selectAllCheckbox.addEventListener('change', function () {
  // Loop through all individual checkboxes and set their checked property
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = this.checked;
  }
});

// Add event listeners to individual checkboxes to update the "Select All" checkbox state
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function () {
    // Check if all individual checkboxes are checked, and update the "Select All" checkbox state accordingly
    let allChecked = true;
    for (let j = 0; j < checkboxes.length; j++) {
      if (!checkboxes[j].checked) {
        allChecked = false;
        break;
      }
    }
    selectAllCheckbox.checked = allChecked;
  });
}
