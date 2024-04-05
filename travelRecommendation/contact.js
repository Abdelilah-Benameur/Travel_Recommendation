const btnSubmitForm = document.getElementById("btnSubmitForm");
var messages = [];
function resetForm() {
    document.getElementById("name").value = "";    
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
function addForm() {
    messages = [];
    const reportDiv = document.getElementById('report');
    reportDiv.innerHTML = '';
    const name = document.getElementById("name").value;    
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;    
    if (name && email && message) {
        messages.push({ name, email, message });
        resetForm();
        generateReport(messages, reportDiv);
    } else {
        reportDiv.innerHTML += '<div><h3 class="warning">Please fill out all the fields in the form above.</h3></div>';
    }       
}
function generateReport(messages, reportDiv) {    
    if (messages) {
        messages.forEach(item => {
        reportDiv.innerHTML += `<h3>Dear ${item.name},</h3>`;
        reportDiv.innerHTML += `<p>We have received your message:<br>"${item.message}"</p>`;
        reportDiv.innerHTML += `<p>We'll respond shortly to your indicated email:<br>${item.email}</p>`;
    })
    } else {
        reportDiv.innerHTML += '<div><h3 class="warning">Tere are no submitted messages.</h3></div>';
    }
}
btnSubmitForm.addEventListener("click", addForm);