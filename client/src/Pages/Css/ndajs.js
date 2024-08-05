import React from 'react'

function ndajs() {
    function check(){
        var input=document.getElementById('fname');
        // var input=document.getElementsById('fcourse');
        if(input.value !== " "){
            ecertificate();
    
        }
        else{
            alert("input field empty");
        }
        
        
    }
    function ecertificate(){
    
        var cname=document.getElementById("fname").value;
        const caddr=document.getElementById("faddress").value;
        var cemail=document.getElementById("femail").value;
        var cmobile=document.getElementById("fmobile").value;
        
        
        // document.getElementsByClassName('.add')[0].innerHTML=caddress;
        // document.getElementById('#em').innerHTML=cemail;
        // document.getElementById('#mb').innerHTML=cmobile;
      
        const doc =  document.querySelectorAll('.n');
    
        console.log(doc);
        for(let i=0;i<doc.length;i++){
            doc[i].innerHTML = cname;
        }
        const ad=document.querySelector('#add');
        ad[0].innerHTML=caddr;
       
    }
}

export default ndajs