# JsonDB
###### A simple JSON storage util for JavaScript to easily store any data in a JSON file, useful for little projects where performance isn't crucial.

### Why use JSON as a database?
When it comes to store data for a project, especially for a public one, it's well known that JSON isn't a good choice at all due to its low speed and performance.

However, if you're building a little, personal project and you aren't going to store that much data, even though it lacks performance, a plain and simple JSON file can be actually very useful to store data, and here's why:

> - Very easy to use and parse
> - Doesn't require to install anything
> - Compatible with most machines and programming languages

### How does it work?

It's basically just an array stored in a JSON file. You can add whatever elements you want to the array, just as you'd usually do in JS. Everything is saved in the JSON file, and you can get or remove specific elements by specifying the index of the element in the array.

Put simply: it's an **array that you can manage through the util's methods, which is stored in a JSON file**

### Getting started

Properly setting up JsonDB for your project is as simple as putting the `jsondb` folder (that you get when extracting the compressed file) preferably in your project root directory. You can put it wherever you like though, as long as it's in the project.

#### Basic usage

- Note: all methods **except get** return **promises**, thus they need to be resolved

##### Setup:

```js
const JsonDB = require('path/to/jsondb/jsondb.js');

const db = new JsonDB('json file name (optional)');
```

##### Adding data:

###### Synchronously:

```js
function sample() {
    const data = { cool: true };
    
    db.add(data).then(response => {
        console.log(response);
    });
    
    // returns undefined
}
```

###### Asynchronously:

```js
async function sample() {
    const data = { cool: true };
    
    const response = await db.add(data);
    console.log(response);
    
    // returns undefined
}
```

##### Getting data:

```js
function sample() {
    const index = 3;
    
    const data = db.get(index);
    console.log(data);
    
    // returns the array element
}
```

##### Removing data:

###### Synchronously:

```js
function sample() {
    const index = 5;
    
    db.remove(index).then(response => {
        console.log(response);
    });
    
    // returns true or false
}
```

###### Asynchronously


```js
async function sample() {
    const index = 5;
    
    const response = await db.remove(index);
    console.log(response);
    
    // returns true or false
}
```

##### Clearing the JSON database:

###### Synchronously:

```js
function sample() {
    db.clear().then(response => {
        console.log(response);
    });
    
    // returns undefined
}
```

###### Asynchronously


```js
async function sample() {
    const response = await db.clear();
    console.log(response);
    
    // returns undefined
}
```

##### Deleting the JSON database:

###### Synchronously:

```js
function sample() {
    db.delete().then(response => {
        console.log(response);
    });
    
    // returns undefined
}
```

###### Asynchronously


```js
async function sample() {
    const response = await db.delete();
    console.log(response);
    
    // returns undefined
}
```
