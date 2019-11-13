function calculateBmi () {
    // console.log(e);
    const appForm = document.querySelector(".app-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });
    const height = document.querySelector("#bmiHeight").value;
    const weight = document.querySelector("#bmiWeight").value;
    const usn    = document.querySelector("#db-username").innerHTML;
    const bmi = ( weight / height / height ) * 703;
    const bmiRounded = Math.round(bmi * 10) / 10;
    document.querySelector("#bmi-number").innerHTML = bmiRounded;

    fetch("/bmi", {
    method: "POST", 
    body: JSON.stringify(
        {
            "bmi": bmiRounded,
            "_searchfor": usn
        }
    ),
    headers: {'Content-Type': 'application/json'}
    });
}