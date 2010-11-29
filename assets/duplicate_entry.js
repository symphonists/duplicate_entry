var DuplicateEntry = {
	
	init: function() {
		var actions = jQuery('div.actions');
		var save_button = actions.find('input[type="submit"]');
		
		var form = jQuery('form');
		var form_action = form.attr('action');
		
		var current_section = form_action.match(/publish\/([a-zA-Z0-9-_]+)\//)[1];
		
		var sections = '';

		// when duplicate_sections is not a blank array
		if (duplicate_sections != null) {
			sections = '<select style="width:auto;float:right;" id="duplicate-section">';
			for(var section in duplicate_sections) {
				selected = '';
				if (section == current_section) selected = ' selected="selected"';
				sections += '<option value="'+section+'"'+selected+'>'+duplicate_sections[section]+'</option>';
			}
			sections += '</select>';
		}
		
		save_button.after('<span id="duplicate-entry" style="display:block;float:right;"></span>');
		
		jQuery('#duplicate-entry')
		.append('<span style="float:right;display:block;width:40px;text-align:center;margin-right:-10px">or</span>')
		.append('<input type="submit" value="Save as New" id="duplicate-button" name="action[save]"/>')
		.append(sections);
		
		jQuery('#duplicate-button').click(function() {
			var action = form_action.replace(/edit\/[0-9]+\/(.+)?/, 'new/');
			if (duplicate_sections != null) {
				action = form_action.replace(/publish\/([a-zA-Z0-9-_]+)\/(.+)?/, 'publish/' + jQuery('#duplicate-section').val() + '/new/');
			}
			form.attr('action', action);
		});
	}
	
}

jQuery(document).ready(function() {
	DuplicateEntry.init();
});