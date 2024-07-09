document.getElementById('getCodeButton').addEventListener('click', function() {
    // Получить текущий URL
    const currentUrl = window.location.href;

    // Получить хеш из URL
    const hash = window.location.hash;

    // Извлечь код из хеша
    const params = new URLSearchParams(hash.substring(1));
    const code = params.get('code');

    // Отобразить код
    if (code) {
        document.getElementById('codeDisplay').textContent = `Code: ${code}`;
    } else {
        document.getElementById('codeDisplay').textContent = 'Code not found';
    }
});