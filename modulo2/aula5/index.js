function firstcall() {
    console.log('Call this first')
}

function secondcall() {
    firstcall()
}
secondcall()
function getfirstcall(firstfunction) { 
    firstfunction()
}
getfirstcall(secondcall)