let currentInstrument = 0

class Instrument {
    constructor(loudness, family, verb) {
        this.loudness = loudness
        this.family = family
        this.verb = verb
    }

    play(duration) {
        console.log(this.family + " " + this.verb + " at a volume of " + this.loudness)

        const synth = new Tone.Synth().toDestination()
        synth.volume.value = -15

        function playSound() {
            synth.triggerAttackRelease("C4", duration)
            setTimeout(playSound, 1000)
        }

        playSound()

        this.callbackOver
    }
}

class Woodwind extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness)
        this.family = family
        this.verb = verb
    }
}

class Percussion extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness)
        this.family = family
        this.verb = verb
    }
}

class String extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness)
        this.family = family
        this.verb = verb
    }
}

let myInstruments = [
    new Woodwind("10", "Woodwind", "tweets"),
    new Percussion("20", "Percussion", "booms"),
    new String("5", "String", "plucks")
]

myInstruments.forEach(
    function(myInstrument) {
        callbackOver = playNext(myInstruments[currentInstrument])
    }
)

function playNext(myInstrument) {
    myInstrument.play(.5)
    currentInstrument++
}

function myTest() {
    //put the loop and the playNext function in here if the audio is not automatically playing, may be due to browser settings
    //you can then use the button in the html page
}