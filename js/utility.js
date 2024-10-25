
function call_panel(){
    set_event()
}
function set_event(){
    //  ucon_eye
    $('.pass-type').on('click', function (e) {
        var x = e.target.parentNode.parentNode.querySelector("input");
        if (x.type === "password") {
            x.type = "text";
            e.target.parentNode.querySelector("i").classList.add("icon-eye");
            e.target.parentNode.querySelector("i").classList.remove("icon-eye-close");
        } else {
            x.type = "password";
            e.target.parentNode.querySelector("i").classList.add("icon-eye-close");
            e.target.parentNode.querySelector("i").classList.remove("icon-eye");
        }
    });
}

function createDatePicker() {
    // let elem = $(".date");
    // if (selector_class !== undefined) {
    //     console.log(selector_class);
    //     elem = $("." + selector_class);
    // }
    // let date = $(elem).persianDatepicker({
    //     "inline": false,
    //     "format": "L",
    //     "viewMode": "day",
    //     "initialValue": false,
    //     "minDate": 193477977505,
    //     "maxDate": 3064431977580,
    //     "autoClose": true,
    //     "position": "auto",
    //     "altField": "#altfieldExample",
    //     "onlyTimePicker": false,
    //     "onlySelectOnDate": true,
    //     "calendarType": "persian",
    //     "inputDelay": 800,
    //     "observer": false,
    //     "calendar": {
    //         "persian": {
    //             "locale": "fa",
    //             "showHint": true,
    //             "leapYearMode": "astronomical"
    //         },
    //         "gregorian": {
    //             "locale": "en",
    //             "showHint": true
    //         }
    //     },
    //     "navigator": {
    //         "enabled": true,
    //         "scroll": {
    //             "enabled": false
    //         },
    //         "text": {
    //             "btnNextText": "<",
    //             "btnPrevText": ">"
    //         }
    //     },
    //     "toolbox": {
    //         "enabled": true,
    //         "calendarSwitch": {
    //             "enabled": true,
    //             "format": "MMMM"
    //         },
    //         "todayButton": {
    //             "enabled": true,
    //             "text": {
    //                 "fa": "امروز",
    //                 "en": "Today"
    //             }
    //         },
    //         "submitButton": {
    //             "enabled": false
    //         },
    //         "text": {
    //             "btnToday": "امروز"
    //         }
    //     },
    //     "dayPicker": {
    //         "enabled": true,
    //         "titleFormat": "YYYY MMMM"
    //     },
    //     "monthPicker": {
    //         "enabled": true,
    //         "titleFormat": "YYYY"
    //     },
    //     "yearPicker": {
    //         "enabled": true,
    //         "titleFormat": "YYYY"
    //     },
    //     "responsive": true
    // });

    jalaliDatepicker.startWatch({
        minDate: "attr",
        maxDate: "attr",
        minTime: "attr",
        maxTime: "attr",
        hideAfterChange: true,
        autoHide: true,
        showTodayBtn: true,
        showEmptyBtn: true,
        topSpace: 10,
        bottomSpace: 30,
        dayRendering(opt, input) {
            return {
                isHollyDay: opt.day == 1
            }
        }
    })
}
