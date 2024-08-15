let  v1=0,v2=0,v3=0,v4=0,res=0;

function uno (){
    document.getElementById("T1").value = document.getElementById("T1").value + "1";
}
function dos (){
    document.getElementById("T1").value = document.getElementById("T1").value + "2";
}
function tres (){
    document.getElementById("T1").value = document.getElementById("T1").value + "3";
}
function cuatro (){
    document.getElementById("T1").value = document.getElementById("T1").value + "4";
}
function cinco (){
    document.getElementById("T1").value = document.getElementById("T1").value + "5";
}
function seis (){
    document.getElementById("T1").value = document.getElementById("T1").value + "6";
}
function siete (){
    document.getElementById("T1").value = document.getElementById("T1").value + "7";
}
function ocho (){
    document.getElementById("T1").value = document.getElementById("T1").value + "8";
}
function nueve (){
    document.getElementById("T1").value = document.getElementById("T1").value + "9";
}
function cero (){
    document.getElementById("T1").value = document.getElementById("T1").value + "0";
}
function punto (){
    document.getElementById("T1").value = document.getElementById("T1").value + ".";
}
function suma (){
    v1=document.getElementById("T1").value;
    document.getElementById("T1").value = "";
    v3=parseFloat(v1);
    op=1;
}
function resta (){
    v1=document.getElementById("T1").value;
    if(v1!=""){
        document.getElementById("T1").value = "";
        v3=parseFloat(v1);
        op=2;
    }else{
        document.getElementById("T1").value = "-";
    }
    
}
function multiplicacion (){
    v1=document.getElementById("T1").value;
    document.getElementById("T1").value = "";
    v3=parseFloat(v1);
    op=3;
}
function división (){
    v1=document.getElementById("T1").value;
    document.getElementById("T1").value = "";
    v3=parseFloat(v1);
    op=4;
}
function igual (){
    

        switch (op) {
        
            case 1:
        
            v2= document.getElementById("T1").value;
            document.getElementById("T1").value = "";
            v4=parseFloat(v2);
        res= v3 + v4 ;
        document.getElementById("T1").value = res ;
                break;
        
        
        
                case 2:
                    v2= document.getElementById("T1").value;
            document.getElementById("T1").value = "";
            v4=parseFloat(v2);
        res= v3 - v4 ;
        document.getElementById("T1").value = res ;
                break;
        
        
        
                case 3:
                    v2= document.getElementById("T1").value;
            document.getElementById("T1").value = "";
            v4=parseFloat(v2);
        res= v3 * v4 ;
        document.getElementById("T1").value = res ;
        break;
        
        
                case 4:
                    v2= document.getElementById("T1").value;
                    document.getElementById("T1").value = "";
                    v4=parseFloat(v2);
            if (v2==0) {
                alert("no se puede dividir");
                document.getElementById("T1").value = "";
            } else {
                res=parseFloat(v1)/ parseFloat(v2);
                document.getElementById("T1").value = res ;
            }
                break;
            default:
        break;
        }
    }
var cl="";
function CE (){
    document.getElementById("T1").value = "";
}
function borrar(){
document.getElementById("T1").value = document.getElementById("T1").value.toString().slice(0,-1);     
}
function punto(){
    document.getElementById("T1").value = document.getElementById("T1").value + ("."); 

}

