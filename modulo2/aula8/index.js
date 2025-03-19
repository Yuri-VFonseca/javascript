function dayornight(hour){
    let time = ''
    if(hour < 18 && hour >=6 ) {
        time = 'is day'}
    if (hour >= 18 || (hour < 6 && hour >= 0)){
        time = 'is night'}
    else{
        return 'ERROR'}
    return time
}
console.log(dayornight(11))
function legalage(age) {
    if(age > 18 && age < 116) { 
        console.log('Its legal age')
    }
    if(age < 18 && age > 0) { 
        console.log('Inst legal age')
    }
    else {
        return 'ERROR'
    }
}