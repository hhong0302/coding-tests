/* 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 15
babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
문자열은 알파벳 소문자로만 이루어져 있습니다. */

function solution(babbling)
{
    const baba = ["aya", "ye", "woo", "ma"];
    let answer=0;

    for(let i = 0 ; i<babbling.length ; i++)
    {
        for(let j = 0 ; j<baba.length ; j++)
        {
            for(let k = 0 ; k<baba.length ; k++)
            {
                if(babbling[i].indexOf(baba[k])==0)
                {
                    babbling[i] = babbling[i].substring(baba[k].length);
                }
            }
            
        }
        if(babbling[i]=="")
        {
            answer+=1;
        }
    }

    
    return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
console.log(solution(["yayae" , 'ayayewooma' , 'ayawoooma' , 'ayawooyema']));


//sol2

function solution2(babbling)
{
    const baba = ["aya", "ye", "woo", "ma"];
    let answer=0;

    for(let i = 0 ; i<babbling.length ; i++)
    {
        for(let j = 0 ; j<baba.length ; j++)
        {
            if(babbling[i].indexOf(baba[j])==0)
            {
                babbling[i] = babbling[i].substring(baba[j].length);
                solution(babbling);
            }
            else
            {
                continue;
            }
        }
        if(babbling[i]=="")
        {
            answer+=1;
        }
    }
    
    return answer;
}

console.log(solution2(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution2(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
console.log(solution2(["yayae" , 'ayayewooma' , 'ayawoooma' , 'ayawooyema']));