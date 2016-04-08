(function(){

	//call the UI page "home"
	App.load('home');


	setInterval(function(){
	
		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/BLE", function( data ) {
			
			$("#sensordata").html(data);
			console.log(data)
			
		});
		
		
	}, 1000);
})();
