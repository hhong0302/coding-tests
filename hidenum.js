/* 문자열 my_string이 매개변수로 주어집니다. 
my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. 
my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요. */

function solution(s)
{
    let answer = '',sum=0;
    s=s.split('');
    for(let i=0;i<s.length;i++)
    {
        if(Number(s[i])%1!=0)
        {
            s[i]='+';
        }
    }
    for(let i=0;i<s.length;i++)
    {
        answer += s[i];
    }
    answer = answer.split('+').filter(function(item) {
        return item !== null && item !== undefined && item !== '';
      });
    
      answer.forEach(element => {
        sum+=Number(element);
      });
      return sum;
}

console.log(solution("aAb1B2cC34oOp"));