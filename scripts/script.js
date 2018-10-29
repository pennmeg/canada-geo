$(function(){
  console.log("-- Hello World --");
  // ----- Loading of Vector Map
  $('#canada-map').vectorMap({
    map: 'ca_lcc',
    // Prevent the labels from showing for each province
    onRegionTipShow: function(e, el, code){
      e.preventDefault();
    }
  });
  // ----- List of provinces
  var provinces = [
    "British Columbia",
    "Alberta",
    "Manitoba",
    "Saskatchewan",
    "Ontario",
    "Quebec",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "New Brunswick",
    "Prince Edward Island",
    "Yukon",
    "North West Territories",
    "Nunavut"
  ];
  // ----- Prevent the form from submitting / reloading
  $("form").submit(function(e){
      e.preventDefault();
  });
  // ----- Checking the answer
  $('#answerBox').keypress(function(event){
    // console.log(String.fromCharCode(event.which));
    var checkAnswer = $('#answerBox').val();
    // console.log("Value: ", $('#answerBox').val());
    checkAnswer = checkAnswer.toLowerCase();
    $.each(provinces,function(index,item){
       provinces[index] = item.toLowerCase();
       if (checkAnswer == item) {
         console.log(item);
         document.getElementById('answerBox').value='';
       }
    });
  });
});
