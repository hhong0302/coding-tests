/* 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 
수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(quiz)
{
    let answer = [];
    for(let i = 0 ; i<quiz.length ; i++)
    {
        let qz = quiz[i].split(' ');
        if(qz[1]=='+')
        {
            if(Number(qz[0])+Number(qz[2])==qz[4])
            {
                answer[i] = "O";
            }
            else
            {
                answer[i] = "X";
            }
        }
        else
        {
            if(Number(qz[0])-Number(qz[2])==qz[4])
            {
                answer[i] = "O";
            }
            else
            {
                answer[i] = "X";
            }
        }
    }
    return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));