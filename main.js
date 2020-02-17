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
    //checkbox - will show 'on', then true or false 
    var item1check = getInputVal('item1check');
    var size = getInputVal('size');
    var quantity = getInputVal('quantity');
    var ordernotes = getInputVal('ordernotes');

    console.log(name, instagramhandle, phone, email, item1check, size, quantity, ordernotes);

}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}