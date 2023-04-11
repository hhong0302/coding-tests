/* 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
정수 배열 emergency가 매개변수로 주어질 때 
응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(emergency)
{
    const arr = [];
    for(let i=0;i<emergency.length;i++)
    {
        arr[i]=emergency[i];
    }
    let ar = arr.sort((a,b)=>
    {
        if(a>b) return -1;
        else return 1;
    })

    for(let i=0;i<emergency.length;i++)
    {
        for(let k=0;k<ar.length;k++)
        {
            if(emergency[i]==ar[k])
            {
                emergency[i]=k+1;
                break;
            }
        }
    }

    return emergency;
}

console.log(solution([7,6,5,4,3,2,1]));