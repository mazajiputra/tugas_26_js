var array1 = [2,39,76,50,9,7,41,2,24,1,16];

function tugas(data) {
    data.forEach(function(item,index,array){
        
        if(isFinite(item) ==true){
            var str= "NOT Infinity";
        }else{
            var str= "Infinity";}

        console.log("Angka",item,str);
    })
}

tugas(array1)