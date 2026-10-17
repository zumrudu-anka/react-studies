## Prerequisites

- `npm install -g less`

## Installation

- `npm install -g less-watch-compiler`

### Usage

- `less-watch-compiler [options] <source_dir> <destination_dir>`

### Configuration File

By default the the configuration file is loaded from ./less-watch-compiler.config.json but can also be specified by the --config option.

**Example using the project tree laid out in the previous example**
less-watch-compiler.config.json
```
{
    "watchFolder": "src",
    "outputFolder": "dist",
    "mainFile": "main.less"
}
```
The project can be compiled with the following command:

- `less-watch-compiler`

#### All Configuration File options

```
{
    "watchFolder": "<input_folder>",   
    "outputFolder": "<output_folder>",
    "mainFile": "<main-file>",   
    "sourceMap": false,
    "plugins": "plugin1,plugin2",
    "less-args": "option1=1,option2=2",
    "runOnce": false,
    "enableJs": true
}
```