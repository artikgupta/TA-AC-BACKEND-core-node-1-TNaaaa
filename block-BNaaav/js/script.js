if(req.url.split('.').pop() === 'images') {
// set header for css file
res.setHeader('Content-Type', 'text/css');
// read css file and send it in response
fs.readFile("./script.js" + req.url, (err, content) => {
if(err) return console.log(err);
res.end(content)
})
}
