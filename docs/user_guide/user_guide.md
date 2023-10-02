# 📖 User Guide
The Astraeus-I board is built to be modular in hardware and software. It includes a micromod which is a small micropressor board that can be switched out to the microcontroller of your choice. The board also includes a variety of sensors and peripherals that can be used for a variety of applications designed for avionic systems. The onboard devices include:

- 9 DOF IMU (ICM-20948)
- Barometer (MPL3115A2)
- GPS (Neo-m9n)
- SD Card

The boards software comprises of device drivers for each of the onboard devices, a telemetry recorder, and a board application package. The device drivers are used to interface with the onboard devices and are used by the telemetry recorder and board application package. The telemetry recorder is a tool used to record data from the onboard devices and either store it in the sd card or transmit the data if the board has a radio module installed. The board application package is used to run a custom application on the board. The application can be used to control the onboard devices and perform custom actions which you can use to build your own application.

## ⚙️ Hardware Details

To wire the board to other devices, you can use the pinout diagram or the pin labels on the Astraeus-I board to find the pins you need to connect to. Then you will need to use the pinout diagram for the device you are connecting to and connect the pins to the corresponding pins on the device.

### 📌 Pinout Diagram

<img src="../../assets/Astraeus_Pinout.svg" style="height: 1200px;  margin-bottom: -70px;">


### 🛠️ Board Specifications
- **Dimensions**
    - 52 mm x 85 mm
    - Horizontal Mounting Hole Distance: 46.1 mm
    - Vertical Mounting Hole Distance: 78.87 mm
- **Weight**
    - 29 grams
- **Power**
    - Supply voltage:  5V
    - Operating current: 200mA

## 💻 Software Details

The board’s software includes device drivers for onboard devices, a telemetry recorder, and a board application package. Device drivers facilitate interaction with the onboard devices and are utilized by both the telemetry recorder and the board application package. The telemetry recorder, a pivotal tool within the suite, captures data from the devices, offering options to either save this data to an SD card or transmit it through a radio module if one is present on the board. Concurrently, the board application package empowers users to run custom applications on the board. These applications can manipulate the onboard devices and execute custom actions, providing a versatile foundation for developing your own applications.

### 📈 Telemetry Recorder

The Telemetry Recorder is a vital tool for capturing data from devices on the Astraeus-I board. It allows users to either save data directly to an SD card or transmit it through a radio module, provided the board is equipped with one. This dual functionality enables both immediate data transmission for real-time monitoring and secure data storage for later analysis.

To understand the Telemetry Recorder’s features and operation better, visit the project’s <a href="https://github.com/Astraeus-I/telemetry-recorder" target="_blank">GitHub page</a>. Here, you’ll find detailed documentation and resources to guide you through installation and usage. The repository also serves as a platform for collaboration, issue reporting, and community engagement to improve and develop the tool further. Whether you're a researcher, technician, or hobbyist, the Telemetry Recorder is a valuable asset for efficient data recording and transmission with the Astraeus-I board.

### 🧩 Board Application Package
🚧 Under construction 🚧

The board application package is used to run a custom application on the board. The application can be used to control the onboard devices and perform custom actions which you can use to build your own application.