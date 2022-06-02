//Toggle post comment
document.addEventListener('DOMContentLoaded', function() {
    const text_comment = document.querySelector('.text_comment');
    const post_comment = document.querySelector('.post_comment');

    text_comment.onclick = function() {
        post_comment.classList.add('active');
        text_comment.oninput = function() {
            if (post_comment.classList.contains('active')) {
                if (text_comment.value === '') {
                    post_comment.disabled = true;
                } else {
                    post_comment.disabled = false;
                }
            }
        };
    };
    text_comment.onblur = function() {
        post_comment.classList.remove('active');
    };
});