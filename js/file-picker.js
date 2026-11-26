
```javascript
class FilePicker {
  constructor(fileIndex) {
    this.fileIndex = fileIndex;
  }

  async pickDirectory() {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      this.fileIndex.directoryHandle = directoryHandle;
    } catch (error) {
      console.error('Error al seleccionar el directorio:', error);
    }
  }
}

export default FilePicker;
```

