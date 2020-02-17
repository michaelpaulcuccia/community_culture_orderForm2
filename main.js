//listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    console.log('submit button');

    //get values
    var name = getInputVal('name');
    var instagramhandle = getInputVal('instagramhandle');
    var phone = getInputVal('phone');
    var email = getInputVal('email');

    //checkbox - comes back as UNDEFINED 
    var item1check = getInputVal('item1check');

    //dropdown - NOT WORKING
    //var dropdownMenuButton = getInputVal('dropdownMenuButton');

    //quantity - NOTWORKING
    //var quantity1 = getInputVal('quantity1');
    
    var ordernotes = getInputVal('ordernotes');

    console.log(name, instagramhandle, phone, email, item1check, dropdownMenuButton, quantity1, ordernotes);

}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}