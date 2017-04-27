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
			.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28px" height="31px" viewBox="0 0 28 31"><path fill="currentColor" d="M21,29c-0.6,0-1-0.4-1-1V16.5L17.6,16c0,0,0,0,0,0c-3.7,0-6.6-2.5-6.6-6.1V6c0-0.6,0.4-1,1-1s1,0.4,1,1v3.9c0,2.5,2,4.5,4.6,4.5l3.4,0.1c0.5,0,1,0.5,1,1V28C22,28.6,21.6,29,21,29z"/><path fill="currentColor" d="M27,24c-0.6,0-1-0.4-1-1V11.5L23.6,11c0,0,0,0,0,0C19.9,11,17,8.5,17,4.9V1c0-0.6,0.4-1,1-1s1,0.4,1,1v3.9c0,2.5,2,4.5,4.6,4.5L27,9.6c0.5,0,1,0.5,1,1V23C28,23.6,27.6,24,27,24z"/><path fill="currentColor" d="M16,25H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S16.6,25,16,25z"/><path fill="currentColor" d="M16,20H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S16.6,20,16,20z"/><path fill="currentColor" d="M9,15H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S9.6,15,9,15z"/><path fill="currentColor" d="M19,31H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h9c1.7,0,10,8.3,10,10v13C22,29.7,20.7,31,19,31z M3,7C2.4,7,2,7.4,2,8v20c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V15.1c-0.6-1.3-6.8-7.5-8.1-8.1H3z M20,15.2L20,15.2L20,15.2z M11.8,7L11.8,7L11.8,7z"/><path fill="currentColor" d="M25,26c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.6,0,1-0.4,1-1V10.1c-0.6-1.3-6.8-7.5-8.1-8.1H9C8.4,2,8,2.4,8,3c0,0.6-0.4,1-1,1S6,3.6,6,3c0-1.7,1.3-3,3-3h9c1.7,0,10,8.3,10,10v13C28,24.7,26.7,26,25,26z M26,10.2L26,10.2L26,10.2z M17.8,2L17.8,2L17.8,2z"/></svg>')
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
