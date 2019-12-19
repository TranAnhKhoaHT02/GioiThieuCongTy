//Google map
//var map;
//$(function() {
//      if (GBrowserIsCompatible()) {
//        map = new GMap2(document.getElementById("map_canvas"));
//        map.setCenter(new GLatLng(20.6492996, 106.0571899), 12);
//        map.openInfoWindowHtml(new GLatLng(20.6492996, 106.0571899), "PhoHienTravel");
//        //var myWife = new GLatLng(20.8859997, 106.4443054);
//        map.setUIToDefault();
//      }
//    }
//)
//function codeAddress() {
//    var address = document.getElementById("address").value;
//    var gcl = new GClientGeocoder();
//    gcl.getLatLng(address, function(pos)
//    {
//      map.setCenter(pos);
//    });
// }
//
$(function() {
$(".drag_main").sortable({
			revert: true,
			accept: 'main_left_drag',
			connectWith: '.drag_main',
			placeholder: 'module_place_holder',
			opacity: 0.5 ,
			handle: '.handle_drag',
			update: function(){
			}
		});
});
$(function(){
    $(".drag_main h3 a").click(function(){
     if($(this).parent().next().is(":hidden")){
            $(this).removeClass('main_left_sh').addClass('main_left_h');
            $(this).parent().next().slideDown("slow");
        }
        else{
            $(this).removeClass('main_left_h').addClass('main_left_sh');
            $(this).parent().next().slideUp("slow");
         }
    });
});
$(function(){
	$('#sliding-navigation li.sliding-element a').each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingLeft: 25 }, 200);
		},		
		function()
		{
			$(this).animate({ paddingLeft: 15 }, 200);
		});
	});
})