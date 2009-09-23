<?php
	
	class Extension_Duplicate_Entry extends Extension {
		
		public function about() {
			return array(
				'name'			=> 'Duplicate Entry',
				'version'		=> '1.0',
				'release-date'	=> '2009-09-23',
				'author'		=> array(
					'name'			=> 'Nick Dunn',
					'website'		=> 'http://nick-dunn.co.uk'
				),
				'description'	=> 'Duplicate an existing entry using a "Save as New" button'
			);
		}
		
		public function getSubscribedDelegates() {
			return array(
				array(
					'page'		=> '/backend/',
					'delegate'	=> 'InitaliseAdminPageHead',
					'callback'	=> 'initaliseAdminPageHead'
				)
			);
		}

		public function initaliseAdminPageHead($context) {
			$page = $context['parent']->Page;			
			if ($page instanceof contentPublish and $page->_context['page'] == 'edit') {
				$page->addScriptToHead(URL . '/extensions/duplicate_entry/assets/duplicate_entry.js', 123456789);
			}
		}
	}
	
?>