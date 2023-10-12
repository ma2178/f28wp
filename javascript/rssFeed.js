async function loadFeed() {
	let prom = await fetch( 'https://rss.app/feeds/evJOBWdyAPm8QHPI.xml' );
	let text = await prom.text();
	
	let parser = new DOMParser();
	let xmlDoc = parser.parseFromString(text, "text/xml");

	console.log( xmlDoc );

	const items = xmlDoc.querySelectorAll("item");
	console.log('items:', items );

	items.forEach( (el)=>{
		let title       = el.querySelector('title').textContent;
		let description = el.querySelector('description').textContent;
		let guid        = el.querySelector('link').textContent;

		console.log('title:',       title       );
		console.log('description:', description);
		console.log('guid:',        guid);

		let div = document.createElement('div');
		document.body.appendChild( div );
		div.innerHTML = `
			<h2>${title}</h2>
			<p>${description}</p>
			<a href='${guid}'>LINK</a>
		`;

	});
}

loadFeed();