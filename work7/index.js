function sort(methed){
    let origin = document.getElementById('origin').value
    let logs
    console.log(methed)
    if(methed=='bubble'){
        logs = bubbleSort(origin)
    }else if(methed=='insert'){
        log = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}