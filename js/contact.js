document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // 这里可以添加表单验证

            // 模拟表单提交
            console.log('表单数据:', data);

            // 显示成功消息
            alert('感谢您的留言！我们会尽快与您联系。');

            // 重置表单
            contactForm.reset();
        });
    }

    // 懒加载图片
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});