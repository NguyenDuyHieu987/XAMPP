document.addEventListener('DOMContentLoaded', function() {
    const btn_feedback = document.querySelector('.btn_feedback');
    const model_feedback = document.querySelector('.model_feedback');

    const cancel_feedback = document.querySelector('.cancel_feedback');
    btn_feedback.onclick = function() {
        model_feedback.classList.add('active');
        backgroundmodel_feedback.classList.add('active');
    };
    const backgroundmodel_feedback = document.querySelector(
        '.backgroundmodel_feedback'
    );

    cancel_feedback.onclick = function(e) {
        e.preventDefault();
        model_feedback.classList.remove('active');
        backgroundmodel_feedback.classList.remove('active');
    };
});