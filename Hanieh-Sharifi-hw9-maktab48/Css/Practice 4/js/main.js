$(function() {
    $.fn.incremental = function({counterMode, start, end, steps})
    {
        $(`#${counterMode}`).val(start);
        if (counterMode == 'numeric')
        {
            $('#counter-input .left').click(function() {
            let counterInput = $('.c-input').val();
            if (counterInput <= start)
            {
                alert("The End !");
            }
            else
            {
                $('.c-input').val(`${counterInput-steps}`);
            }
            })
            $('#counter-input .right').click(function() {
            let counterInput = $('.c-input').val();
            if (counterInput >= end)
            {
                alert("The End !");
            }
            else
            {
                $('.c-input').val(`${parseInt(counterInput)+steps}`)
            }
            });
        }
        else
        {
            let timeInput = $(`#${counterMode}`).val().split(':');
            start = start.split(":");
            start = start[0];
            end = end.split(":");
            end = end[0]
            timeInput[0] = parseInt(timeInput[0]);
            timeInput[1] = parseInt(timeInput[1]);
            $('#time-input .left').click(function() {
                if (timeInput[0] <= start && timeInput[1] == 0)
                {
                    alert("The End !");
                }
                else
                {
                    if(timeInput[1] == 0)
                    {
                        timeInput[0] -= 1;
                        timeInput[1] = 60-steps;
                    }
                    else
                    {
                        timeInput[1] -= steps;
                    }
                    $('.t-input').val(`${timeInput[0]}:${timeInput[1].toString().padStart(2, "0")}`)
                }
            });
            $('#time-input .right').click(function() {
                if (timeInput[0] >= end)
                {
                    alert("The End !");
                }
                else
                {
                    if(timeInput[1] == 60-steps)
                    {
                        timeInput[0] += 1;
                        timeInput[1] = 0;
                    }
                    else
                    {
                        timeInput[1] += steps;
                    }
                }
                $(`#${counterMode}`).val(`${timeInput[0]}:${timeInput[1].toString().padStart(2, "0")}`);
            });
        }
    }
    $('.form-control').before("<button class='btn left btn-secondary'>-</button>");
    $('.form-control').after("<button class='btn right btn-secondary'>+</button>");
    $('#time-input').incremental({
        counterMode: 'time',
        start: '06:00',
        end: '7:00',
        steps:15
    });
    $('#counter-input').incremental({
        counterMode: 'numeric',
        start: 5,
        end: 10,
        steps: 1
    });
})