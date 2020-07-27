function repeatedString(s, n) {
  let number1 = n / s.length;
  let number2 = n % s.length;

  let countA = 0;
  let countB = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      countA++;
      if (i < number2) {
        countB++;
      }
    }
  }
  return countA * number1 + countB;
}
console.log(repeatedString('aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa', 942885108885));
