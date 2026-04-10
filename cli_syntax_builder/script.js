function generate(){
let service=document.getElementById('a').value||"";
let action=document.getElementById('b').value||"";
let params=document.getElementById('c').value||"";

let cmd = "aws " + service + " " + action + " " + params;

let insights = "";
if(!service) insights += "Missing service.<br>";
if(!action) insights += "Missing action.<br>";
if(params.length < 3) insights += "Consider adding parameters.<br>";

document.getElementById('result').innerHTML =
"<b>Command:</b><br>" + cmd + "<br><br>" + insights;
}
