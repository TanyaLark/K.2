
(async function (){

    let URLexchange = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    let response = await fetch(URLexchange);
    let commitsNBU = await response.json();

    let re = /[A-Z]{3} \d{2,4}/g;

    let result = document.querySelector('ul').innerHTML.replace(re, function (item) {

        let cc = item.slice(0, 3);

        for (const element of commitsNBU) {
            if (element.cc === cc){
                let reItem = /[A-Z]{3}/g;
                item = item.replace(reItem, '');
                item = parseInt(item);
                item *= element.rate;
                item = item.toFixed(2);

                return 'UAH ' + item;
            }
        } 
        
    });

    document.querySelector('ul').innerHTML = result;

})();
