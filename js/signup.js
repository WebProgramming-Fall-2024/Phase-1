window.onload = function () {
    let sign_up = new SignUP();
    sign_up.init();
}
function SignUP(){
    this.init = function (){
        call_panel()
        createDatePicker()
    }
}