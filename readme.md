# Inheriting Instruments

Author: Matthew Wolf, IUPUI, N320 Fall 2022

Web4 Link: https://in-info-web4.informatics.iupui.edu/~wolfmi/N320/inheritinginstruments

Assignment Parameters:

- Create an abstract Instrument class
  - Properties: loudness, family, verb
  - Method: play
    - accept one argument, the duration
    - console log the family, verb, and loudness
    - include the tonejs code to play a sound with the duration argument
    - include a callback method
- Create the concrete classes: Woodwind, Percussion, and String. All extend the Instrument class.]
  - they accept the loudness property in the constructor to pass to the super constructor
  - include the verb and family properties inside the child constructor
- Making it work
  - create an array with each child class as an object inside
  - create a loop to go through each object in the array
- Sounds in order:
  - create a function called playNext()
  - create a variable called currentInstrument equal to zero
  - the play command should be inside the playNext function
  - increment the currentInstrument variable inside the playNext function
  - inside the loop, se the playNext function equal to the callback method