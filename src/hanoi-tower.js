module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    
    let countSteps =(Math.pow(2, disksNumber) - 1) ;
    let res = countSteps / (turnsSpeed / 3600);

    let obj = {
        turns: countSteps,
        seconds: res
    }

    return obj;
}