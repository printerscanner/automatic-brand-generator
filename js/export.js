function onClickDownload(html, css) {
	var zip = new JSZip();
	zip.file('index.html', html)
	zip.file('style.css', css)
	zip.generateAsync({
		type: "base64"
	}).then(function (content) {
		window.location.href = "data:application/zip;base64," + content;
	});
}


function exportHTML() {
	const getFont = document.getElementById('font').innerHTML;
	const font = getFont.replace(/\s+/g, "+");

	// Colors
	const textColor = getComputedStyle(document.body).getPropertyValue('--text-color');
	const backgroundColor = getComputedStyle(document.body).getPropertyValue('--background-color');
	const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color');
	const mutedColor = getComputedStyle(document.body).getPropertyValue('--muted-color');

	const fontSize = document.body.style.fontSize;

	const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Updated Brand Identity</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600&display=swap" rel="stylesheet">

</head>
<body>
			<section>
            <h1>Updated Brand Identity</h1>
				<section>
					<h1>Typeface</h1>
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
					<h6>Heading 6</h6>
				</section>

				<section>
					<h1>Paragraphs</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium beatae! Maiores eaque
						corrupti nulla! Animi facilis non, sint corrupti dignissimos voluptate porro, magni, excepturi rem ratione
						quisquam possimus!</p>

				</section>
				<section>
					<h1>Blockquotes</h1>
					<blockquote>
						<p>It is better by noble boldness to run the risk of being subject to half of the evils we anticipate than
							to remain in cowardly listlessness for fear of what might happen.</p>

						<cite><a href="#!">Herodotus</a></cite>
					</blockquote>
					<strong>Inline Quote </strong>
					<p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This is
							a short inline
							quotation.</q></p>

				</section>



				<section>
					<header>
						<h1>Tables</h1>
					</header>
					<table>
						<caption>Table Caption</caption>
						<thead>
							<tr>
								<th>Table Heading 1</th>
								<th>Table Heading 2</th>
								<th>Table Heading 3</th>
								<th>Table Heading 4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Table Cell 1</td>
								<td>Table Cell 2</td>
								<td>Table Cell 3</td>
								<td>Table Cell 4</td>
							</tr>
							<tr>
								<td>Table Cell 1</td>
								<td>Table Cell 2</td>
								<td>Table Cell 3</td>
								<td>Table Cell 4</td>
							</tr>
							<tr>
								<td>Table Cell 1</td>
								<td>Table Cell 2</td>
								<td>Table Cell 3</td>
								<td>Table Cell 4</td>
							</tr>
							<tr>
								<td>Table Cell 1</td>
								<td>Table Cell 2</td>
								<td>Table Cell 3</td>
								<td>Table Cell 4</td>
							</tr>
						</tbody>

					</table>

				</section>


				<section>
					<h1>Code</h1>
					<p><strong>Keyboard input: </strong> <kbd>Cmd</kbd></p>
					<p><strong>Inline code: </strong> <code>console.log("Hello World");</code></p>
					<p><strong>Output: </strong> <samp>Hello World</samp></p>
					<p><strong>Code Block:</strong>
						<pre>
int main() {
  printf("Hello, World!");
  return 0;
}
</pre>

				</section>

				<section>
					<h1>Form Inputs</h1>
					<p>Very basic input styling is also supported:</p>
					<input type="text" placeholder="I'm a text input field">
					<input type="email" placeholder="I'm an email input field">
					<input type="password" placeholder="I'm a password input field">
					<button>Button Click Me</button>
				</section>

				<section>
					<h1>Images</h1>
					<h3>No <code>&lt;figure&gt;</code> element</h3>
					<p><img src="https://picsum.photos/300/300" alt="Image alt text"></p>
					<h3>Wrapped in a <code>&lt;figure&gt;</code> element, with a <code>&lt;figcaption&gt;</code></h3>
					<figure>
						<img src="https://picsum.photos/300/300" alt="Image alt text">
						<figcaption>Here is a caption for this image.</figcaption>
					</figure>
				</section>



				<section>
					<h1>Lists</h1>
					<h3>Definition List, DL</h3>
					<dl>
						<dt>Definition List Title, DT</dt>
						<dd>This is a Definition List Division, DD.</dd>
					</dl>
					<h3>Ordered and Unordered List</h3>
					<ol>
						<li>List Item 1</li>
						<li>List Item 2</li>
						<li>List Item 3</li>
					</ol>
				</section>


				<section>
					<h1>Inline elements</h1>
					<p><strong>Text Link: </strong> <a href="#!">Hover over this text link</a>.</p>
					<p><strong>Strong: </strong>This element uses the <strong>strong tag</strong>.</p>
					<p><strong>Emphasis: </strong><em>This text has added emphasis.</em></p>
					<p><strong>Bold: </strong>Make inline text <b>bold</b>.</p>
					<p><strong>Italics: </strong>Make inline text <i>italic</i>.</p>
					<p><strong>Underline: </strong><u>Underline</u> text inline.
					</p>
					<p><strong>Delete and Insert: </strong><del>This text is deleted</del> and <ins>This text is inserted</ins>.
					</p>
					<p><strong>Strikethrough: </strong>This text has a <s>strikethrough</s>.</p>
					<p><strong>Superscript: </strong>Coca Cola<sup>®</sup>.</p>
					<p><strong>Subscript: </strong>H<sub>2</sub>O.</p>
					<p><strong>Small: </strong><small>This small text is small.</small></p>

					<p><strong>Citation: </strong><cite>This is a citation.</cite></p>
					<p><strong>Definition: </strong>The <dfn>dfn element</dfn> indicates a definition.</p>
					<p><strong>Mark: </strong>The <mark>mark element</mark> indicates a highlight.</p>
					<p><strong>Variable: </strong>The <var>a<sup>n</sup> + b<sup>n</sup> = c<sup>n</sup></var>.</p>
					<p><strong>Time: </strong>The time element: <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time></p>

				</section>
            </body>
        </html>`

	const css = `* {
	box-sizing: border-box;
}

/* Variables */

:root {
	--desktop-font-size: 1rem/1.5;
	--mobile-font-size: 1rem/1.4;
	--background-color: ${backgroundColor};
	--text-color: ${textColor};
	--accent-color: ${accentColor};
	--muted-color: ${mutedColor};
}

/* Typography */
body {
	color: var(--text-color);
    background-color: var(--background-color);
	margin: 0 auto;
	max-width: 75ch;
	padding: 0 0.5rem;
	line-height: 1.4;
    font-size:
}

body,
input {
	font-family: ${getFont}, sans-serif;
    font-size: ${fontSize};
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 800;
	line-height: 1.2;
}

h1 {
	font-size: 200%;
}

h2 {
	font-size: 150%;
}

h3 {
	font-size: 120%;
}

h4,
h5,
h6 {
	font-size: 100%;
}



a {
	color: var(--text-color);
	font-weight: inherit;
	text-decoration: none;
}

a:hover,
a:focus {
	color: var(--accent-color);
	text-decoration: underline;
}

time {
	font-weight: bold;
}

sub {
	font-size: 60%;
	vertical-align: bottom;
}

small {
	font-size: 80%;
}

blockquote,
q {
	background: var(--muted-color);
	border-left: 8px solid var(--accent-color);
	display: block;
	padding: 1rem;
	border-radius: 4px;
	;

}

kbd,
code,
samp,
pre,
var {
	font-family: Menlo, monospace;
	font-size: 14px;
}

var {
	font-style: normal;
}

pre {
	padding: 1rem 1.2rem;
}

code,
pre {
	color: var(--accent-color);
	background: var(--muted-color);
	overflow: auto;
}



/* Additional Elements */


hr {
	background: var(--text-color);
	border: 0;
	height: 1px;
	margin: 4rem 0;
}

img {
	display: block;
	height: auto;
	max-width: 100%;
}

figure {
	display: inline-block;
	padding: 1rem;
	width: 100%;
}

figure img {
	margin: 0 auto;
}

figure figcaption {
	font-size: 80%;
	margin-top: 0.5rem;
	text-align: center;
}

ul,
ol {
	list-style-type: none;
}

table {
	border: 1px solid var(--accent-color);
	border-collapse: collapse;
	table-layout: fixed;
	text-align: left;
	width: 100%;
}

table caption {
	margin: 1rem 0;
}

table tbody tr:nth-child(even) {
	background: var(--muted-color);
}

table th {
	background: var(--accent-color);
	font-weight: 400;
	color: var(--background-color);
}

table th,
table td {
	padding: 1rem;
}

input {
	appearance: none;
	border: 1px solid var(--accent-color);
	background: var(--muted-color);
	color: var(--text-color);
	display: block;
	margin: 0.5rem 0;
	padding: 0.5rem;
	font-size: 15px;
}

input:focus,
input:active {
	background-color: var(--muted-color);
	border-color: var(--accent-color);
}

button {
	text-decoration: none;
	font-weight: 700;
	font-size: 16px;
	padding: 16px;
	background-color: var(--accent-color);
	border-radius: 6px;
	margin: 10px 10px 10px 0px;
	color: var(--background-color);
	display: inline-block;
	border: none;
}

button:hover {
	color: var(--background-color);
	background-color: var(--text-color);
	transition: .2s;
}
`
	onClickDownload(html, css)
}
