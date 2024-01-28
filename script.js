function cal () {
    
    let yAge = $(".input3").val();
    let pAge = $(".input4").val();


let allInput = (yAge * pAge);
if (allInput > 0) {
    const randomNum = Math.floor(Math.random(allInput) * 200);
    let totalInput= randomNum / 2;
    return totalInput;
} else {
    $(".totalLove").text("")
}
    
}




$("button").click(() =>{
    let t = cal()

    let yName = $(".input1").val();
    let pName = $(".input2").val();
    let firstCha = yName.slice(0,1).toUpperCase();
    let lastCha = yName.slice(1,yName.length).toLowerCase();
    let firstParCha = pName.slice(0,1).toUpperCase();
    let lastParCha = pName.slice(1,pName.length).toLowerCase();
    let yNameJoin = firstCha + lastCha;
    let pNameJoin = firstParCha + lastParCha;
    

    
    if (t <= 0) {
        $(".small").text("No input" + " refresh page to start again")
         
    }
    if (t >= 1 && t <= 10 && yNameJoin && pNameJoin) {
        $(".small").text(yNameJoin + " 💍 " + pNameJoin + " your love score is % " + t +  " is Poor 😟")
    }

     if (t >= 11 && t <= 39 && yNameJoin && pNameJoin) {
            $(".small").text(yNameJoin + " 💍 " + pNameJoin + " your love score is % " + t +  " you are Cute 😊")
     }
    if (t >= 40 && t <= 95 && yNameJoin && pNameJoin) {
            $(".small").text(yNameJoin + " 💍 " + pNameJoin + " your love score is % " + t +  " you are Perfect 😉")
    }
    if (t >= 96 && yNameJoin && pNameJoin) {
        $(".small").text(yNameJoin + " 💍 " + pNameJoin + " your love score is % " + t +  " you are Love birds 👩‍❤️‍💋‍👨")
    }
    
  
   event.preventDefault();
   $(".cl").val("")

})

