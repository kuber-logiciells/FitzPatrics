var haveloggedin=false;
function Login()
{
 var code=document.getElementById('input-barcode').value;
 var info=document.getElementById('info');
 var divstyle=document.getElementById('deviceready');
 if(!haveloggedin){
 if(code.length>0){
 haveloggedin=true;
 info.innerHTML="Login successfull!";
 divstyle.toggleClass('alert-success');
 }
 else{
 info.innerHTML="Invalid code retry";
 }
 }
 else{
 info.innerHTML="You have used your today subscription";
 }
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        app.scan();
        //app.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var receivedElement = parentElement.querySelector('.received');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    
    scan: function() {
        cordova.plugins.barcodeScanner.scan( function (result) {  

           console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
            document.getElementById("input-barcode").value = result.text;
            console.log(result);
        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
    },

    encode: function() {
        cordova.plugins.barcodeScanner.encode(scanner.Encode.TEXT_TYPE, "http://www.nhl.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

    }

};