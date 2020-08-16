# Inheritance

### TV class

- TVClass - Base class
- LedTV class
- PlasmaTV class

Part - A

1. Create a TV class with properties like brand, channel , price , inches , OnOFF status and volume.
   Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
2. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
3. Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
4. Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
5. It's useful to write a status that returns info about the TV status like: "Panasonic at channel 8, volume 75".

Part - B : LED , Plasma

1. Inherit a TV class add additional properties like screen thickness, energy usage , Lifespan , Refresh rate , functionalities like viewingAngle , Backlight, DisplayDetails , which displays the detailed features of the TV
