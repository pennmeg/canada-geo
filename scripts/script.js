$(function(){
  console.log("-- Hello World --");
  $('#canada-map').vectorMap({
    map: 'ca_lcc',
    onRegionTipShow: function(e, el, code){
      e.preventDefault();
    }
  });
});
