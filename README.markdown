# Duplicate Entry

* Version: 1.2
* Author: Nick Dunn <http://github.com/nickdunn/>
* Build Date: 2010-11-29
* Requirements: Symphony 2.0.6

## Installation

1. Download and upload the 'duplicate_entry' folder to your Symphony 'extensions' folder.
2. Enable the extension by selecting "Duplicate Entry" in the list and choose Enable from the with-selected menu, then click Apply.

## Usage

When viewing an entry's "edit" form you will see a "Save as New" button. Submitting the form using this button will save changes to a brand new entry. If you have two sections with identical schemas (field names and types are compared) then a dropdown will be displayed beside the Save as New button allowing you to save a copy of the entry into the other section.

## Change history

1.2
- Show a dropdown menu beside "Save as New" button of sections that have exactly the same structure, to allow for saving between identical sections (useful for archiving)
- Button can be translated

1.1
- Various

1.0
- Initial public release

## Todo
* Fix bug whereby validation errors render the form back in "new" mode (potentially unfixable)