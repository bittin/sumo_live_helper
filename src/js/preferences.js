var backgroundPage = browser.extension.getBackgroundPage();

// version
var version = document.getElementById("version");
version.textContent = browser.runtime.getManifest().name + " (v"+ browser.runtime.getManifest().version + ")";

// show or not the new questions
//$(document).ready(function(){
//  var radios = document.getElementsByName("showNewQuestions");
//  var val = localStorage.getItem('showNewQuestions');
//  for(var i=0;i<radios.length;i++){
//    if(radios[i].value == val){
//      radios[i].checked = true;
//    }
//  }
//$('input[name="showNewQuestions"]').on('change', function(){
//    localStorage.setItem('showNewQuestions', $(this).val());
//    backgroundPage.location.reload(); });
//});

// language questions
$(document).ready(function(){
  var language = document.getElementById("chooseLanguage");
  var val = localStorage.getItem('chooseLanguage');

  if (typeof val !== 'undefined' && val !== null){
    language.value = localStorage.getItem('chooseLanguage');
  }else{
    language.value = navigator.language;
  }

  $('select[name="chooseLanguage"]').on('change', function(){
    localStorage.setItem('chooseLanguage', $(this).val());
    backgroundPage.location.reload();
  });
 });

// frequency new questions
$(document).ready(function(){
  var timer = document.getElementById("frequencySeekNewQuestions");
  var val = localStorage.getItem('frequencySeekNewQuestions');

  if (typeof val !== 'undefined' && val !== null){
    timer.value = localStorage.getItem('frequencySeekNewQuestions');
  }else{
    timer.value = 15;
  }

  $('input[name="frequencySeekNewQuestions"]').on('change', function(){
    localStorage.setItem('frequencySeekNewQuestions', $(this).val());
    backgroundPage.location.reload();
    });
 });
 
 // show or hide browser notifications
$(document).ready(function(){
    var checkbox = document.getElementById("showNotifications");
    var val = localStorage.getItem('showNotifications');
    if (val){
        checkbox.checked = val;
    }else{
        checkbox.checked = false;
    }
    //
    $('#showNotifications').on('change', function(){
        if(checkbox.checked == true){
            localStorage.setItem('showNotifications', true);
        }else{
            localStorage.setItem('showNotifications', false);
        }
        backgroundPage.location.reload();
    });
});