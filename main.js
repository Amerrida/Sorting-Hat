const cards = 
[{house: "Gryffindor",},
{house: "Hufflepuff", },
{house: "Ravenclaw", },
{house: "Slytherin", }];


function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function clickedStart() {
    document.getElementById('sortButt').addEventListener('click', function() {
        let stringVar = 
        `<form>
            <div class="form-group">
                <label for="nameInput">Future Wizard </label>
                <input type="text" class="form-control" id="nameInput" placeholder="Enter Wizards name">
            </div>
             <button type="submit" class="border border-success" id='submitButt'>Sort</button>
        </form>`;       
        writeToDom('inputDiv', stringVar);
        clickedSort();
    })
}

function clickedSort() {
    document.getElementById('inputDiv').addEventListener('click', function() {
        if(event.target.id === 'submitButt') {        
            let houseNum = Math.floor(Math.random()*4);
            let stringVar = 
            `<div class="card text-center w-25 m-2 border-success ${cards[houseNum].background}">
                <div class="card-body ${cards[houseNum].background}">
                    <h2 class="card-title text-center">${nameInput.value}</h2>
                    <p class="card-text text-center">${cards[houseNum].house}</p>
                    <a href="#" class= "btn btn-danger expelButt">Expeled NOW!</a>
                </div>
            </div>`;
            addToDom('cardDiv', stringVar);
            activateDeletes();
        }
    })
}

const activateDeletes =() => {
    const clickedExpel =document.getElementsByClassName('expelButt');
    for (let i = 0; i < clickedExpel.length; i++){
        const clickedExpelbtn = clickedExpel[i];
        clickedExpelbtn.addEventListener("click", (e) => {
           e.preventDefault(); 
            const clickExpelbtn =  e.target;
            const expel  = clickExpelbtn.parentNode.parentNode;
            expel.remove();

        })
        
    }
}

clickedStart();



