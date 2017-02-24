import { setAccordionItems } from './../helpers.js';
import jsonData from './../data/JSONExample';
import { removeArrayElement } from './../helpers';

let accordion = setAccordionItems(jsonData),
	groupsLevelOneToCopy = [],
	groupsLevelTwoToCopy = [],
	fieldsToCopy = [];

const changeAccordion = (state = {accordion, groupsLevelOneToCopy, groupsLevelTwoToCopy, fieldsToCopy}, action) => {
	switch(action.type){
		case "CHANGE_FULL_ACCORDION": {
			console.log('change full accordion');
			state = {...state, accordion: action.accordion}
			break;
		}

		case "DELETE_GROUP_L1": {
			const {element, index} = action,
		          buttonId = 'btn_group_level_one_mark_' + element.key;
		    let {groupsLevelOneToCopy} = action,
		    	accordion = [...state.accordion],
		    	indexForElementToRemove;

	        accordion = removeArrayElement(accordion, index);
	        if (element.marked) {
		    	$('#' + buttonId).removeClass('marked');

		     	indexForElementToRemove = groupsLevelOneToCopy.map((key, i) => {
        			return key;
      			}).indexOf(element.key);

      			groupsLevelOneToCopy = removeArrayElement(groupsLevelOneToCopy, indexForElementToRemove);
		    }

		    // delete group and field to copy!

			state = {...state, accordion, groupsLevelOneToCopy};
			return state;
			break;
		}

		case "DELETE_GROUP_L2": {
			const {groupLevelOneKey, element, index} = action,
		          buttonId = 'btn_group_level_two_mark_' + element.key;
		    let {subAccordionItems, groupsLevelTwoToCopy} = action,
		    	accordion = [...state.accordion],
		    	indexForElementToRemove,
		    	indexSubAccordion;

	        subAccordionItems = removeArrayElement(subAccordionItems, index);
	        if (element.marked) {
		    	$('#' + buttonId).removeClass('marked');

		     	indexForElementToRemove = groupsLevelTwoToCopy.map((key, i) => {
        			return key;
      			}).indexOf(element.key);

      			groupsLevelTwoToCopy = removeArrayElement(groupsLevelTwoToCopy, indexForElementToRemove);
		    }

		    //delete field to copy!

		    indexSubAccordion = accordion.map((subAccordion, i) => {
    			return subAccordion.key;
  			}).indexOf(groupLevelOneKey);

			accordion[indexSubAccordion].content = removeArrayElement(accordion[indexSubAccordion].content, index);
		
			state = {...state, accordion, groupsLevelTwoToCopy};
			return state;
			break;
		}

		case "DELETE_FIELD": {
			const {groupLevelOneKey, groupLevelTwoKey, element, index} = action,
				  buttonId = "btn_field_" + element.key;
			let {fields, fieldsToCopy} = action,
				accordion = [...state.accordion],
				indexForElementToRemove,
				indexSubAccordion,
				indexAccordionSection;

			if (element.marked) {
		        $('#' + buttonId).removeClass('marked');

		        indexForElementToRemove = fieldsToCopy.map((key, i) => {
		            return key;
		        }).indexOf(element.key);

		        fieldsToCopy = removeArrayElement(fieldsToCopy, indexForElementToRemove);
		    }

			indexSubAccordion = accordion.map((subAccordion, i) => {
    			return subAccordion.key;
  			}).indexOf(groupLevelOneKey);

  			indexAccordionSection = accordion[indexSubAccordion].content.map((section, i) => {
    			return section.key;
  			}).indexOf(groupLevelTwoKey);

  			accordion[indexSubAccordion].content[indexAccordionSection].fields = removeArrayElement(accordion[indexSubAccordion].content[indexAccordionSection].fields, index);
					
			state = {...state, accordion, fieldsToCopy};
		    return state;
		    break;
		}

		case "MARK_GROUP_L1": {
			const {element, index} = action,
		          buttonId = 'btn_group_level_one_mark_' + element.key;
		    let {groupsLevelOneToCopy} = action,
		    	accordion = [...state.accordion],
		    	indexForElementToRemove;

		    if (element.marked) {
		        indexForElementToRemove = groupsLevelOneToCopy.map((key, i) => {
		            return key;
		        }).indexOf(element.key);

		        groupsLevelOneToCopy = removeArrayElement(groupsLevelOneToCopy, indexForElementToRemove);
		        accordion[index].marked = false;
		    } else {
		        accordion[index].marked = true;    
		        groupsLevelOneToCopy.push(accordion[index].key);
		    }

		    state = {...state, groupsLevelOneToCopy};
		    return state;
		    break;
		}

		case "MARK_GROUP_L2": {
			const {groupLevelOneKey, element, index} = action,
				  buttonId = 'btn_group_level_two_mark_' + element.key;
		    let {subAccordionItems, groupsLevelTwoToCopy} = action,
		    	accordion = [...state.accordion],
		        indexForElementToRemove,
		        indexSubAccordion;

		    indexSubAccordion = accordion.map((subAccordion, i) => {
    			return subAccordion.key;
  			}).indexOf(groupLevelOneKey);

		    if (element.marked) {
		      indexForElementToRemove = groupsLevelTwoToCopy.map((key, i) => {
		        return key;
		      }).indexOf(element.key);

		      accordion[indexSubAccordion].content[index].marked = false;
		      groupsLevelTwoToCopy = removeArrayElement(groupsLevelTwoToCopy, indexForElementToRemove);
		   
		    } else {
		      accordion[indexSubAccordion].content[index].marked = true;    
		      groupsLevelTwoToCopy.push(subAccordionItems[index].key);	
		    }

		    accordion[indexSubAccordion].content[index]['open'] = false;


			state = {...state, accordion, groupsLevelTwoToCopy};
		    return state;
		    break;
		}

		case "MARK_FIELD": {
			const {groupLevelOneKey, groupLevelTwoKey, element, index} = action,
				  buttonId = "btn_field_" + element.key;
			let {fields, fieldsToCopy} = action,
				accordion = [...state.accordion],
				field,
				indexForElementToRemove,
				indexSubAccordion,
				indexAccordionSection;

			indexSubAccordion = accordion.map((subAccordion, i) => {
    			return subAccordion.key;
  			}).indexOf(groupLevelOneKey);

  			indexAccordionSection = accordion[indexSubAccordion].content.map((section, i) => {
    			return section.key;
  			}).indexOf(groupLevelTwoKey);

		    if (element.marked) {
		        indexForElementToRemove = fieldsToCopy.map((key, i) => {
		            return key;
		        }).indexOf(element.key);

		        fieldsToCopy = removeArrayElement(fieldsToCopy, indexForElementToRemove);
		        accordion[indexSubAccordion].content[indexAccordionSection].fields[index].marked = false;
		        $('#' + buttonId).removeClass('marked');

		    } else {
		        accordion[indexSubAccordion].content[indexAccordionSection].fields[index].marked = true;
		        fieldsToCopy.push(fields[index].key);
		        $('#' + buttonId).addClass('marked');      
		    }

		    accordion[indexSubAccordion].content[indexAccordionSection]['open'] = true;


		    console.log('mjui:', accordion[indexSubAccordion].content[indexAccordionSection]);
		    console.log('mjuixs:', accordion[indexSubAccordion]);

			state = {...state, accordion, fieldsToCopy};
		    return state;
		    break;
		}

		default:
			return state; 
	}
	return state;
}

export default changeAccordion;