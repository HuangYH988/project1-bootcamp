const costMP = [160, 120, 100, 100, 200, 60, 100, 200, 100, 200];
const dmgUranus = [810, 946, 976, 875, 1040, 650, 912, 2252, 0, 30];

var main = function(input){
    
    
    var dpm = dmgUranus[input]/costMP[input];
    var output = dpm; 
    return `The damage per mp is ${output}.`;
}