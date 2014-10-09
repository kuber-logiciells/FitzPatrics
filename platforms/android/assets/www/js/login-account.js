var haveloggedin=false;
function Login()
{
 var accountNumber=document.getElementById('input-account').value;
 var info=document.getElementById('info');
 if(!haveloggedin){
 if(accountNumber=='12345'){
 haveloggedin=true;
 info.innerHTML="Login successfull!";
 }
 else{
 info.innerHTML="Invalid account number";
 }
 }
 else{
 info.innerHTML="You have used your today's subscription";
 }
}