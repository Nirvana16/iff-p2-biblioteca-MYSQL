$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget);
	
	var model = button.data('model');
	var codigo = button.data('codigo');
	var descricao = button.data('descricao');
 
	var modal = $(this);
	var form = modal.find('form');
	var action = form.data('url-base');
	if (!action.endsWith('/')) {
		action += '/';
	}
	form.attr('action', action + model+'s/'+codigo);
	
	modal.find('.modal-body span').html('Tem certeza que deseja excluir o '+model+' <strong>' + descricao + '</strong>?');
});