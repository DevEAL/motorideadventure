
//  is used only in index.html to operate the date selection entry, on the "modal motorcycle"
$( document ).ready(function() {
    $('.js-date').datepicker({
        format: "dd/mm/yyyy",
        startDate: "01/01/2019",
        endDate: "01/01/2069",
        todayBtn: "linked",
        language: "es"
    });
  });
  