var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region"
});

ContactManager.on("start", function() {
	console.log("ContactManager has started!");

	ContactManager.ContactsApp.List.Controller.listContacts();
});
