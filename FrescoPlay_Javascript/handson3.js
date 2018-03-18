function fibonacciSequence(input) {
    var output = new Array();
    
    var ip1 = 0;
    var ip2 = 1;
    output.push(ip1);
    output.push(ip2);
    for(i=1; i<input; i++){
        ip1 = output[output.length-2];
        ip2 = output[output.length -1];
        output.push(ip1 + ip2);
    }
    return output;
}