$(document).ready(function(){
		$('#phone-number').mask('0000-000-000');
	$('.form__btn').attr('disabled');
    $('#email').change(function enable(){
        if($(this).val() + '@'){
            $('.form__btn').removeAttr('disabled');
        }
    });
        $('.form__row').change(function enable(){
        if($(this).val().length > 1){
        	$('.form__btn').removeAttr('disabled');
        }
        });
         $('.form__btn').click(function(e) {
    	e.preventDefault();
		jQuery('<div/>', {
            class: 'alert'
        }).appendTo('.contact');
        $('.alert').text('Success!');
        jQuery('<span/>', {
            class: 'closebtn'
        }).appendTo('.alert');
        $('.closebtn').text('x').click(function () {
            this.parentElement.style.display='none'
        });
    }); 
	});