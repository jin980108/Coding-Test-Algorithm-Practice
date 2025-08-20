//수열과 구간 쿼리 3

function solution(arr, queries) {
    var answer = [...arr];
    queries.forEach(query => {
        const a = query[0];
        const b = query[1];
        
        const temp = answer[a];
        answer[a] = answer[b]
        answer[b] = temp
    })
    
    return answer
}