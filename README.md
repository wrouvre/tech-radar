# Motivation

At [Ippon](https://fr.ippon.tech/), we maintain a Practices Radar based on Zalando one [public Tech
Radar](http://zalando.github.io/tech-radar/) to help our engineering & saff teams
align on technology choices. It is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains the code to generate the visualization:
[`radar.js`](/docs/radar.js) (based on [d3.js v4](https://d3js.org)).
Feel free to use and adapt it for your own purposes.

## Usage

1. Insert practice file into `practices` directory, composed by Quadrants & Entry definitions:

```js
const dataRadar = {
  // Quadrants (limited to 4)
  quadrants: [
      { name: "..." },
  ],

  // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

  // Entries
  entries: [
    ...
  ]
}
```

2. Include the practice definition into 'practices.js' file :

```js
const practices = [
    {
        name: "DataRadar",
        radar: dataRadar
    }
]
```

3. Add the practice file into index.html :

```html
  <script src="practices/data.js"></script>

```

## Local Development

1. install dependencies with yarn (or npm):

```
yarn 
```

2. start local dev server:

```
yarn start
```

3. your default browser should automatically open and show the url
 
```
http://localhost:3000/
```

## License

```
The MIT License (MIT)

Copyright (c) 2017-2022 Zalando SE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
