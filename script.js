const ratingButton = document.querySelectorAll(".rating");
const submitButton = document.getElementById("submitBtn");
const ratingCard = document.getElementById("ratingCard");
const main = document.getElementById("mainContainer");

let selectedRating = null;

ratingButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedRating = btn.textContent;

    ratingButton.forEach((b) => b.classList.remove("bg-orange-500" ,"text-black"));
    btn.classList.add("bg-orange-500", "text-black");
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    ratingCard.remove();

    const thankYouCard = document.createElement("div");
    thankYouCard.className =
      "bg-radial from-gray-700 from-20% to-gray-800  rounded-xl p-6 w-88 shadow-lg space-y-6 text-center" ;

    thankYouCard.innerHTML = `
        <img src="./images/illustration-thank-you.svg" class="mx-auto w-44"/>
        <p class="bg-gray-600 text-orange-500 py-1 px-4 rounded-3xl text-sm inline-block">You selected ${selectedRating} out of 5
      </p>
      <h2 class="text-lg font-bold">Thank you!</h2>
      <p class="text-sm text-gray-400">
        We appreciate your feedback. If you ever need more support, don’t hesitate to get in touch!
      </p>
        `;
    main.appendChild(thankYouCard);
  } else {
    alert("Please select a rating before submitting.");
  }
});
