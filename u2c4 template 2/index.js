// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",mplfunc)
var mplarr=JSON.parse(localStorage.getItem("schedule"))||[];
function mplfunc(){
    event.preventDefault();

    mplobj={
        matchno:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
       

    }
    // console.log(mplobj)
    mplarr.push(mplobj)
    console.log(mplarr)
    localStorage.setItem("schedule",JSON.stringify(mplarr))
    window.location.href="matches.html"

}