# 🧱 Fundamentals of Astraeus-I
The Astraeus-I board is built to be modular in hardware and software. It includes a micromod which is a small micropressor board that can be switched out to the microcontroller of your choice. The board also includes a variety of sensors and peripherals that can be used for a variety of applications designed for avionic systems. The onboard devices include:

- 9 DOF IMU (ICM-20948)
- Barometer (MPL3115A2)
- GPS (Neo-m9n)
- SD Card

The boards software comprises of device drivers for each of the onboard devices, a telemetry recorder, and a board application package. The device drivers are used to interface with the onboard devices and are used by the telemetry recorder and board application package. The telemetry recorder is a tool used to record data from the onboard devices and either store it in the sd card or transmit the data if the board has a radio module installed. The board application package is used to run a custom application on the board. The application can be used to control the onboard devices and perform custom actions which you can use to build your own application.

