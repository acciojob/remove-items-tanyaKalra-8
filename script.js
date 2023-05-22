//your JS code here. If required.

function deleteElement() {
	let element =  document.getElementByTagName("select")[0];	
	let selectedElement = element.value;
	
	let childrenList = element.children;

	for (let i = 0; i < childrenList.length; i++) {
		if (selectedElement === childrenList[i].value) {
			childrenList[i].remove();
		}
	}
}