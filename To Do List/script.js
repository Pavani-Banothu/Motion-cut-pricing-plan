document.addEventListener('DOMContentLoaded', () => {
	const add = document.getElementById('addToDo');
	const input = document.getElementById('inputField');
	const toDoContainer = document.getElementById('toDoContainer');
  
	add.addEventListener('click', addItem);
	input.addEventListener('keypress', (e) => {
	  if (e.key === 'Enter') {
		addItem();
	  }
	});
  
	function addItem() {
	  const itemValue = input.value.trim();
	  if (itemValue === '') {
		return; // Prevent adding empty items
	  }
  
	  const item = document.createElement('div');
	  item.classList.add('item');
  
	  const itemContent = document.createElement('div');
	  itemContent.classList.add('content');
  
	  const inputItem = document.createElement('input');
	  inputItem.classList.add('text');
	  inputItem.type = 'text';
	  inputItem.value = itemValue;
	  inputItem.setAttribute('readonly', 'readonly');
  
	  inputItem.addEventListener('dblclick', () => {
		inputItem.style.textDecoration = 'line-through';
	  });
  
	  itemContent.appendChild(inputItem);
	  item.appendChild(itemContent);
  
	  const itemAction = document.createElement('div');
	  itemAction.classList.add('actions');
  
	  const editItem = document.createElement('button');
	  editItem.classList.add('edit', 'btn', 'btn-success');
	  editItem.type = 'button';
	  editItem.innerText = 'Edit';
  
	  const deleteItem = document.createElement('button');
	  deleteItem.classList.add('delete', 'btn', 'btn-danger');
	  deleteItem.innerHTML = '<i class="fa fa-trash"></i>';
  
	  itemAction.appendChild(editItem);
	  itemAction.appendChild(deleteItem);
  
	  item.appendChild(itemAction);
	  toDoContainer.appendChild(item);
  
	  input.value = '';
  
	  editItem.addEventListener('click', () => {
		if (editItem.innerText.toLowerCase() === 'edit') {
		  editItem.innerText = 'Save';
		  inputItem.removeAttribute('readonly');
		  inputItem.focus();
		} else {
		  editItem.innerText = 'Edit';
		  inputItem.setAttribute('readonly', 'readonly');
		}
	  });
  
	  deleteItem.addEventListener('click', () => {
		toDoContainer.removeChild(item);
	  });
	}
  });
  