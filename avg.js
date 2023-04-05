/* 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(score)
{
    let answer =[];
    for(let i = 0 ; i<score.length ; i++)
    {
        score[i] = [(score[i][0]+score[i][1])/2,i];
    }
    score = score.sort((a, b)=>{
        if(a[0] > b[0]) return 1;
        if(a[0] < b[0]) return -1;
        return 0;
      }).reverse();
    for(let i = 0 ; i<score.length ; i++)
    {
        score[i] = [score[i],i+1];
        if(i!=0&&score[i][0][0]==score[i-1][0][0])
        {
            score[i][1] = score[i-1][1];
        }
    }
    score = score.sort((a,b)=>{
        if(a[0][1]>b[0][1]) return 1;
        if(a[0][1]<b[0][1]) return -1;
        return 0;
    })
    for(let i = 0 ; i<score.length ; i++) score[i] = score[i][1];

    return score;
}

console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));