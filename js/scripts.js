document.addEventListener('DOMContentLoaded', function() {
    // Пример обработчика события для кнопки
    const button = document.querySelector('#myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Кнопка нажата!');
        });
    }

    // Пример анимации для элемента
    const animatedElement = document.querySelector('.animate');
    if (animatedElement) {
        animatedElement.classList.add('fade-in');
    }
});