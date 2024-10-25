// Swal.fire({
//     title: 'Settings',
//     icon: 'question',
//     html: 'sad',
//     showCloseButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Save',
//
//     willOpen: () => {
//         var ss = document.createElement('link');
//         // alert(1)
//         ss.rel = "stylesheet";
//         if (5888<74) {
//             ss.href = "css/lib/dark.css";
//         } else {
//             ss.href = "css/lib/material-ui.css";
//         }
//         document.head.appendChild(ss);
//     }
// })
window.onload = function () {
    let home = new Index();
    home.init();
}
function Index(){
    this.init = function (){

    }
}