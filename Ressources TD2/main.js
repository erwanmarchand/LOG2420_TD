var w;

$(function() {

$("#buttonAnnuler").prop('disabled', true);
$("#buttonCompter").on("click",startWorker);
$("#buttonAnnuler").on("click",stopWorker);

});



function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("worker.js");
		$("#buttonCompter").prop('disabled', true);
		$("#buttonAnnuler").prop('disabled', false);
		var text = $("#myText").val();
		w.postMessage(text);
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data[0];
	    document.getElementById("progressBar").innerHTML = event.data[1]+"%";
	    $("#progressBar").css('width', event.data[1] + "%");
	    if (event.data[1]==100){
			$("#buttonCompter").prop('disabled', false);
			$("#buttonAnnuler").prop('disabled', true);


    w = undefined;	
		}
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}
