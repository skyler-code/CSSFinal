console.log("javascript loaded...");

$(document).ready(function () {
	console.log("jquery loaded...");
	$('#application_form > h3').slice(1).addClass( "ui-state-disabled" );
	$('#authorizedtoworkinusradio').hide();
	$('#felony_explanation').hide();
	$('#previous_worker').hide();
	
	$( "#application_form" ).on( "accordionbeforeactivate", function (){
		return ! arguments[1].newHeader.hasClass( "ui-state-disabled" );
	});
	
	$('#state_select_menu').selectmenu({
		width: 75
	}).selectmenu("menuWidget").addClass("overflow");
	
	$('.datepicker').datepicker({dateFormat: 'mm/dd/yy'});
	
	$('.applicationradio > input').checkboxradio();
	
	$("#application_form").accordion({
		heightStyle: "content",
	});
	$("#employer_accordion").accordion({
		heightStyle: "content",
	});
	
	$(".required_label").prepend("*".fontcolor("red"));
	
	
	$("#personal_details").validate({ errorPlacement: function(error, element) {}});
	$("#education_details").validate({ errorPlacement: function(error, element) {} });
	$("#social_security_number").rules("add", {number: true, maxlength: 9, minlength: 9});
	$("#desired_salary").rules("add", {number: true});
	$("#whendidyouworkforthiscompany").rules("add", {required: '#haveyouworkedforthiscompany-yes:checked'});
	$("#felonyexplanation").rules("add", {required: '#haveyoubeenconvictedofafelony-yes:checked'});
	$("#previous_worker").rules("add", {required: '#haveyouworkedforthiscompany-yes:checked'});
	
	$("#uscitizen-no").click(function(){
		$("#authorizedtoworkinusradio").show();
	});
	$("#uscitizen-yes").click(function(){
		$("#authorizedtoworkinusradio").hide();
	});
	
	$("#haveyouworkedforthiscompany-yes").click(function(){
		$("#previous_worker").show();
	});
	$("#haveyouworkedforthiscompany-no").click(function(){
		$("#previous_worker").hide();
	});
	
	$("#haveyoubeenconvictedofafelony-no").click(function(){
		$("#felony_explanation").hide();
	});
	$("#haveyoubeenconvictedofafelony-yes").click(function(){
		$("#felony_explanation").show();
	});
	
	$('#personalProceed').click(function(){
		
		//if( $('#personal_details').valid() == true ) {
			$('#education_tab').removeClass("ui-state-disabled");
			$("#personal_details_tab").addClass( "ui-state-disabled" );
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
	
	$('#educationProceed').click(function(){
		
		//if( $('#education_details').valid() == true ) {
			$('#references_tab').removeClass("ui-state-disabled");
			$('#education_tab').addClass("ui-state-disabled");
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
	
	$('#referencesProceed').click(function(){
		
		//if( $('#education_details').valid() == true ) {
			$('#previous_employment_tab').removeClass("ui-state-disabled");
			$('#references_tab').addClass("ui-state-disabled");
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
	$('#employersProceed').click(function(){
		
		//if( $('#education_details').valid() == true ) {
			$('#signature_tab').removeClass("ui-state-disabled");
			$('#previous_employment_tab').addClass("ui-state-disabled");
			var activeTab = $( "#application_form" ).accordion( "option", "active" );
			$('#application_form').accordion("option", "active", activeTab + 1);
		//}
	});
	
	$('#submitApplication').click(function(){
		$("#dialog-confirm").dialog('open');
	});
	
	$( "#dialog-confirm" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
				"Submit Application": function() {
				$( this ).dialog( "close" );
			},
			Cancel: function() {
			$( this ).dialog( "close" );
			}
			}
	});
	
});

