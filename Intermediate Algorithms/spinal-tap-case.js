function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  const regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.toLowerCase().replace(regex, "-");
}

spinalCase("This Is Spinal Tap");
