/* 선분 3개가 평행하게 놓여 있습니다. 
세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 
두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요. */

function solution(lines)
{
    let answer=0;
    let arr = new Array(200);
    for(let i = 0 ; i<arr.length ; i++)
    {
        arr[i]=0;
    }
    for(let i = 0 ; i<lines.length ; i++)
    {
        for(let k = lines[i][0] ; k<lines[i][1] ; k++)
        {
            arr[k+100] ++;
        }
    }
    for(let i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]>1)
        {
            answer++;
        }
    }
    return answer;
}

console.log(solution([[0, 5], [3, 9], [1, 10]]));