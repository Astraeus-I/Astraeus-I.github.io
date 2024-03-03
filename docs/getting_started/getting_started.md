# 🚀 Getting Started

In this section, we will cover the basics of getting started with installing libhal and astraeus packages on your machine and flashing the Astraeus-I board. We will also cover how to create your own project.

### 🧰 Installing Dependencies

**Libhal** is a software library designed to abstract complexities associated with interfacing with different hardware platforms. By offering a unified API, libhal enables developers to write software that's independent of the underlying hardware specifics. This allows for seamless portability across different platforms, ensuring that the same code can be used to run on different processors, mircrocontrollers, systems, and devices. Libhal is designed to be modular and extensible. This allows developers to add support for new hardware platforms and devices.

**Astraeus** is a collection of packages that are built on top of libhal. These packages are designed to be used with the Astraeus-I board.

## 1: <img class="package_logo_medium" src="../../assets/libhal.png" style="width: 40px; height: auto;"> Libhal Packages

Please visit the <a href="https://libhal.github.io/2.4/getting_started/" target="_blank">libhal docs</a>
 to learn how to install and configure libhal on your machine. Make sure you go through all of the steps in the docs before continuing. This includes installing and flashing to your Astraeus-I board.

> Check out Libhal's API documentation <a href="https://libhal.github.io/2.4/api/" target="_blank">here!</a>

## 2: <img class="package_logo_medium" style="height:40px;" src="../../assets/logo.png"> Astraeus Library Installation

Add the `astraeus` repository to your system. This repository holds all of the Astraeus packages.
```bash
conan remote add astraeus https://libhal.jfrog.io/artifactory/api/conan/astraeuslibrary-conan
```




## 3: 🧱 Creating Your Own Project

Start by cloning `libhal-starter`:

```bash
git clone https://github.com/libhal/libhal-starter.git
```

Take a look at the `README.md` of
[libhal/libhal-starter](https://github.com/libhal/libhal-starter) to get
details about how to modify the starter project and make it work for your needs.

!!! note
    You can learn more about libhal by reading the <a href="https://libhal.github.io/2.2/user_guide/fundamentals/" target="_blank">User Guide</a> and <a href="https://libhal.github.io/2.2/api/namespaces/" target="_blank">API Reference</a>