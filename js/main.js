```javascript
import AudioEngine from './js/audio-engine.js';
import JingleEngine from './js/jingle-engine.js';
import FileIndex from './js/file-index.js';
import FilePicker from './js/file-picker.js';

const audioEngine = new AudioEngine();
const jingleEngine = new JingleEngine(audioEngine);
const fileIndex = new FileIndex();
const filePicker = new FilePicker(fileIndex);

async function initApp() {
  await filePicker.pickDirectory();
  await fileIndex.buildIndex();
  await audioEngine.loadEmisoras(fileIndex.emisoras);
  audioEngine.playEmisora(fileIndex.emisoras[0]);
  // Mostrar la interfaz de usuario
}

initApp();
```
