function validation (){
    const username = 'boBibs';
    const userpass = '0Aa@*aZ2';
    const useremail = 'bobibasari@gmail.com';
    const userphone = 0895-4117-51679;


    const userVal = /^[A-Za-z]{5,9}$/;
    const passVal = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,24})$/;
    const emailVal = /^([A-Za-z]{2,10})?\@?([a-z]{2,7})?\.([a-z]{2,4})$/;
    const phoneVal = /^([0-9]{4})[-]?([0-9]{4})[-]?([0-9]{4,5})$/;
    
    if (userVal.test(username)){
        console.log('Username is Valid');
    } else {
        console.log('Invalid User');
        return false;
    }

    if (passVal.test(userpass)){
        console.log('Password is Valid!');
    } else {
        console.log('Invalid Password!');
        return false;
    }

    if (emailVal.test(useremail)){
        console.log('Email is Valid!');
    } else {
        console.log('Invalid Email!');
        return false;
    }

    if (phoneVal.test(userphone)){
        console.log('Phone Number is Valid');
    } else {
        console.log('Invalid Phone Number!');
        return false;
    }
}

const testVal = validation();
console.log(testVal);