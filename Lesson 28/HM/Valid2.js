class Valid2 extends Valid{
    constructor(email, password, isValid, emailError, passwordError){
        super(email, password, isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate(){
        if(this.email == ''){
            this.isValid = false;
            this.emailError = 'email empty';
        } else {
            this.isValid = true;
        }

        if(this.password == '' || this.password.length < 6){
            this.isValid = false;
            this.passwordError = 'min length 6';
        } else {
            this.isValid = true;
        }
    }
}