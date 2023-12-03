function getShippingCost(country) {
  let message;

  const CHINA_COST = 100;
  const CHILE_COST = 250;
  const AUSTRALIA_COST = 170;
  const JAMAICA_COST = 120;

  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost ${CHINA_COST} credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost ${CHILE_COST} credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost ${AUSTRALIA_COST} credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost ${JAMAICA_COST} credits`;
      break;
    default:
      message = `Sorry, there is no delivery to your country`;
  }
  return message;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
