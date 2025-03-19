const everybodysee = 'Everybody sees this variable of global scope'
function runglobalscope() { 
    console.log(everybodysee)
}
function runlocalscope() { 
    const avaibleinlocalscope = 'Only those inside the function block can see this variable'
    console.log(avaibleinlocalscope)
    function callinscopte() {
        console.log('In scopte =>', avaibleinlocalscope)
    }
    callinscopte()
}
runglobalscope()