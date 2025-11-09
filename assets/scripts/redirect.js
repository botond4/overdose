window.onload = function () {
  const currentURL = window.location.href;
  const newURL = currentURL.replace(/\.html$/, "");

  // Ha helyi fájlból fut (pl. file:///C:/...), ne csináljon semmit
  if (window.location.protocol === "file:") {
    return;
  }

  // Csak akkor irányítson át, ha tényleg van mit módosítani
  if (newURL !== currentURL) {
    window.location.replace(newURL);
  }
};
