window.addEventListener('DOMContentLoaded', function() {
    var backgroundDiv = document.getElementById('background');
    var imageUrl = 'foxlab Time 80 REforged.jpg';

    // 배경 이미지 설정
    backgroundDiv.style.backgroundImage = 'url(' + imageUrl + ')';

    // 이미지 애니메이션 효과 적용
    backgroundDiv.style.opacity = '0';
    backgroundDiv.style.transition = 'opacity 1s ease-in-out';

    setTimeout(function() {
    backgroundDiv.style.opacity = '1';
    }, 1000);

    // 3초 후에 다음 페이지로 이동
    setTimeout(function() {
    backgroundDiv.style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'next-page.html'; // 다음 페이지로 이동할 URL을 지정해주세요.
    }, 1000);
    }, 3000);
});