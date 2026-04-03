document.querySelector('.copy-email').addEventListener('click', () => {
    navigator.clipboard.writeText('lucasgsgoncalves@gmail.com');

    const msg = document.createElement('div');
    msg.innerText = 'Email copiado!';
    msg.style.position = 'fixed';
    msg.style.bottom = '20px';
    msg.style.left = '50%';
    msg.style.transform = 'translateX(-50%)';
    msg.style.background = '#5fa08249';
    msg.style.color = '#fff';
    msg.style.padding = '10px 20px';
    msg.style.borderRadius = '8px';
    msg.style.zIndex = '9999';

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2000);
});

document.getElementById('btnSistema').onclick = () => {
    window.location.href = 'CamoraSetup.rar';
};

document.getElementById('btnApp').onclick = () => {
    window.location.href = 'Camora.apk';
};