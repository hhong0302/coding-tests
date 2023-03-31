/* 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 
분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. */

function gcd(a, b) //최대공약수
{
    let r
    while (b != 0) {
      r = a % b
      a = b
      b = r
    }
    return a
}

function solution(numer1,denom1,numer2,denom2)
{
    let numer = numer1*denom2+numer2*denom1;
    let denom = denom1*denom2;
    let big,small;
    if(numer>big)
    {
        big = numer;
        small = denom;
        return [big/gcd(big,small),small/gcd(big,small)];
    }
    else
    {
        big = denom;
        small = numer;
        return [small/gcd(big,small),big/gcd(big,small)];
    }
    
}

console.log(solution(4,49,1,7));