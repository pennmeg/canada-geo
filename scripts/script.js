$(function(){
  console.log("-- Hello World --");
  // ----- Loading of Vector Map
  $('#canada-map').vectorMap({
    map: 'ca_lcc',
    // Prevent the labels from showing for each province
    onRegionTipShow: function(e, el, code){
      e.preventDefault();
    },
    regionStyle: {
      initial: {
        fill: '#B8E186'
      },
      selected: {
        fill: '#F4A582'
      }
    }
  });
  // ----- List of provinces
  var provinces = {
    "British Columbia": "CA-BC",
    "Alberta": "CA-AB",
    "Manitoba": "CA-MB",
    "Saskatchewan": "CA-SK",
    "Ontario": "CA-ON",
    "Quebec": "CA-QC",
    "Newfoundland and Labrador": "CA-NL",
    "Nova Scotia": "CA-NS",
    "New Brunswick": "CA-NB",
    "Prince Edward Island": "CA-PE",
    "Yukon": "CA-YT",
    "North West Territories": "CA-NT",
    "Nunavut": "CA-NU"
  };
  // ----- Prevent the form from submitting / reloading
  $("form").submit(function(e){
      e.preventDefault();
  });
  // ----- Checking the answer
  $('#answerBox').keypress(function(event){
    // console.log(String.fromCharCode(event.which));
    var checkAnswer = $('#answerBox').val();
    // console.log("VALUE: ", $('#answerBox').val());
    checkAnswer = checkAnswer.toLowerCase();
  //   console.log("LOWERCASE VAL: ", checkAnswer);
    for(var key in provinces) {
      key = key.toLowerCase();
      if (checkAnswer == key) {
        // console.log("LOWERCASE KEY: ", key);

        document.getElementById('answerBox').value='';
      }
    }
  });
});
