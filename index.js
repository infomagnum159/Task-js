let d = {
    apple: 'яблоко',
    pen: 'Ручка',
    desk: 'парта',
    work: 'работа',
    box: 'коробка'
}


let arrQ = []
let arrA = []
let point = 0
let i = 0
let dLen = Object.keys(d).length

questions=()=>{
    let span = document.getElementById('question')
    span.innerHTML=arrQ[i]

}
addPoint = ()=>{
    let span = document.getElementById('point')
    span.innerHTML=point + ' / ' + dLen
}
addPoint()
for( let key in d){
    arrQ.push(key)
    arrA.push(d[key])
}
questions()
check=()=>{
    let input = document.getElementById('answer')
    if(input.value == arrA[i]){
        alert('правильный ответ идем дальше')
        point ++
        addPoint()
        i++
        questions()

    }else{
        alert('не правильный ответ')
        i++
        questions()
        addPoint()
    }
    if(Object.keys(d).length <=i ){

    alert('сыграем заново количество праильных ответов'+point+'из')
    i=0
    point = 0
    addPoint()
    questions()
    
}
input.value = ''
}