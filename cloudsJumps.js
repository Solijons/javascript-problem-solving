function cloudsJumps(clouds) {
  let jumps = 0;
  let i = 0;

  while (i < clouds.length - 1) {
    if (i + 2 >= clouds.length || clouds[i + 2] === 1) {
      i++;
      jumps++
    } else {
      i = i + 2;
      jumps++
    }
  }
  return jumps;
}

console.log(cloudsJumps([0, 0, 1, 0, 0, 1, 0]));

