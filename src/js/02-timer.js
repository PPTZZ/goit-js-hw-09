import flatpickr from "flatpickr";

flatpickr('input#datetime-picker', {
    enableTime:true,
    time_24hr:true,
    allowInput:true,
    altFormat:"d M Y H:i",
    dateFormat: 'Y-m-d H:i'
});