 //Global Variabes:

 let formElem = document.getElementById('newNotifForm');
 let checkboxes = document.getElementById('remindMe');
 let upcomingList = document.getElementById('upcomingList')

 function renderReminder(title, dueDate, priority){
    let item = document.createElement('li');
    item.innerHTML = `${title} <ul><li>${dueDate}</li> <li>${priority.toString()}</li></ul>`
    upcomingList.appendChild(item);
 }
 
 function handleSubmit(event) {
    event.preventDefault();
    let title = event.target.notifTitle.value;
    let dueDate = event.target.dueDate.value;
    let priority = [];
    var arr = [].slice.call(checkboxes.children);
    arr.forEach(child => {
        console.log(child.children[0].checked);
        if(child.children[0].checked == true){
            priority.push(child.children[0].value);
        }
    });
    console.log(priority);
    console.log(dueDate);
    renderReminder(title, dueDate, priority);
 }

 formElem.addEventListener('submit', handleSubmit);