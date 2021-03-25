let button = document.querySelector('#greenButton');
button.addEventListener('click', check);
let error_List = document.querySelectorAll('.error, .icon')
let array = Array.from(error_List).sort(); 

function error(number){
  array[number].classList.remove('off');
  array[number+4].classList.remove('off');
}

function no_Error(number){
  array[number].classList.add('off');
  array[number+4].classList.add('off');
}

function check() {
  let input = document.querySelectorAll('input');
  let input_Array = Array.from(input);

  input_Array.forEach((element, index) => {
    (!element.value) ? error(index) : no_Error(index);
  })
}


// function validate() {
//   let input = document.querySelectorAll('input');
//   let input_Array = Array.from(input);
//   const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
//     let validator = {
//       fName: false, 
//       lName: false, 
//       email: false, 
//       pass:  false } ;

//      /*fName */ input_Array[0].value ? validator.fName = true : error(0);
//      /*lName*/  input_Array[1].value ? validator.lName = true : error(1);
//      /*email*/  input_Array[2].value.match(email) ? validator.email = true : error(2);
//      /*pass*/   input_Array[3].value ? validator.pass = true : error(3);
    
    //  const check = Object.values(validator).every(bool => bool === true)
    // console.log(validator + ' ' + check);
//}

/* Object validator will contain the true/false result of checks, 
    on all checks true - submit 

  validator {
    fName = true/false,
    lName = true/false,
    email = true/false, 
    pass = true/false
  }
*/
/*- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*/