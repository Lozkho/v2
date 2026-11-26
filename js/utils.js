```javascript
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function toggleTheme() {
  const themeLink = document.getElementById('theme-link');
  if (themeLink.href.includes('dark-mode.css')) {
    themeLink.href = '/css/style.css';
  } else {
    themeLink.href = '/css/dark-mode.css';
  }
}
```
