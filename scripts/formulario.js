$(document).ready(function(){
	var regex;
	
	function val_nome(){
		var nome = $('#nome').val();
		regex = /^[A-zÀ-ÿ ]+$/;
		if(regex.test(nome) && nome.length > 0){
			$('#div_nome').removeClass('has-error');
			$('#nome')[0].setCustomValidity('');
			return true;
		}else{
			$('#div_nome').addClass('has-error');
			$('#nome')[0].setCustomValidity('Nome inválido ou vazio');
			return false;
		}
	}

	function val_email(){
		var email = $('#email').val();
		regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,4}$/;
		if(regex.test(email) && email.length > 0){
			$('#div_email').removeClass('has-error');
			$('#email')[0].setCustomValidity('');
			return true;
		}else{
			$('#div_email').addClass('has-error');
			$('#email')[0].setCustomValidity('E-mail inválido ou vazio');
			return false;
		}
	}
	
	function val_assunto(){
		var assunto = $('#assunto').val();
		if(assunto){
			$('#div_assunto').removeClass('has-error');
			$('#assunto')[0].setCustomValidity('');
			return true;
		}else{
			$('#div_assunto').addClass('has-error');
			$('#assunto')[0].setCustomValidity('Assunto não selecionado');
			return false;
		}
	}
	
	function val_mensagem(){
		var mensagem = $('#mensagem').val();
		if(mensagem.length > 0){
			$('#div_mensagem').removeClass('has-error');
			$('#mensagem')[0].setCustomValidity('');
			return true;
		}else{
			$('#div_mensagem').addClass('has-error');
			$('#mensagem')[0].setCustomValidity('Mensagem vazia');
			return false;
		}
	}
	
	$("#assunto").prop("selectedIndex", -1);
	
	$(".alert-success").hide();
	
	$('#nome').on('change blur', val_nome);
	$('#email').on('change blur', val_email);
	$('#assunto').on('change blur', val_assunto);
	$('#mensagem').on('change blur', val_mensagem);
	
	$('#contato').submit(function(e){
		var action, subject, body;
	
		if(!val_nome() || !val_email() || !val_assunto() || !val_mensagem()){
			return false;
		}else{
			subject = '[' + $('#assunto').val() + '] Contato';
			action = 'mailto:visiteafinlandia@gmail.com?subject=';
			body = 'Nome: ' + $('#nome').val() + '\nE-mail: ' + $('#email').val() + '\n\nMensagem: \n' + $('#mensagem').val();
			action = action + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
			$(this).prop('action', action);
			
			$("#assunto").prop("selectedIndex", -1);
			$('#nome').val('');
			$('#email').val('');
			$('#mensagem').val('');
			
            $(".alert-success").alert();
			$(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
				$(".alert-success").slideUp(500);
			});
			return true;
		}
	});
});