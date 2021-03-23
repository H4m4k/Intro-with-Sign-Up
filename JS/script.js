let button = document.querySelector('#greenButton');
button.addEventListener('click', validate);

function validate() {
    let form = document.querySelector('.form');
    
    let fName = form.children.first_Name.value ? '' : console.log('First name cannot be empty');
    let lName = form.children.last_Name.value ? '' : console.log('Last name cannot be empty');
    let email = 'Looks this is not an email';
    let pass = form.children.password.value ? '' : console.log('Password cannot be empty');
    
    let array = [fName, lName, email, pass];

}

/* Object validator will contain the true/false result of checks

  validator {
    fName = true/false,
    lName = true/false,
    email = true/false, 
    pass = true/false
  }
*/
/*- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"* */