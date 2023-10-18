const score = document.querySelector(".score");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
let number = 0;
score.innerHTML = "<img src='photos/photo1.png'>";
let array = ["photo1", "photo2", "photo3", "photo4", "photo5"]
next.onclick = () =>
{
    if(number >= 0 && number < 4) number++;
    else number = 0;
    score.innerHTML = "<img src='photos/" + array[number]+ ".png'>";


}

previous.onclick = () =>
{
    if(number <= 4 && number > 0) number--;
    else number = 4;
    score.innerHTML = "<img class='photo' src='photos/" + array[number]+ ".png'>";

}

