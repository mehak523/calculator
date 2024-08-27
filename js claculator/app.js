function getnumber(num){
var result=document.getElementById('show');
result.value +=num;



}
function clearresult(){
    var result=document.getElementById('show');
    result.value="";
    




}
function getresult(){
    var result=document.getElementById('show');
result.value=eval(result.value);


}