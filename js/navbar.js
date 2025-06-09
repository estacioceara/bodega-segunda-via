document.querySelectorAll('.nav-btn').forEach(btn => {
            if(btn.href === window.location.href) {
                btn.classList.remove('btn-outline-primary');
                btn.classList.add('btn-primary');
            }
        });