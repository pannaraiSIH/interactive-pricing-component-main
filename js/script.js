const btnPayment = document.querySelector(".btn-payment");
const circleBtn = document.querySelector(".btn-payment .circle");
const pricing = document.querySelector(".pricing .normal");
const discountPricing = document.querySelector(".pricing .discount");
const sliderBar = document.querySelector(".card .slider-bar");
const pageviews = document.querySelector(".card .pageviews span");

btnPayment.addEventListener("click", () => {
  btnPayment.classList.toggle("active");
  circleBtn.classList.toggle("active");

  if (circleBtn.className === "circle active") {
    pricing.style.display = "none";
    discountPricing.style.display = "inline-block";
  } else {
    pricing.style.display = "inline-block";
    discountPricing.style.display = "none";
  }
});

sliderBar.addEventListener("change", () => {
  if (sliderBar.value <= 1) {
    pageviews.innerHTML = "10K";
    pricing.innerHTML = "$8";
    discountPricing.innerHTML = "$72";
  } else if (sliderBar.value <= 3) {
    pageviews.innerHTML = "50K";
    pricing.innerHTML = "$12";
    discountPricing.innerHTML = "$108";
  } else if (sliderBar.value <= 5) {
    pageviews.innerHTML = "100K";
    pricing.innerHTML = "$16";
    discountPricing.innerHTML = "$144";
  } else if (sliderBar.value <= 7) {
    pageviews.innerHTML = "500K";
    pricing.innerHTML = "$24";
    discountPricing.innerHTML = "$216";
  } else if (sliderBar.value <= 9) {
    pageviews.innerHTML = "1M";
    pricing.innerHTML = "$36";
    discountPricing.innerHTML = "$648";
  }
});

sliderBar.addEventListener("input", () => {
  sliderBar.style.background = `linear-gradient(to right, var(--full-slider) ${
    sliderBar.value * 10
  }%, var(--empty-slider) ${sliderBar.value * 10}% 100%)`;
});
