window.onload = function () {
    let cat = new Category();
    cat.init();
}
function Category(){
    this.init = function (){
        call_panel()

        $("#add_btn_category").on('click',function (e){
            $('#addCategory').modal('show')
        })
    }
}