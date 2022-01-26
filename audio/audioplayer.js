export default class AudioPlayer {
    constructor(selector = '.audioPlayer', audio = []) {
        this.playerElem = document.querySelector(selector);
        this.audio = audio;
        this.currentAudio = null;
        this.createPlayerElement();
    }

    createPlayerElement() {
        this.audioElem = document.createElement('audio');
        const playListElem = document.createElement('div');
        playListElem.classList.add('playlist');

        this.playerElem.appendChild(this.audioElem);
        this.playerElem.appendChild(playListElem);

        this.createAudioCache(playListElem);
    }

    createAudioCache(playListElem) {
        this.audio.forEach((audio) => {
            const audioItem = document.createElement('a');
            audioItem.href = audio.url;
            audioItem.innerHTML = `<i class="fa fa-play"></i>${audio.name}`;

            playListElem.appendChild(audioItem);
        });
    }
}