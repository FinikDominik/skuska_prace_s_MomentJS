Divcont = document.getElementById('container');

let m = moment();
console.log(m.toString());

let btn = document.getElementById('btn');
    btn.onclick = function(event){
        event.preventDefault();
        moment.locale('sk');
        console.log(moment().format('LLLL'));
        Divcont.innerHTML += "<p>" + 'Aktuálny čas:   ' + moment().format('LLLL') + "</p>"; 
        Divcont.innerHTML += "<p>" + 'Za desať dní bude:    ' + moment().add(10, 'days').calendar()   + "</p>"; 
        Divcont.innerHTML += "<p>" + 'Päť dní dozadu bolo...:    ' + moment().subtract(5, 'days').calendar()  + "</p>"; 
        Divcont.innerHTML += "<p>" + 'Koniec dňa bude:    ' + moment().endOf('day').fromNow()  + "</p>"; 
    }