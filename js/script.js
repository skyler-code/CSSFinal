console.log("javascript loaded...");

$(document).ready(function () {
	console.log("jquery loaded...");
	$('#application_form > h3').slice(1).addClass( "ui-state-disabled" );
	
	
	$( "#application_form" ).on( "accordionbeforeactivate", function (){
		return ! arguments[1].newHeader.hasClass( "ui-state-disabled" );
	});
	
	$('#state_select_menu').selectmenu({
		width: 75
	}).selectmenu("menuWidget").addClass("overflow");
	
	$('#dateavailable').datepicker({dateFormat: 'mm/dd/yy'});
	
	$('.applicationradio > input').checkboxradio();
	
	$("#application_form").accordion({
		heightStyle: "content",
	});
	
	
	$("#personal_details").validate({ errorPlacement: function(error, element) {} });
	$("#education_details").validate({ errorPlacement: function(error, element) {} });
	
	$('#personalProceed').click(function(){
		
		//if( $('#personal_details').valid() == true ) {
			$('#education_tab').removeClass("ui-state-disabled");
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
	
	$('#educationProceed').click(function(){
		
		//if( $('#education_details').valid() == true ) {
			$('#references_tab').removeClass("ui-state-disabled");
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
	
	$('#referencesProceed').click(function(){
		
		//if( $('#education_details').valid() == true ) {
			$('#previous_employment_tab').removeClass("ui-state-disabled");
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
});