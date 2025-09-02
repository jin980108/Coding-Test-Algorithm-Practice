//글자 이어붙여서 문자열 만들기

function solution(my_string, index_list) {
    var answer = '';
    for(let x of index_list){
        answer+= my_string.slice(x,x+1);
    }
    return answer
}