/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click", () =>{

        navLinks.classList.toggle("active");

    });

}

function celebrate(){

    confetti({

        particleCount:120,

        spread:80,

        origin:{ y:0.7 }

    });

}

/* ==========================================
   BASIC CALCULATOR
========================================== */

const display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function appendPercent(){

    display.value += "/100";

}

function appendPower(){

    display.value += "**";

}

function squareRoot(){

    display.value = "Math.sqrt(" + display.value + ")";

}

function calculate(){

    try{

        display.value = eval(display.value);

        // 🎉 Launch confetti
        confetti({

            particleCount:120,

            spread:80,

            origin:{ y:0.7 }

        });

    }

    catch{

        display.value = "Error";

    }

}



/* ==========================================
   DIAMETER PAGE
========================================== */

// Diameter = 2 × Radius

function calculateDiameter(){

    let radius = Number(document.getElementById("radiusDiameter").value);

    let diameter = radius * 2;

    document.getElementById("diameterResult").innerHTML =
    "Answer: " + diameter;

}

// Radius = Diameter ÷ 2

function calculateRadius(){

    let diameter = Number(document.getElementById("diameterRadius").value);

    let radius = diameter / 2;

    document.getElementById("radiusResult").innerHTML =
    "Answer: " + radius;

}

// Circumference = π × Diameter

function calculateCircumference(){

    let diameter = Number(document.getElementById("circleDiameter").value);

    let circumference = Math.PI * diameter;

    document.getElementById("circumferenceResult").innerHTML =
    "Answer: " + circumference.toFixed(2);

}

// Area = πr²

function calculateCircleArea(){

    let radius = Number(document.getElementById("circleRadius").value);

    let area = Math.PI * Math.pow(radius,2);

    document.getElementById("circleAreaResult").innerHTML =
    "Answer: " + area.toFixed(2);

}

/* ==========================================
   AREA PAGE
========================================== */

// Rectangle

function areaRectangle(){

    let length = Number(document.getElementById("rectLength").value);

    let width = Number(document.getElementById("rectWidth").value);

    let area = length * width;

    document.getElementById("rectangleAreaResult").innerHTML =
    "Answer: " + area;

}

// Square

function areaSquare(){

    let side = Number(document.getElementById("squareSide").value);

    let area = Math.pow(side,2);

    document.getElementById("squareAreaResult").innerHTML =
    "Answer: " + area;

}

// Triangle

function areaTriangle(){

    let base = Number(document.getElementById("triangleBase").value);

    let height = Number(document.getElementById("triangleHeight").value);

    let area = (base * height) / 2;

    document.getElementById("triangleAreaResult").innerHTML =
    "Answer: " + area;

}

// Circle

function areaCircle(){

    let radius = Number(document.getElementById("circleAreaRadius").value);

    let area = Math.PI * Math.pow(radius,2);

    document.getElementById("circleAreaOutput").innerHTML =
    "Answer: " + area.toFixed(2);

}

// Parallelogram

function areaParallelogram(){

    let base = Number(document.getElementById("paraBase").value);

    let height = Number(document.getElementById("paraHeight").value);

    let area = base * height;

    document.getElementById("parallelogramAreaResult").innerHTML =
    "Answer: " + area;

}

// Trapezoid

function areaTrapezoid(){

    let base1 = Number(document.getElementById("trapBase1").value);

    let base2 = Number(document.getElementById("trapBase2").value);

    let height = Number(document.getElementById("trapHeight").value);

    let area = ((base1 + base2) * height) / 2;

    document.getElementById("trapezoidAreaResult").innerHTML =
    "Answer: " + area;

}

/* ==========================================
   VOLUME PAGE
========================================== */

// Cube
function volumeCube(){

    let side = Number(document.getElementById("cubeSide").value);

    let volume = Math.pow(side, 3);

    document.getElementById("cubeVolumeResult").innerHTML =
    "Answer: " + volume;

}

// Cylinder
function volumeCylinder(){

    let radius = Number(document.getElementById("cylinderRadius").value);

    let height = Number(document.getElementById("cylinderHeight").value);

    let volume = Math.PI * Math.pow(radius, 2) * height;

    document.getElementById("cylinderVolumeResult").innerHTML =
    "Answer: " + volume.toFixed(2);

}

// Cone
function volumeCone(){

    let radius = Number(document.getElementById("coneRadius").value);

    let height = Number(document.getElementById("coneHeight").value);

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

    document.getElementById("coneVolumeResult").innerHTML =
    "Answer: " + volume.toFixed(2);

}

// Sphere
function volumeSphere(){

    let radius = Number(document.getElementById("sphereRadius").value);

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("sphereVolumeResult").innerHTML =
    "Answer: " + volume.toFixed(2);

}

// Rectangular Prism
function volumePrism(){

    let length = Number(document.getElementById("prismLength").value);

    let width = Number(document.getElementById("prismWidth").value);

    let height = Number(document.getElementById("prismHeight").value);

    let volume = length * width * height;

    document.getElementById("prismVolumeResult").innerHTML =
    "Answer: " + volume;

}

/* ==========================================
   PERIMETER PAGE
========================================== */

// Rectangle
function perimeterRectangle(){

    let length = Number(document.getElementById("perRectLength").value);

    let width = Number(document.getElementById("perRectWidth").value);

    let perimeter = 2 * (length + width);

    document.getElementById("rectanglePerimeterResult").innerHTML =
    "Answer: " + perimeter;

}

// Square
function perimeterSquare(){

    let side = Number(document.getElementById("perSquareSide").value);

    let perimeter = 4 * side;

    document.getElementById("squarePerimeterResult").innerHTML =
    "Answer: " + perimeter;

}

// Triangle
function perimeterTriangle(){

    let side1 = Number(document.getElementById("triSide1").value);

    let side2 = Number(document.getElementById("triSide2").value);

    let side3 = Number(document.getElementById("triSide3").value);

    let perimeter = side1 + side2 + side3;

    document.getElementById("trianglePerimeterResult").innerHTML =
    "Answer: " + perimeter;

}

// Circle (Circumference)
function perimeterCircle(){

    let radius = Number(document.getElementById("circRadius").value);

    let circumference = 2 * Math.PI * radius;

    document.getElementById("circlePerimeterResult").innerHTML =
    "Answer: " + circumference.toFixed(2);

}

// Parallelogram
function perimeterParallelogram(){

    let base = Number(document.getElementById("paraSideBase").value);

    let side = Number(document.getElementById("paraSideLength").value);

    let perimeter = 2 * (base + side);

    document.getElementById("parallelogramPerimeterResult").innerHTML =
    "Answer: " + perimeter;

}

/* ==========================================
   OPTIONAL QUALITY-OF-LIFE FEATURES
========================================== */

// Press Enter to click the nearest Solve button
document.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        const activeElement = document.activeElement;

        const card = activeElement.closest(".calc-card");

        if(card){

            const button = card.querySelector("button");

            if(button){

                button.click();

            }

        }

    }

});

// Automatically remove spaces at the beginning/end of text inputs
document.querySelectorAll("input").forEach(function(input){

    input.addEventListener("change", function(){

        this.value = this.value.trim();

    });

});