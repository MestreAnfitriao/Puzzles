function senha(){
    let s = prompt("SENHA:");
    let sen = s.toUpperCase();
    if(sen=='SENHA123'){
        morse1();
    }else if(sen=='VAN GOGH'){
        senha2();
    }else if(sen=='OCTAVIANUS AUGUSTUS'){
        senha3();
    }else if(sen=='FALANDO NA BANANA'){
        window.location.href = "FINAL.html";
    }else if(sen=='VITOR'){
        window.location.href = "desafios.html";
    }
   
   
    
}
function morse1(){
    
    window.location.href = "foto.html";
  
 
}
function senha2(){
    window.location.href = "imperador.html";
}
function senha3(){
    window.location.href = "YOUTUBE.html";
}