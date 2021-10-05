"use strict";

// The model of all features
const features = {
  drinksholder: false,
  led: false,
  propeller: false,
  shield: false,
  solarfan: false,
};

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  // register toggle-clicks
  document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
}

function toggleOption(event) {
  const target = event.currentTarget;
  let feature = target.dataset.feature;

  // TODO: Toggle feature in "model"
  if (feature) {
    // hvis "dataset er true"
    features[feature] = !features[feature]; // sætter dataset til det modsatte på den valgte
  }

  // If feature is (now) turned on:
  // - mark target as chosen (add class "chosen")
  // - un-hide the feature-layer(s) in the #product-preview;
  // - create featureElement and append to #selected ul
  // - create FLIP-animation to animate featureElement from img in target, to
  //   its intended position. Do it with normal animation or transition class!

  // Else - if the feature (became) turned off:
  // - no longer mark target as chosen
  // - hide the feature-layer(s) in the #product-preview
  // - find the existing featureElement in #selected ul
  // - create FLIP-animation to animate featureElement to img in target
  // - when animation is complete, remove featureElement from the DOM

  if (features[feature]) {
    // feature added
    console.log(`Feature ${feature} is turned on!`);
    target.classList.add("chosen");
    document.querySelector(`[data-feature=${feature}]`).classList.remove("hide");

    // TODO: More code
  } else {
    // feature removed
    console.log(`Feature ${feature} is turned off!`);
    target.classList.remove("chosen");
    document.querySelector(`[data-feature=${feature}]`).classList.add("hide");

    // TODO: More code
  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  const li = document.createElement("li");
  li.dataset.feature = feature;

  const img = document.createElement("img");
  img.src = `images/feature_${feature}.png`;
  img.alt = capitalize(feature);

  li.append(img);

  return li;
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
}