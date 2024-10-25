window.onload = function () {
    let prof = new Profile();
    prof.init();
}
function Profile(){
    this.init = function (){
        call_panel()

        $(".tet").on('click',function (e){
            $('#detailQuestion').modal('show')
        })
    }
}