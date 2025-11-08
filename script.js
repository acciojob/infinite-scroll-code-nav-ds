const list = document.getElementById('infi-list');

// Track the number of items added so far
let itemCount = 0;

// Function to add items to the list
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 initial items
addItems(10);

// Add scroll event listener
list.addEventListener('scroll', () => {
  // Check if user has scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
