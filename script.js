!localStorage.getItem('balls') ? document.querySelector('.balls').textContent = 0 : document.querySelector('.balls').textContent = localStorage.getItem('balls');
document.querySelector('.bals_del').onclick = () => {
    localStorage.removeItem('balls');
    !localStorage.getItem('balls') ? document.querySelector('.balls').textContent = 0 : document.querySelector('.balls').textContent = localStorage.getItem('balls');
}
let url = ''
localStorage.getItem('url') ? url = localStorage.getItem('url') : url = 'frazi1.json'
f2(url);

//document.querySelector('.form-done').onclick = f1
document.querySelector('.custom-select').onchange = f1
function f1() {
    let url = "";
    let val1 = +document.querySelector('.custom-select').value;
    if (val1 == '1') url = 'frazi1.json';
    if (val1 == '2') url = 'frazi2.json';
    if (val1 == '3') url = 'frazi3.json';
    if (val1 == '4') url = 'frazi4.json';

    localStorage.setItem('url', url);
    f2(url)
    location.reload()
}

function f2(url) {
    if (url == 'frazi1.json') document.querySelector('.urok').textContent = '1'
    if (url == 'frazi2.json') document.querySelector('.urok').textContent = '2'
    if (url == 'frazi3.json') document.querySelector('.urok').textContent = '3'
    if (url == 'frazi4.json') document.querySelector('.urok').textContent = '4'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let slovo = document.querySelector('.slovo');
            let n = data.length;
            let rand = Math.floor(Math.random() * n);
            slovo.textContent = data[rand].inEnglish
            i = 0;

            function t1() {

                function balls() {
                    let bals = localStorage.getItem('balls')
                    if (bals != 0) {
                        let a = Number(bals);
                        return function () {
                            a = a + 1;
                            localStorage.setItem('balls', a)
                            return a;
                        }
                    }
                    else {
                        a = 0;
                        return function () {
                            a = a + 1;
                            localStorage.setItem('balls', a)
                            return a;
                        }
                    }

                }
                let bals = balls()



                let value_slovo = document.querySelector('.val').value;
                value_slovo = value_slovo.toLowerCase();
                let slovar_text = data[rand].translate.toLowerCase();
                if (value_slovo == slovar_text) {
                    alert('???? ??????????!');
                    document.querySelector('.balls').textContent = bals()
                    location.reload()
                }
                else if (i == 3) {
                    document.querySelector('.out').innerHTML = `<h3>${data[rand].translate}</h3>`;
                    alert('???????????? ???? ???????????? ???????????????????? ??????????!');
                    t2();

                }
                else {
                    alert('???? ??????????????!')
                    i++;

                }
            }

            document.addEventListener('keydown', (e) => {
                if (e.code == "Enter") t1();
            })
            document.querySelector('.proverka').onclick = t1;

            function t2() {
                document.querySelector('.proverka').textContent = "??????????";
                document.addEventListener('keydown', (e) => {
                    if (e.code == "Enter") {
                        location.reload();
                    };
                });
                document.querySelector('.proverka').onclick = () => location.reload();

            }
        })

}
//????????????????
function clock() {
    let srok = 5;
    let time = 5 * 60;
    return function () {
        time = time - 1;
        let out = time / 60;
        return (Math.floor(10 * out) / 10).toFixed(2);
    }

}
let clock_out = document.querySelector('.clock');
//let out = clock();
// setInterval(() => {
//     clock_out.textContent = out();
// }, 200)


//2. ?????????????????? ?? ?????? ?????? ?????????????? ?????????? ????????
//4. ?????????? ????????????
//5. ???????????????????? ???????????? ???????????? ???????????????????????? ?????? "?????? ?????????? ?????????? ??????????????????????" => ?????????????????? ???????? ????????????
//6. ???????????? ?? ????????????????. ?? ??????????????: (??????????->??????????->??????????->??????????????????????).???????????? ?????????????? (Present Simple, Past Indefinite... ?? ??.??.)
//7. ???????????????? ?? ???????????????? ?????????????????????????? ???????????????????? ?? ???????????????????????? ??????????????. ?????????? ???????????????? ?????????????????? ?????????????? ?? ?????????????? ??????????????????. ?????????? ???????????????? ?????????????????????? ?? ?????????????????????? ???? ???????????????? ???????? ?????? ???????????????? ????????











