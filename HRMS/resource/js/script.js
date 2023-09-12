var API_ENDPOINT = "https://avbssyes3d.execute-api.ap-south-1.amazonaws.com/hrms";

// AJAX POST REQUEST
console.log("hello1");
// document.getElementsByName("send").onclick = function(){
  function function1(){
  var inputData = {
    "email": $('#email2').val(),
    "empFirstName": $('#firstName').val(),
    "empLastName": $('#lastName').val(),
    "empDepartment": $('#department').val(),
    "empDesignation": $('#designation').val(),
    "empNumber": $('#number').val(),
    "empUrl": $('#website').val(),
    "empOccupation": $('#occupation').val(),
    "empPassword": $('#password').val(),
    "empRpassword": $('#password2').val(),
    "empTelephone": $('#telephone').val(),
    "empDetail": $('#textarea').val(),
  };
  
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          console.log("in the function");
          document.getElementById("send").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("inserterror");
        }
    });
}
console.log("aft fun");


// AJAX GET REQUEST
// document.getElementById("refresh").onclick = function(){  
//   $.ajax({
//         url: API_ENDPOINT,
//         type: 'GET',
//         contentType: 'application/json; charset=utf-8',
//         success: function (response) {
//           $('#employeeProfile tr').slice(1).remove();
//           jQuery.each(response, function(i,data) {          
//             $("#employeeProfile").append("<tr> \
//                 <td>" + data['email'] + "</td> \
//                 <td>" + data['empFirstName'] + "</td> \
//                 <td>" + data['empLastName'] + "</td> \
//                 <td>" + data['empDepartment'] + "</td> \
//                 <td>" + data['empDesignation'] + "</td> \
//                 <td>" + data['empNumber'] + "</td> \
//                 <td>" + data['empUrl'] + "</td> \
//                 <td>" + data['empOccupation'] + "</td> \
//                 <td>" + data['empPassword'] + "</td> \
//                 <td>" + data['empRpassword'] + "</td> \
//                 <td>" + data['empTelephone'] + "</td> \
//                 <td>" + data['empDetail'] + "</td> \
//                 </tr>");
//           });
//         },
//         error: function () {
//             alert("geterror");
//         }
//     });
// }

console.log("enddd");
