export function extractContent(html) {
    return (new DOMParser).parseFromString(html, "text/html").documentElement.textContent;
}

export function removeArrayElement(oldArray, index) {
	let newArray = [...oldArray.slice(0, index), ...oldArray.slice(index+1)];

	return newArray;
}

export function setAccordionItems(jsonData) {
    let accordion = [],
        groups = jsonData.groups;

    groups.forEach((group) => {
      if (group.groups[0] !== undefined) {
        let groupLevelOneKey = group.key;

        group.groups.forEach((i) => {
          let groupLevelTwoKey = i.key,
              fieldGroupKey = groupLevelOneKey + '|' + groupLevelTwoKey,
              fieldsPerGroup = [];

          jsonData.fields.forEach((field) => {
            if (field.group === fieldGroupKey) {
              fieldsPerGroup.push(field);
            }
          });

          i['fields'] = fieldsPerGroup;
        });
      }
    });

    groups.forEach((i) => {
      accordion.push({
        key: i.key,
        title: i.title,
        content: i.groups,
        open: false,
        marked: false
      });
    });

   /* accordion.forEach((i) => {
   		i.content.forEach((j) => {
   			j['marked'] = false;
   			j['open'] = false;
   		});
   	});*/

    return accordion;
}