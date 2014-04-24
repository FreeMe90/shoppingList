$(document).ready(function() {
	var xRemove	= "<div class='del'></div>";
	var checkStrike	= "<div class='strike'></div>";

//* To show/hide instructions to users
	$(".buttons").find("li:first").on("click", function() {
		$(".instructionsBox").toggle();
	});

//* To change classes when strikethrough selected
	$(".container").on("click", ".strike", function() {
		$(this).closest("li").toggleClass("items");
		$(this).closest("li").toggleClass("itemsOFF");
	});

//* To add items to list
	$("input").keydown(function(enter) {
		if(enter.keyCode == 13) {
			var shopItem = $("input").val();
			$(".container").append("<li class='items'>" + xRemove + shopItem + checkStrike + "</li>");
			$("input").val("");
		}
	});

//* To remove items from the list
	$(".container").on("click", ".del" ,function() {
		$(this).closest("li").remove();
	});

//* To reset the list
	$(".reset").on("click", function() {
		$(".container").empty();
	});

//* To sort items in the list
	$(".container").sortable();

});