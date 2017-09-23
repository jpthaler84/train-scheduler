// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBH2rCOGB44-rL7UI7rdnQAkcPNkL17f5U",
    authDomain: "employee-data-activity-c05c1.firebaseapp.com",
    databaseURL: "https://employee-data-activity-c05c1.firebaseio.com",
    projectId: "employee-data-activity-c05c1",
    storageBucket: "employee-data-activity-c05c1.appspot.com",
    messagingSenderId: "84125699001"
  };

  firebase.initializeApp(config);

// strong database in a variable 
var database = firebase.database();

$("#add-employee").on("click", function(event) {

	event.preventDefault();

	var train = $("#train-input").val().trim();
    var track = $("#track-input").val().trim();
    var departure = $("#departure-input").val().trim();
    var speed = $("#speed-input").val().trim();

    // console.log(train);
    // console.log(track);
    // console.log(departure);
    // console.log(speed);

    database.ref().push({
    	train: train,
    	track: track,
    	departure: departure,
    	speed: speed
    })



})

    // click listerner for "value"
    database.ref().on("child_added", function(snapshot) {
    // using .val() to get JS object of data
     console.log(snapshot.val());

    var data = snapshot.val();
    console.log(data.train);
    console.log(data.track);
    console.log(data.departure);
    console.log(data.speed);

      // update UI

    var tableRow = $("<tr>");

    var trainData = $("<td>").text(data.train);
    var trackData = $("<td>").text(data.track);
    var departureData = $("<td>").text(data.departure);
    var monthsWorked = $("<td>").text("math");
    var speedData = $("<td>").text(data.speed);
    var totalBilled = $("<td>").text("math");

    tableRow.append(trainData);
    tableRow.append(trackData);
    tableRow.append(departureData);
    tableRow.append(monthsWorked);
    tableRow.append(speedData);
    tableRow.append(totalBilled);


    $("#table-body").append(tableRow);


    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });