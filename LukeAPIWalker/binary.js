function binToDec(arr) {
    let count = 0;
    power = 0;
    for(let i = arr.length -1; i >=0 ; i--) {
        if(arr[i] ==1){
            count += Math.pow(2, power);
            console.log(count, "c");
            power++;
        }
        else {
            power++;
            console.log(power, "p")
        }
    }
    return count;
}
console.log(binToDec("1010101"));