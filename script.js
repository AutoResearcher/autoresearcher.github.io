// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 为所有时间线项目添加淡入动画效果
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transition = 'opacity 0.5s ease-in-out';
                requestAnimationFrame(() => {
                    item.style.opacity = '1';
                });
            }, index * 150);
        });
    }

    // 为 Join Us 页面的应用按钮添加点击事件
    const applyButton = document.querySelector('.application-button');
    if (applyButton) {
        applyButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! Our application system will be available soon.');
        });
    }

    // 为导航链接添加平滑滚动效果
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });

    // 添加时间戳的格式化
    const dateElements = document.querySelectorAll('.date');
    if (dateElements.length > 0) {
        dateElements.forEach(element => {
            const dateText = element.textContent;
            if (dateText) {
                const date = new Date(dateText);
                if (!isNaN(date.getTime())) {
                    element.setAttribute('title', date.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    }));
                }
            }
        });
    }

    // 响应式导航菜单（在小屏幕上）
    function handleResponsiveNav() {
        const width = window.innerWidth;
        const navItems = document.querySelector('nav ul');
        
        if (width <= 768 && navItems) {
            if (!document.querySelector('.menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.classList.add('menu-toggle');
                menuToggle.textContent = 'Menu';
                menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
                
                const header = document.querySelector('header .container');
                if (header) {
                    header.insertBefore(menuToggle, navItems);
                    
                    menuToggle.addEventListener('click', function() {
                        navItems.classList.toggle('show');
                        this.classList.toggle('active');
                    });
                }
            }
        }
    }

    // 初始化时检查一次
    handleResponsiveNav();
    
    // 当窗口大小改变时再次检查
    window.addEventListener('resize', handleResponsiveNav);
}); 