walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bbitcoin\b/g, "buttecoin");
	v = v.replace(/\bBitcoin\b/g, "Buttecoin");
	v = v.replace(/\bbitCoin\b/g, "butteCoin");
	v = v.replace(/\bBitCoin\b/g, "ButteCoin");
	
	textNode.nodeValue = v;
}


