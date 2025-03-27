const nameInput = document.getElementById("nameInput");
const likes = {
    rhcp: [],
    foof: [],
    beatles: [],
    nirvana: [],
    clash: [],
    arcticmonkeys: [],
    gunsnroses: []
};
function updateLikeList(band) {
    const likeElement = document.getElementById(`likes-${band}`);
    const likedPeople = likes[band];
    if (likedPeople.length === 0) {
        likeElement.textContent = "Ninguém curtiu";
    } else if (likedPeople.length === 1) {
        likeElement.textContent = `${likedPeople[0]} curtiu`;
    } else if (likedPeople.length === 2) {
        likeElement.textContent = `${likedPeople[0]} e ${likedPeople[1]} curtiram`;
    } else {
        likeElement.textContent = `${likedPeople[0]}, ${likedPeople[1]} e mais ${likedPeople.length - 2} pessoas curtiram`;
    }
}
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const bandId = button.id;

        if (name === "") {
            alert("Digite seu nome antes de curtir!");
            return;
        }
        if (!likes[bandId].includes(name)) {
            likes[bandId].push(name);
            updateLikeList(bandId);
        } else {
            alert(`${name}, você já curtiu ${button.textContent}!`);
        }
        nameInput.value = ""; 
    });
});
