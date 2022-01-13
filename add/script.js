let div_out = document.querySelector('.massValues');
let button_add;

let object = '<div class="valueElement"><label>Термин / предложение <input type="text" class="fouEnglish" placeholder="по-английски"><input type="text" class="fouRussian" placeholder="по-русски"></label><button class="add">Добавить значение</button></div>';

draw();

//функция отрисовки на странице
function draw (data = object) {
    let div_out_draw = document.querySelector('.massValues').innerHTML;
    div_out.innerHTML = div_out_draw + data;

    //функция добавления нового поля по клику
    let button_arr = document.querySelectorAll('.add');
    for(let i of button_arr) {
        i.onclick = () => {
            draw();
         }
    }  
}
