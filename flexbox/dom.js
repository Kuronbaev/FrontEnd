document.body.style.background = "#0b0b22";
const container = document.querySelector(".container");
container.style.width = "1140px";
container.style.margin = "0 auto";

const header = document.querySelector(".header");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.fontFamily = "sans-serif";

const headerNavLinks = document.querySelectorAll(".header-nav a");
headerNavLinks.forEach((link) => {
  link.style.color = "rgba(255, 255, 255, 0.8)";
  link.style.fontSize = "16px";
  link.style.fontWeight = "400";
  link.style.margin = "0 50px";
  link.style.textDecoration = "none";
});

const ikonk = document.querySelector(".ikonk");
ikonk.style.display = "flex";
ikonk.style.alignItems = "center";
ikonk.style.justifyContent = "center";
ikonk.style.marginLeft = "400px"

const headerH1 = document.querySelector(".header h1");
headerH1.style.color = "#fff";
headerH1.style.fontSize = "24px";

const sjButton = document.querySelector(".sj");
sjButton.style.color = "#fff";
sjButton.style.fontSize = "14px";
sjButton.style.fontWeight = "500";
sjButton.style.padding = "10px 30px";
sjButton.style.borderRadius = "3px";
sjButton.style.backgroundColor =
  "var(--button-light, rgba(255, 255, 255, 0.1))";
sjButton.style.boxShadow = "0px 15px 30px 0px rgba(0, 0, 0, 0.1)";
sjButton.style.border = "none";

const hero = document.querySelector(".hero");
hero.style.margin = "70px 0";
hero.style.textAlign = "center";

const heroH3 = document.querySelector(".hero h3");
heroH3.style.color = "var(--green, #16fcd2)";
heroH3.style.textAlign = "center";
heroH3.style.textShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
heroH3.style.fontSize = "16px";
heroH3.style.fontWeight = "600";
heroH3.style.lineHeight = "32px";
heroH3.style.letterSpacing = "1.6px";
heroH3.style.margin = "13px 0";

const heroH1 = document.querySelector(".hero h1");
heroH1.style.color = "#fff";
heroH1.style.fontSize = "36px";
heroH1.style.fontWeight = "700";
heroH1.style.lineHeight = "54px";

const heroP = document.querySelector(".hero p");
heroP.style.color = "var(--muted, rgba(255, 255, 255, 0.6))";
heroP.style.fontSize = "16px";
heroP.style.fontWeight = "500";
heroP.style.lineHeight = "32px";
heroP.style.margin = "24px 0 0 0";

const btns = document.querySelector(".btns");
btns.style.margin = "38px 0 0 0";

const btnsLeft = document.querySelector(".btnsleft");
btnsLeft.style.color = "#fff";
btnsLeft.style.fontSize = "16px";
btnsLeft.style.fontWeight = "600";
btnsLeft.style.padding = "15px 55px";
btnsLeft.style.borderRadius = "3px";
btnsLeft.style.backgroundColor = "var(--primary, #6016fc)";
btnsLeft.style.border = "none";

const btnsRight = document.querySelector(".btnsright");
btnsRight.style.borderRadius = "3px";
btnsRight.style.backgroundColor =
  "var(--button-light, rgba(255, 255, 255, 0.1))";
btnsRight.style.color = "#fff";
btnsRight.style.fontSize = "16px";
btnsRight.style.fontWeight = "600";
btnsRight.style.padding = "15px 55px";
btnsRight.style.border = "none";
btnsRight.style.marginLeft = "25px";

const icon = document.querySelector(".icon");
icon.style.display = "flex";
icon.style.alignItems = "center";

const block = document.querySelector(".block");
block.style.borderRadius = "5px";
block.style.background = "var(--light, rgba(255, 255, 255, 0.05))";
block.style.width = "328px";
block.style.height = "276px";
block.style.flexShrink = "0";

const blockImg = block.querySelector("img");
blockImg.style.margin = "32px 0 0 40px";

const blockH1 = block.querySelector("h1");
blockH1.style.margin = "29px 0 8px 40px";
blockH1.style.color = "#fff";
blockH1.style.fontSize = "18px";
blockH1.style.fontWeight = "700";

const blockP = block.querySelector("p");
blockP.style.margin = "0 0 36px 40px";
blockP.style.color = "var(--muted, rgba(255, 255, 255, 0.6))";
blockP.style.fontSize = "16px";
blockP.style.fontWeight = "500";
blockP.style.lineHeight = "32px";

const blok = document.querySelector(".blok");
blok.style.borderRadius = "5px";
blok.style.background = "var(--light, rgba(255, 255, 255, 0.05))";
blok.style.width = "328px";
blok.style.height = "276px";
blok.style.flexShrink = "0";
blok.style.margin = "0 20px";

const blokImg = blok.querySelector("img");
blokImg.style.margin = "32px 0 0 40px";

const blokH1 = blok.querySelector("h1");
blokH1.style.margin = "29px 0 8px 40px";
blokH1.style.color = "#fff";
blokH1.style.fontSize = "18px";
blokH1.style.fontWeight = "700";

const blokP = blok.querySelector("p");
blokP.style.margin = "0 0 36px 40px";
blokP.style.color = "var(--muted, rgba(255, 255, 255, 0.6))";
blokP.style.fontSize = "16px";
blokP.style.fontWeight = "500";
blokP.style.lineHeight = "32px";

const blac = document.querySelector(".blac");
blac.style.borderRadius = "5px";
blac.style.background = "var(--light, rgba(255, 255, 255, 0.05))";
blac.style.width = "328px";
blac.style.height = "276px";
blac.style.flexShrink = "0";

const blacImg = blac.querySelector("img");
blacImg.style.margin = "32px 0 0 40px";

const blacH1 = blac.querySelector("h1");
blacH1.style.margin = "29px 0 8px 40px";
blacH1.style.color = "#fff";
blacH1.style.fontSize = "18px";
blacH1.style.fontWeight = "700";

const blacP = blac.querySelector("p");
blacP.style.margin = "0 0 36px 40px";
blacP.style.color = "var(--muted, rgba(255, 255, 255, 0.6))";
blacP.style.fontSize = "16px";
blacP.style.fontWeight = "500";
blacP.style.lineHeight = "32px";

const dia = document.querySelector(".dia");
dia.style.display = "flex";
dia.style.alignItems = "center";
dia.style.justifyContent = "space-between";
dia.style.width = "1140px";
dia.style.height = "105px";
dia.style.border = "3";
dia.style.margin = "79px 0 0 0";
dia.style.marginLeft = "350px"
