/* 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 
동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
같은 식이라면 가장 짧은 수식을 return 합니다. */

function solution(polynomial)
{
    let num =0;
    let x =0;
    polynomial = polynomial.split('+');
    polynomial.forEach(e => {
        if(e==Number(e)) num += Number(e);
        else x += Number(e.replace('x',''));
        if(Number(e.replace('x',''))==0) x+=1;
    });
    if(x==0) return num;
    if(x==1&&num==0) return 'x';
    if(num==0) return x+'x';
    return x!=1? x+'x'+ ' + '+num:'x'+ ' + '+num;
}

console.log(solution("x+x+x"));
console.log(solution("12+4"));
console.log(solution("3x + 7 + x"));
console.log(solution(""));