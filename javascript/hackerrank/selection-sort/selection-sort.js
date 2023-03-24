function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let iMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[iMin] > arr[j]) iMin = j
    }

    if (iMin != i) {
      const temp = arr[i]
      arr[i] = arr[iMin]
      arr[iMin] = temp
    }
  }

  return arr
}

module.exports = { selectionSort }
