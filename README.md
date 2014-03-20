#WinZip
> A tool for archiving files from the commandline

In my day job I build a lot of Joomla! extension which need to zipped before being installed. What sucks is that my computer runs on Windows and there's no simple way to archive files from the commandline. Node.js is great at building commandline utilities so I took a couple of hours from my boring PHP projects to create this module.

Winzip Zips, Tars, and Gzips files from the commandline. 


## Install (npm)
```
npm install -g winzip
```

## Usage
```
# Basic usage
winzip [option] [source] [destination]


## Zip a directory without specifying destination
winzip zip my_package


## Zip a directory and specify destination
winzip zip my_package my_comp.zip


## Tar a directory
winzip tar my_package


## Tar and gzip a directory
winzip tgz my_package
```



## Options
**Note:** An option is always required
 
zip  - (String) Zip a file/files
tar - (String)  Tar a file/files
tgz  - (String) Tar and GZip a file/files
```


## Testing (JSHint)
```
npm test
```



## License

(MIT License)

Copyright (c) 2014 Qawelesizwe Mlilo <qawemlilo@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
