// units: we will have in metric and imperial
// data hosted at: https://vietanh00.github.io/useless_conversion/units.json 

function getData(){
    // const data = fetch('https://vietanh00.github.io/useless_conversion/units.json')
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './units.json', true); // Replace 'yourfile.json' with your JSON file path
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var jsonData = JSON.parse(xhr.responseText);
                    resolve(jsonData);
                } else {
                    reject(new Error('Failed to load JSON file'));
                }
            }
        };
        xhr.send();
    });
}

// use this as a template for other functions
function showData(){
    getData()
        .then(function(data){
            alert(JSON.stringify(data, null,2));
        })
        .catch(function(error){
            alert(">>>>>>>>>> " + error);
        })
}

//get the length in the standard unit: cm for metric, in for imperial
function getStandard(length, unit, type){
    return 0;
}

//get the length from a common unit to weird units
function toWeird(length, common_unit){

}

function convertLength() {
    const inputLength = parseFloat(document.getElementById("inputLength").value);
    const conversionList = document.getElementById("conversionList");
    conversionList.innerHTML = "";

    for (const category in data) {
        for (const unit in data[category]) {
            const convertedValue = inputLength * data[category][unit].cm;
            conversionList.innerHTML += `<li>${inputLength} cm is equal to ${convertedValue} ${unit}s</li>`;
        }
    }

    const results = document.getElementById("results");
    results.classList.remove("hidden");
}
