# CpyClip

CpyClip is a versatile Node.js command-line interface (CLI) tool engineered to efficiently copy the contents of a file to your system's clipboard. Designed with simplicity and functionality in mind, CpyClip caters to developers, writers, and anyone requiring quick and seamless text transfer between applications or systems.

## Features

- **File Content Transfer**: Seamlessly copies the content of any file to your clipboard.
- **No Global Installation Required**: Utilizes `npx` for on-the-fly execution, eliminating the need for global installation.
- **Cross-Platform Compatibility**: Works flawlessly on macOS, Linux, and Windows, ensuring broad accessibility.

## Installation

To integrate CpyClip into your workflow, follow these steps:

### Local Installation

For projects where local dependency management is preferred, install CpyClip using npm:

```console
npm i cpyclip
```

### On-the-Fly Execution

For immediate use without committing to a permanent installation, leverage `npx`:

```console
npx cpyclip <filepath>
```

Replace `<filepath>` with the path to the file you wish to copy.

## Usage

### Basic Usage

To copy the content of a file to your clipboard, execute the following command:

```console
cpyclip <filepath>
```

Ensure `<filepath>` is replaced with the actual path to the file you intend to copy.

### Examples

- To copy the contents of a text file named `example.txt`, run:

```console
        cpyclip example.txt
```

- To copy the contents of a script file located at `/path/to/script.js`, execute:

```console
        cpyclip /path/to/script.js
```

## Requirements

- Node.js (v14.x or later recommended).

## Contributing

Contributions to CpyClip are warmly welcomed. Whether it's enhancing existing functionalities, introducing new features, or addressing bugs, please consider submitting pull requests or opening issues on the [GitHub repository](https://github.com/SonetAd/cpyclip).

## License

CpyClip is distributed under the MIT License. For complete details, refer to the [LICENSE](LICENSE) file.
