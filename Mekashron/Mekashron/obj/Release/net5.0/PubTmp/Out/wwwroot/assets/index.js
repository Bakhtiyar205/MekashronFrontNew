
$(document).ready(function(){
    let hamburger = $('#hamburger-menu');
    let mobileHeaderAction = $('.mobile');
    $(hamburger).on('click', function(e) {
        $(mobileHeaderAction).toggleClass('mobile-header-action');
        e.preventDefault();
      });

    let question = $(".question");
    let faqAnswer = $(".faq-answer");
    $(question).click(function(e){
        e.preventDefault();
        faqAnswer.removeClass("faq-answer-active");
        
        let index = question.index($(this));
        $(faqAnswer[index]).addClass("faq-answer-active");
    });

    let langauge = $(".language");
    let languageToggle = $(".language--toggle");
    $(langauge).click(function(e){
        e.preventDefault();
        languageToggle.toggleClass("language-toggle-active");
    });
  });