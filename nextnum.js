function solution(common)
{
    let answer=0;

    if(common[1]-common[0]==common[2]-common[1])
    {
        answer = common[common.length-1]+common[1]-common[0];
    }
    else
    {
        answer = common[common.length-1]*(common[1]-common[0]);
    }

    return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
console.log(solution([3,6,9]));