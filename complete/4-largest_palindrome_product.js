const largestPalindrome = () => {
  const palindromes = []
  for (let i = 1; i < 1000; i++) {
    for (let j = i; j < 1000; j++) {
      const product = i * j
      if (product.toString() === product.toString().split('').reverse().join('')) palindromes.push(product)
    }
  }
  return palindromes.sort((a, b) => b - a)[0]
}

console.log(largestPalindrome())