// const http = require('http')
// const fs = require('fs')
// const homep = fs.readFileSync('home.html')
// const aboutp = fs.readFileSync('about.html')
// const server = http.createServer((request, response)=>{
// 	if(request.url === '/about') return response.end(aboutp)
// 	else if(request.url === '/home') return response.end(home)
// 	else response.end("hello world!")
// })
// server.listen(5000)


// const path = require('path')
// const express = require('express')
// const app = express()


// app.get('/',(req,res)=>{
// 	res.json(
// 	{
// 		"name":"vaish"
// 	})
// })
// // const fs = require('fs')
// // const homep = fs.readFileSync('home.html')
// app.get('/home',(req,res)=>{
// 	console.log(path.resolve(__dirname, 'home.html'))
// 	res.sendFile(path.resolve(__dirname,'home.html'))
// })

// app.listen(5000,()=>{
// 	console.log("app is listening")
// })


//static asset with express
