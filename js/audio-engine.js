```javascript
class AudioEngine {
  constructor() {
    this.audioElements = {};
    this.currentEmisora = null;
    this.currentTrack = null;
  }

  async loadEmisoras(emisoras) {
    for (const emisora of emisoras) {
      this.audioElements[emisora.id] = new Audio(emisora.canciones[0].ruta);
    }
  }

  playEmisora(emisora) {
    this.currentEmisora = emisora;
    this.currentTrack = 0;
    this.audioElements[emisora.id].play();
  }

  pauseEmisora() {
    this.audioElements[this.currentEmisora.id].pause();
  }

  nextTrack() {
    // Implementa la lógica para reproducir la siguiente canción
  }
}

export default AudioEngine;
```
