function solution(n) {
    let answer = [];
    const leng = (n+'').length;
    for(let i=0;i<leng;i++)
        {
            answer[i]=n%10;
            n=parseInt(n/10);
        }
    return answer;
}

console.log(solution(12345));