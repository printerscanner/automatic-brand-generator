async function getFont() {
	const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAVBqFuwOJqTX5Aw46-xQ7Z-gGcWqFf6gI');
	const data = await response.json();
	random_font = data.items[Math.floor(Math.random() * data.items.length)].family
	document.getElementById('font').innerHTML = random_font;
	document.body.style.fontFamily = random_font;
	addLink(random_font);
}

function addLink(font) {
	const result = font.replace(/\s+/g, "+");
	const head = document.getElementsByTagName('head')[0];
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `https://fonts.googleapis.com/css2?family=` + result + `:wght@400;500;600&display=swap`;
	head.appendChild(link);

}

function setColor(color) {
	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.setProperty(color, "#" + randomColor);
}

function setFontSize() {
	var options = ["large", "larger", "medium", "small", "smaller", "x-large", "x-small", "xx-large", "xx-small"];
	document.body.style.fontSize = options[Math.floor(Math.random() * options.length)];
}