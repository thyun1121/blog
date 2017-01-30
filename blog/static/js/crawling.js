$(window).load(function() {     
	$.getJSON('/root/tedProject/blog/static/item.json', function(data) {
		var html = '';
		$.each(data, function(index, val) {
			html += '<div class="entry">';
			html += '<h3 class="term">' + val.title+ '</h3>';
			html += '<div class="part">' + val.url + '</div>';
			html += '<div class="definition">';
			html += '</div>';
			html += '</div>';
		});
		console.log(html);
		$('#dictionary').html(html);
	});


}); 
