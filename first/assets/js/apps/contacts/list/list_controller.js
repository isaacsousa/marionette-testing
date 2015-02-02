ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {
	List.Controller = {
		listContacts: function () {

			var contacts = ContactManager.request("contact:entities");

			var contactListView = new List.Contacts({
				collection: contacts
			});

			ContactManager.mainRegion.show(contactListView);
		}
	};
});
