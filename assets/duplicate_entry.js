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
			var actions = $('div.actions');
			var save_button = actions.find('input[type="submit"]');
			
			var form = $('form');
			var form_action = form.attr('action');
			
			var current_section = Symphony.Context.get('duplicate-entry')['current-section'];
			var duplicate_sections = Symphony.Context.get('duplicate-entry')['duplicate-sections'];
			var sections = '';

			// when duplicate_sections is not a blank array
			if (duplicate_sections != null && duplicate_sections != 'null') {
				sections = '<select style="width:auto;float:right;" id="duplicate-section">';
				for(var section in duplicate_sections) {
					selected = '';
					if (section == current_section) selected = ' selected="selected"';
					sections += '<option value="'+section+'"'+selected+'>'+duplicate_sections[section]+'</option>';
				}
				sections += '</select>';
			}
			
			save_button.after('<span id="duplicate-entry" style="display:block;float:right;"></span>');
			
			$('#duplicate-entry')
			.append('<span style="float:right;display:block;width:30px;text-align:center;margin-right:-10px;line-height:2;color:darkGray;">' + Symphony.Language.get("or") + '</span>')
			.append('<input type="submit" value="' + Symphony.Language.get("Save as New") + '" id="duplicate-button" name="action[save-duplicate]"/>')
			.append(sections);
			
			$('#duplicate-button').click(function() {

				var clearFields = Symphony.Context.get('duplicate-entry')['clear-fields'];

				for (var i = clearFields.length - 1; i >= 0; i--) {

					$element = $('input[name="fields['+clearFields[i]+']"]');

					if ($element.attr('type')=='checkbox'){
						$element.attr('checked',false);
					} else {
						$element.val('');

					}
				}


				$(this).attr('name', 'action[save]');
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