var DuplicateEntry = {
	init: function() {
		var actions = jQuery('div.actions');
		var save_button = actions.find('input[type="submit"]');
		save_button.after('<input type="submit" value="Save as New" id="duplicate-entry" name="action[save]"/>');
		jQuery('#duplicate-entry').click(function() {
			var form = jQuery('form');
			var action = form.attr('action').replace(/edit\/[0-9]+\/(.+)?/, 'new/');
			form.attr('action', action);
		});
	}
}

jQuery(document).ready(function() {
	DuplicateEntry.init();
});