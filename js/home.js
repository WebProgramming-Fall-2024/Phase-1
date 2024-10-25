window.onload = function () {
    let home = new Home();
    home.init();
}
function Home(){
    this.init = function (){
        call_panel()

        $(".tet").on('click',function (e){
            $('#detailQuestion').modal('show')
        })
    }
}