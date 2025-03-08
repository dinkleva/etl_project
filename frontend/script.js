document.getElementById("extract").addEventListener("click", async () => {
	const res = await fetch("http://localhost:5000/extract");
	const data = await res.json();
	document.getElementById("output").innerText = JSON.stringify(data, null, 2);
});

document.getElementById("transform").addEventListener("click", async () => {
	// Define the payload to send to the server
	const payload = {
		data: [
			{ name: "alice", age: 25 },
			{ name: "bob", age: 30 }
		]
	};

	try {
		// Make the POST request with the payload
		const res = await fetch("http://localhost:5000/transform");
		// Check if the response is successful
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		// Parse the response and update the output
		const data = await res.json();
		document.getElementById("output").innerText = data.message;
	} catch (error) {
		console.error("Error:", error);
		document.getElementById("output").innerText = "An error occurred. Check the console for details.";
	}
});


document.getElementById("load").addEventListener("click", async () => {
	try {
		const response = await fetch("http://localhost:5000/load");
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

		const data = await response.json();
		console.log("Load Response:", data);
	} catch (error) {
		console.error("Error in fetch:", error);
	}
});

