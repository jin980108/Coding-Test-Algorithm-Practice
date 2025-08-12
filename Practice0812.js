//등차수열의 특정한 합만 구하기

function solution(a, d, included) {
  const sequence = Array.from({ length: included.length }, (_, i) => a + d * i);

  const trueIndexes = included
    .map((bool, idx) => (bool === true ? idx : -1))
    .filter((idx) => idx !== -1);

  return trueIndexes.reduce((acc, idx) => acc + sequence[idx], 0);
}


//주사위게임2

function solution(a, b, c) {
    let sum1 = a + b + c;
    let sum2 = a * a + b * b + c * c;
    let sum3 = a ** 3 + b**3 + c**3;

    if (a === b && b === c) 
        return sum1*sum2*sum3;
     else if (a === b || a === c || b === c) 
        return sum1*sum2;
     else 
        return sum1;

}


//
