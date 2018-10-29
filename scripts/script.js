$(function(){
  console.log("-- Hello World --");
  // Loading of Vector Map
  $('#canada-map').vectorMap({
    map: 'ca_lcc',
    // Prevent the labels from showing for each province
    onRegionTipShow: function(e, el, code){
      e.preventDefault();
    }
  });
  // Prevent the form from submitting
  $("form").submit(function(e){
      e.preventDefault();
  });
  //
  $('#answerBox').keypress(function(event){
    // console.log("-- Key Press Loaded --");
    console.log(String.fromCharCode(event.which));
    console.log("Value: ", $('#answerBox').val());
  });
});
