module.exports = function transform(arr) {

    if (Array.isArray(arr) === false) {
        throw new Error();
    }
    
    let arr2 = [];
  
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            
            case '--double-next':
                arr[i+1] !== undefined ? arr2.push(arr[i+1]) : '';
                break;

            case '--double-prev':
                arr[i-1] !== undefined ? arr2.push(arr[i-1]) : '';
                break;

            case '--discard-next':
                i++;
                break;

            case '--discard-prev':
                arr2.pop();
                break;

            default:
                arr2.push(arr[i]);
        }}

    return arr2;
};
