$(function() {
	console.log("REAdy")
	$('#sum').click(function(){
		
		$('#operaciones').parsley()


		var first_number = $('#first_number').val()
			second_number = $('#second_number').val()
			result = $('#result')

		console.log(first_number + " " + second_number)

	})
});