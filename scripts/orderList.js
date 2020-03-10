// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDA2T4VxN-b31peEKIG4jOxUru6wrRoPw4",
    authDomain: "communitycultureorderform.firebaseapp.com",
    databaseURL: "https://communitycultureorderform.firebaseio.com",
    projectId: "communitycultureorderform",
    storageBucket: "communitycultureorderform.appspot.com",
    messagingSenderId: "899871604090",
    appId: "1:899871604090:web:c85573ff78bf1ec692aac3",
    measurementId: "G-3S9G4171RS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference collection - create name orderOne
var orderOneRef = firebase.database().ref('orderOne');

//getting data
var ref = firebase.database().ref('orderOne');
ref.on('value', gotData, errData);

function gotData(data) {
    //console.log(data);
    console.log(data.val());
    var order = data.val();
    var keys = Object.keys(order);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var name = order[k].name;
        var instagramhandle = order[k].instagramhandle;
        var phone = order[k].phone;
        var email = order[k].email;
        var item1check = order[k].item1check;
        var size = order[k].size;
        var quantity = order[k].quantity;
        var ordernotes = order[k].ordernotes;
        console.log(name, instagramhandle, phone, email, item1check, size, quantity, ordernotes);

        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(instagramhandle),
            $("<td>").text(phone),
            $("<td>").text(email),
            $("<td>").text(item1check),
            $("<td>").text(size),
            $("<td>").text(quantity),
            $("<td>").text(ordernotes),
        );
        // Append the new row to the table
        $("#order-table > tbody").append(newRow);

        // document.querySelector('#name-return').innerHTML = name;
        // document.querySelector('#insta-return').innerHTML = instagramhandle;
        // document.querySelector('#phone-return').innerHTML = phone;
        // document.querySelector('#email-return').innerHTML = email;
        // document.querySelector('#item-return').innerHTML = item1check;
        // document.querySelector('#size-return').innerHTML = size;
        // document.querySelector('#quantity-return').innerHTML = quantity;
        // document.querySelector('#orderNotes-return').innerHTML = ordernotes;
    }
  }

function errData(err){
    console.log('ERROR!');
    console.log(err);
}