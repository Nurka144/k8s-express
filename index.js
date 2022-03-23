const app = require('express')();

app.get('/', (req, res) => {
	res.status(200).json({
		status: '200',
		message: 'Hello world!'
	});
});


app.listen(3001, () => {
	console.log('Server listening in port 3001');
})
