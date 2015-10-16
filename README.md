# POLLARD

A DJ Playlist creator frontend

## Features
- Add songs to a set
	- search by title and artist
	- inputs for artist, title, album, label, year, dj comments
	- find API || (use dataset && (run SQL || search index server))
- Mark songs as 'live/currently playing'
- I/0 w/ backend

## Methodology
- Reactiflux to stand-up prototype for early UX feedback w/o building persistence layer
- Bootstrap for UI styling cuz: ez

## Work In Progress Stills

*SEARCH*
![search](gifs/search.png)

*SETPAGE*
![setpage](gifs/setpage.png)

## DIY

[Dev Notes][devnotes]

`npm install && npm start`
&& then [in yo bowser](http://0.0.0.0:3000)

`cp secrets-template.js secrets.js`
&& then enter in yr [echonest][echonestapikey]
&& [7digital][7digitalapikey] api keys


## BIG UPZ
Boilerplate from [React Redux Boilerplate][rrbp]

### KICKSMAN
[MAS FLAIR](gifs)

![alt tag](gifs/kicks_man.gif)



[rrbp]: https://github.com/knowbody/react-redux-boilerplate.git
[devnotes]: devnotes.md
[echonestapikey]: https://developer.echonest.com/account/register
[7digitalapikey]: https://api-signup.7digital.com/
