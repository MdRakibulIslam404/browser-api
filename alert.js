console.log("hello");
// alert("Maa is coming!!!")

const maaComing = () => {
    alert("Ammu is coming. Open the book")
};

const askPicnic = () => {
    const response = confirm("Are you going to picnic");
    console.log(response);
    if (response === true) {
        alert("amake fee ta bkash kore de");
    }
    else {
        console.log("DURE GIYA MOR");
        // alert("dure giya mor");
    }
};

const askMyName = () => {
    const name = prompt("What is your name?");
    if (name) {
        console.log(name);
    }
};