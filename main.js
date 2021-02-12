    // images => register events
    var allimages = document.images;
    for (var i = 0; i < allimages.length; i++) {
        allimages[i].addEventListener('dragstart', startdrag);
        allimages[i].addEventListener('dragend', enddrag);
    }
    // left => register events
    left = document.getElementById('left');
    left.addEventListener('dragover', overdrag);
    left.addEventListener('dragenter', enterdrag);
    left.addEventListener('drop', dropped);
    // right=>register events
    right = document.getElementById('right');
    right.addEventListener('dragleave', leavedrag);

function startdrag(e) {
    //console.log('hi');
    //console.log(e.target);
    //e.preventDefault();
    e.dataTransfer.setData('myimg',e.target.outerHTML);
    //e.dataTransfeer
}
function enddrag(e) {
    e.target.style.display = 'none';
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();
    left.innerHTML += e.dataTransfer.getData('myimg');
}
function overdrag(e) {
    e.preventDefault();
}
function leavedrag(e) {
    e.preventDefault();
}
function enterdrag(e) {
    left.style.backgroundColor = 'pink';
    e.preventDefault();
}