/* 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 
최빈값이 여러 개면 -1을 return 합니다. */

function solution(array)
{
    array = array.sort();
    let answer =0;
    let max = 0;
    for(let i = 0 ; i<1000 ; i++)
        {
            let len = array.slice(array.indexOf(i),array.lastIndexOf(i)+1).length;
            if(max<len)
            {
                answer = i;
                max = len;
            }
        }
    for(let i = 0 ; i<1000;i++)
    {
        if(i!=answer && max == array.slice(array.indexOf(i),array.lastIndexOf(i)+1).length)
        {
            return -1;
        }
    }
    return answer;
}

console.log(solution([1,1,2,2,3 ,3 ,3,3,4,4,4,4,4,4,4 , 3,999,999,999,999,999]));