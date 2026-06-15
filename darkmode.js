    const html = document.getElementById('root');
    const tog = document.getElementById('toggletheme');
    const icon = tog.querySelector('i');
    const tognav = document.getElementById('tognav');
    const mobilemenu = document.getElementById('mobilemenu');
    const hamicon = tognav.querySelector('i');

    const sth = localStorage.getItem('theme') || 'light';
    if (sth === 'dark') {
      html.classList.add('dark-theme');
      icon.className = 'fas fa-sun';
    }

    tog.addEventListener('click', () => {
      html.classList.toggle('dark-theme');
      const itsdark = html.classList.contains('dark-theme');
      localStorage.setItem('theme', itsdark ? 'dark' : 'light');
      icon.className = itsdark ? 'fas fa-sun' : 'fas fa-moon';
    });

    tognav.addEventListener('click', () => {
      mobilemenu.classList.toggle('active');
      const itsactive = mobilemenu.classList.contains('active');
      hamicon.className = itsactive ? 'fas fa-times' : 'fas fa-bars';
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobilemenu.classList.remove('active');
        hamicon.className = 'fas fa-bars';
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobilemenu.contains(e.target) && !tognav.contains(e.target)) {
        mobilemenu.classList.remove('active');
        hamicon.className = 'fas fa-bars';
      }
    });

    function updatecartcounter() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const totcount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      const countele = document.querySelectorAll('.cart-count');
      countele.forEach(el => {
        el.textContent = totcount;
        el.style.display = totcount > 0 ? 'inline' : 'none';
      });
    }

    document.addEventListener('DOMContentLoaded', updatecartcounter);
  