//Console.log out elements in JSON file


// Copied the content from the json file
var author = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};

// Console logging using for loops
console.log("Console logging using for loops:");

for(key in author.video[0]){
    if (typeof(author.video[0][key]) === 'object'){
        for(subkey in author.video[0].author.data[0]){
            console.log(author.video[0].author.data[0][subkey]);
        }
    }
    else{
        console.log(author.video[0][key]);
    }
}

// Console logging directly
console.log("");
console.log("Console logging directly:");

console.log(author.video[0].id);
console.log(author.video[0].name);
console.log(author.video[0].url);
console.log(author.video[0].author.data[0].name_author);
console.log(author.video[0].author.data[0].url);
console.log(author.video[0].author.data[0].type);
