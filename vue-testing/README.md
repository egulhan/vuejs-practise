# Vue Testing

installed npm packages:
~~~
npm i ava --save-dev
npm i vue --save
npm i @babel/preset-env --save-dev 
npm i @babel/register --save-dev
npm i browser-env --save-dev
~~~


this part should be added into package.json:
~~~
babel:{
	"presets": ["@babel/preset-env"]
},
ava:{
	require: [
		"@babel/register",
		"./tests/helpers/setup-browser-env.js"
	]
}
~~~
