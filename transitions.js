document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const urlParts = this.href.split('#');
            if(urlParts.length > 1 && urlParts[0] === window.location.origin + window.location.pathname) {
                e.preventDefault();
                const target = document.getElementById(urlParts[1]);
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else if(urlParts.length > 1) {
                e.preventDefault();
                window.location = this.href;
                setTimeout(() => {
                    const target = document.getElementById(urlParts[1]);
                    if(target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500); 
            }
        });
    });

    window.addEventListener('pageshow', function(event) {
        if(event.persisted) {
            window.scrollTo(0, 0);
        }
    });
});