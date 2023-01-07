function analyzeArray(arr) {
    return { 
        Average: arr.reduce((a,b) => a + b)/arr.length,
        Min: Math.min(...arr),
        Max: Math.max(...arr),
        Length: arr.length,

    }
}

module.exports = { analyzeArray };