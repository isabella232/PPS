const Utils = require('./utils');

const views = {};
const template = {
	'mission': '',
	'releaseType': '',
	'releaseDate': 0,
	'productName': '',
	'productPhase': '',
	'productOwner': 'anonymous',
	'submitted': null,
	'submitter': null
};

function deleteView (viewID) {
	delete views[viewID];
}

function submit(viewID, user, values) {
	if(views[viewID] !== undefined) return false;
	
	views[viewID] = {...template};
	
	views[viewID].mission = values.mission.mission_select.selected_option.value;
	views[viewID].releaseType = values.release_type.type_select.selected_option.value;

	views[viewID].productName = values.product_name.product_name_text.value;
	views[viewID].productPhase = values.product_phase.product_phase_text.value;	
	views[viewID].releaseDate =  values.release_date.release_date_text.selected_date;
	
	views[viewID].submitter = user;
	views[viewID].submitted = new Date().toISOString();

	if(views[viewID].productOwner === 'anonymous') {
		views[viewID].productOwner = user;
	}

	return views[viewID];
}

module.exports = {
	submit,
	deleteView
}