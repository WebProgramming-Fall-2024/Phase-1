window.onload = function () {
    let ques = new Question();
    ques.init();
}
function Question(){
    this.init = function (){
        call_panel()

        $("#add_btn_question").on('click',function (e){
            $('#addQuestion').modal('show')
        })
        $(".tet").on('click',function (e){
            $('#detailQuestion').modal('show')
        })
    }
}