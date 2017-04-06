var jsonTemp;
var indexActualStation = -1;
var map;



$(function () {
    var availableTags = [];
   

    $.ajax({
        'async': false,
        'url': "https://secure.bixi.com/data/stations.json",
        'success': function (data) {
            jsonTemp = data.stations;
            for (i = 0; i < jsonTemp.length; i++) {
                availableTags.push(jsonTemp[i].s);
            }
        }
    });


    $("#tags").autocomplete({
        source: availableTags
    });



});



$(document).ready(function () {
    // $('#example').DataTable();

    $('#example').dataTable({
        "aaData": jsonTemp,
        "aoColumns": [
            { "mDataProp": "n" },
            { "mDataProp": "s" },
            { "mDataProp": "ba" },
            { "mDataProp": "da" },
            { "mDataProp": "b" },
            { "mDataProp": "su" }
        ]
    });
});


function myFunction() {
    var x = document.getElementById("tags").value;
    for (i = 0; i < jsonTemp.length; i++) {
        if (jsonTemp[i].s == x) {

            document.getElementById("StationToShow").innerHTML = jsonTemp[i].s;
            document.getElementById("IDToShow").innerHTML = jsonTemp[i].n;

            document.getElementById("dispVelosToShow").innerHTML = jsonTemp[i].ba;
            if (jsonTemp[i].ba > 0) {
                document.getElementById("dispVelosToShow").style.backgroundColor = '#29B873';
            } else {
                document.getElementById("dispVelosToShow").style.backgroundColor = '#EE644C';
            }

            if (jsonTemp[i].b) {
                document.getElementById("bloqueeToShow").innerHTML = "Oui";
                document.getElementById("bloqueeToShow").style.backgroundColor = '#EE644C';
            } else {
                document.getElementById("bloqueeToShow").innerHTML = "Non";
                document.getElementById("bloqueeToShow").style.backgroundColor = '#29B873';
            }

            document.getElementById("dispBornesToShow").innerHTML = jsonTemp[i].da;
            if (jsonTemp[i].da > 0) {
                document.getElementById("dispBornesToShow").style.backgroundColor = '#29B873';
            } else {
                document.getElementById("dispBornesToShow").style.backgroundColor = '#EE644C';
            }

            if (jsonTemp[i].su) {
                document.getElementById("suspendusToShow").innerHTML = "Oui";
                document.getElementById("suspendusToShow").style.backgroundColor = '#EE644C';
            } else {
                document.getElementById("suspendusToShow").innerHTML = "Non";
                document.getElementById("suspendusToShow").style.backgroundColor = '#29B873';
            }

            document.getElementById("indispVelosToShow").innerHTML = jsonTemp[i].bx;

            if (jsonTemp[i].m) {
                document.getElementById("horsServiceToShow").innerHTML = "Oui";
                document.getElementById("horsServiceToShow").style.backgroundColor = '#EE644C';
            } else {
                document.getElementById("horsServiceToShow").innerHTML = "Non";
                document.getElementById("horsServiceToShow").style.backgroundColor = '#29B873';
            }

            document.getElementById("indispBornesToShow").innerHTML = jsonTemp[i].dx;
            indexActualStation = i;

            updateMapMap(jsonTemp[i].la, jsonTemp[i].lo);
        }
    }

}




function updateMapMap(lat,lng) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lng},
          zoom: 16
        });
        var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: map
        });
      }


