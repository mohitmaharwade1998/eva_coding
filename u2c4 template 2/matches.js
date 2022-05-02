// write js code here corresponding to matches.html

var mplarr=JSON.parse(localStorage.getItem("schedule"));

displaydata(mplarr);


var matchesarr=JSON.parse(localStorage.getItem("favourites"))||[];

function displaydata(data){
    
    data.forEach(function(elem){

        
    
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchno;

        var td2=document.createElement("td");
        td2.innerText=elem.teamA;

        var td3=document.createElement("td");
        td3.innerText=elem.teamB;

        var td4=document.createElement("td");
        td4.innerText=elem.date;

        var td5=document.createElement("td");
        td5.innerText=elem.venue;

        var td6=document.createElement("td");

        td6.innerText="favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            favouritesfun(elem)
        });


        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        

    });

}

function favouritesfun(elem){
    matchesarr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(matchesarr))
    window.location.href="favourites.html"

}

