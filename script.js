const text = "Welcome to ExploreIndia — your one-stop guide for discovering the India with ease and inspiration. Whether you’re planning your next trip, looking for hidden gems, or sharing your own adventures, ExploreIndia connects travelers through shared experiences. Our goal is to build a community where journeys, stories, and tips come together — helping you travel smarter, not harder. Start exploring today and make every trip unforgettable! Discover hidden gems and travel stories across India.";

const para = document.getElementById("slowPara");
const words = text.split(" ");
let i = 0;

function typeWords() {
    if (i < words.length) {
        para.textContent += words[i] + " ";
        i++;
        setTimeout(typeWords, 200);
    } else {
        setTimeout(() => {
            para.textContent = "";
            i = 0;
            typeWords();
        }, 2000);
    }
}

window.onload = typeWords;

const stateSelect = document.getElementById('state');
const placeSelect = document.getElementById('place');

const destinations = {
    "Rajasthan": ["Jaipur", "Udaipur", "Jaisalmer", "Mount Abu"],
    "Maharashtra": ["Mumbai", "Pune", "Lonavala", "Mahabaleshwar"],
    "Goa": ["North Goa", "South Goa", "Panaji", "Calangute Beach"],
    "Kerala": ["Munnar", "Alleppey", "Kochi", "Wayanad"],
    "Uttarakhand": ["Nainital", "Mussoorie", "Rishikesh", "Haridwar"],
    "Himachal Pradesh": ["Manali", "Shimla", "Dharamshala", "Kasauli"],
    "Tamil Nadu": ["Ooty", "Kodaikanal", "Chennai", "Madurai"],
    "Delhi": ["India Gate", "Red Fort", "Lotus Temple", "Qutub Minar"],
    "Delhi": ["India Gate", "Red Fort", "Lotus Temple", "Qutub Minar"],
    "Delhi": ["India Gate", "Red Fort", "Lotus Temple", "Qutub Minar"]
};

stateSelect.addEventListener('change', function () {
    const selectedState = this.value;
    const places = destinations[selectedState] || [];

    placeSelect.innerHTML = '<option value="">-- Choose Destination --</option>';
    places.forEach(place => {
        const option = document.createElement('option');
        option.value = place;
        option.textContent = place;
        placeSelect.appendChild(option);
    });
});

function toggleDetails(id, btn) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
        btn.textContent = "Read More";
    } else {
        element.style.display = "block";
        btn.textContent = "Read Less";
    }
}
function msg() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fileds before sending!");
        return false;
    }
    alert("Message sent successfully!");
    return false;
}

function login(){
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if(email === "" || password === ""){
        alert("Please fill all fileds before sending!");
        return false;
    }
    alert("LOGIN Successfull!");
    window.location.href = "index.html";
    return false;
}
function signup(){
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if(email === "" || password === ""){
        alert("Please fill all fileds before sending!");
        return false;
    }
    alert("SIGNUP Successfull!");
    window.location.href = "index.html";
    return false;
}