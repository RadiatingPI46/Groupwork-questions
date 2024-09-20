// Q4 ----------------------------------------------------------------------------------------------------------------
let Workstatus="Selfemployed"
let creditscore=890
let Inbusiness=3
if(Workstatus==="Selfemployed" && creditscore>650 && Inbusiness>2){
    console.log("Eligible");
    
}
else if(Workstatus==="Employed" && creditscore>700){
    console.log("Eligible");
    
}
else{
    console.log("Uneligible");
    
}