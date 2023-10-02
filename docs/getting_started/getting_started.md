# 🚀 Getting Started

In this section, we will cover the basics of getting started with installing libhal on your machine and flashing the Astraeus-I board. We will also cover how to create your own project.

## 🧰 Installing Dependencies

### <img src="../../assets/libhal.png" style="width: 30px; height: auto;"> Libhal Installation
Read the <a href="https://libhal.github.io/2.2/getting_started/" target="_blank">libhal docs</a>
 on how to install and configure libhal on your machine. Make sure you go through all of the steps in the docs before continuing. This includes installing and flashing to your Astraeus-I board.

## 🧱 Creating Your Own Project
🚧 Under construction 🚧

Start by cloning `libhal-starter`:

```bash
git clone https://github.com/libhal/libhal-starter.git
```

Take a look at the `README.md` of
[libhal/libhal-starter](https://github.com/libhal/libhal-starter) to get
details about how to modify the starter project and make it work for your needs.

!!! note
    You can learn more about libhal by reading the <a href="https://libhal.github.io/2.2/user_guide/fundamentals/" target="_blank">User Guide</a> and <a href="https://libhal.github.io/2.2/api/namespaces/" target="_blank">API Reference</a>


## 🔗Adding Devices and Tools

If you'd like to add a device or tool to your project you can do so by adding it to the conanfile.py file. You can find the conanfile.py file in the root directory of your project. The conanfile.py file is used to specify the dependencies of your project. To add a device or tool to your project you will need to add it to the `requirements` list in the conanfile.py file. For example, if you want to add the telemetry recorder tool to your project you would add it to the `requirements` list like this:

```python
def requirements(self):
    if str(self.options.platform).startswith("lpc40"):
        self.requires("libhal-lpc40/[^2.1.1]")
    self.requires("telemetry-recorder/0.0.1")
    self.requires("libhal-util/[^3.0.0]")
```
!!! note 
    Check out the <a href="https://github.com/Astraeus-I/telemetry-recorder" target="_blank">telemetry recorder</a> tool if you want to record data from the Astraeus-I board.


