
```javascript
class JingleEngine {
  constructor(audioEngine) {
    this.audioEngine = audioEngine;
    this.jingles = [];
  }

  loadJingles(jingles) {
    this.jingles = jingles;
  }

  async playJingles() {
    for (const jingle of this.jingles) {
      const audio = new Audio(jingle.ruta);
      await audio.play();
      audio.addEventListener('ended', () => {
        // Procesar el siguiente jingle
      });
    }
  }
}

export default JingleEngine;
```
