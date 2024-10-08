# Motivation

At [Ippon](https://fr.ippon.tech/), we maintain a [Practices Radar](https://ippontech.github.io/tech-radar/) 
based on Zalando one [public Tech Radar](http://zalando.github.io/tech-radar/) to help our engineering & staff teams
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
    {
      quadrant: 0, // quadrant reference [number]
      ring: 0, // ring reference [number]
      label: "Amazing tech", // entry name [text]
      active: true, // entry visible [bool]
      description: "Lorem ipsum <i>arcu</i> non dapibus <a href='https://blog.ippon.fr/'>blogus</a>.", // entry description modal [text/html]
      moved: 0, // entry evolution [-1/0/1]
    },
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

## Contributing

Any contributions, bigger or smaller ones, are welcome, we thank you! Even the slightest documentation is an improvement
to the global consistency of this radar.

3 points to ease your configuration:
1. This project is based on GitHub, [you will need to fork this repository to suggest improvements](https://help.github.com/articles/fork-a-repo)
2. From your local Git, clone your fork `git clone git@github.com:<YOUR_USERNAME>/tech-radar.git`
3. Bind your forked local repo to the common upstream `git remote add upstream git@github.com:ippontech/tech-radar.git`

From here you'll be able to fetch and contribute with such commands:
1. Fetching upstream updates: `git fetch upstream && git rebase upstream/master`
2. Creating a new branch: `git switch -c <YOUR_BRANCHNAME>`
3. Committing and pushing: `git add -A && git commit -m "<your commit atomic explanation message>" && git push origin`
4. Copy the help supplied by your local git command and use it: `git push --set-upstream origin <YOUR_BRANCHNAME>` 
5. Open a pull request on link supplied such as `https://github.com/<YOUR_USERNAME>/tech-radar/pull/new/<YOUR_BRANCHNAME>
6. On GitHub interface, do not forget to set the base repository as `ippontech/tech-radar` to create the pull request against common upstream

To easily review others' pull requests, you can edit your `.git/config`, and update this section:
```
[remote "upstream"]
	url = git@github.com:ippontech/tech-radar.git
	fetch = +refs/heads/*:refs/remotes/upstream/*
	fetch = +refs/pull/*/head:refs/remotes/upstream/pr/*
```
This will allow you to locally fetch remote pull requests using `git fetch upstream`, 
and review/test the concerned pull requests, using `git switch pr/<number>`.

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
