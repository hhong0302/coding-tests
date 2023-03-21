/* 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
정수 배열 array가 매개변수로 주어질 때, 
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000 */

function solution(array)
{
    let answer = 0 ;

    let joinArr = array.join("");

    for(let i = 0 ; i<joinArr.length ; i++)
    {
        if(joinArr.charAt(i)==7)
        {
            answer+=1;
        }
    }
    return answer;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));