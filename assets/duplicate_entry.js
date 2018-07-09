/*
 * Duplicate entry
 */
(function ($) {
	Symphony.Language.add({
		"Save as New": false,
		"or": false,
	});

	var DuplicateEntry = {

		init: function() {
			var actions = jQuery('#contents div.actions');
			var save_button = actions.find('> .svg-icon-container').eq(0);

			var form = jQuery('form');
			var form_action = form.attr('action');

			var current_section = Symphony.Context.get('duplicate-entry')['current-section'];
			var duplicate_sections = Symphony.Context.get('duplicate-entry')['duplicate-sections'];
			var sections = '';

			// when duplicate_sections is not a blank array
			if (duplicate_sections != null && duplicate_sections != 'null') {
				sections = '<select id="duplicate-section">';
				for(var section in duplicate_sections) {
					selected = '';
					if (section == current_section) selected = ' selected="selected"';
					sections += '<option value="'+section+'"'+selected+'>'+duplicate_sections[section]+'</option>';
				}
				sections += '</select>';
			}

			save_button.after('<div id="duplicate-entry" class="svg-icon-container"></div>');

			jQuery('#duplicate-entry')
			.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28.7px" height="19.3px" viewBox="0 0 28.7 19.3"><path fill="currentColor" d="M21.2,19.3H6.4C2.8,19.3,0,16.5,0,13c0-2.9,2-5.4,4.7-6.1C5.5,2.9,9,0,13.2,0c2.3,0,4.4,0.9,6.1,2.5c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0C16.6,2.7,15,2,13.2,2C9.8,2,7,4.5,6.6,7.9c0,0.5-0.4,0.8-0.9,0.9C3.6,9.1,2,10.9,2,13c0,2.4,1.9,4.3,4.4,4.3h14.8c3.1,0,5.5-2.4,5.5-5.4c0-1.9-1.1-3.7-2.8-4.7c-0.5-0.3-0.6-0.9-0.4-1.4c0.3-0.5,0.9-0.6,1.4-0.4c2.3,1.3,3.8,3.8,3.8,6.4C28.7,16,25.4,19.3,21.2,19.3z"/><path fill="currentColor" d="M13.9,13.2L13.9,13.2c-0.3,0-0.5-0.1-0.7-0.3L9.5,9.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l2.9,2.9l9.3-9.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-10,10C14.4,13.1,14.1,13.2,13.9,13.2z"/></svg>')
			.append('<input type="submit" value="' + Symphony.Language.get("Save as New") + '" id="duplicate-button" name="action[save-duplicate]"/>')
			.append(sections);

			jQuery('#duplicate-button').click(function() {
				jQuery(this).attr('name', 'action[save]');
				var action = form_action.replace(/edit\/[0-9]+\/(.+)?/, 'new/');
				if (duplicate_sections != null) {
					action = form_action.replace(/publish\/([a-zA-Z0-9-_]+)\/(.+)?/, 'publish/' + jQuery('#duplicate-section').val() + '/new/');
				}
				form.attr('action', action);
			});
		}

	}

	$(function() {
		// do not show when in Subsection Manager
		if (!$('#body').hasClass('subsection')) {
			DuplicateEntry.init();
		}
	});
})(jQuery);
