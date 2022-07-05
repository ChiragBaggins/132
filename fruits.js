status = "";
function preload()
{
    loadimg("Fruits.jpeg");
}

function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd' modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}   

function modelLoaded()
{
    status = true;
    console.log("Model Loaded!")
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function Back()
{
    window.locate(index.html);
}