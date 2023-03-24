function minimumBribes(q) {
  let chaotic = false
  var bribes = 0

  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i+1) > 2) { chaotic = true }
    for (let j = 0; j < i; j++) {
      if (q[j] > q[i]) { bribes++ }
    }
  }

  if(chaotic === true){
    console.log('Too chaotic')
    return 'Too chaotic'
  } else {
    console.log(bribes)
    return bribes
  }
}

module.exports = { minimumBribes }
