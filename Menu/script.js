const menu = [
	{
		title: 'node l.1',
		nodes: [
			{
				title: 'node l.2',
				nodes: [
					{
						title: 'node l.3',
						nodes: [
							{
								title: 'node l.4',
								nodes: [],
							},
						],
					},
					{
						title: 'node l.3',
						nodes: [],
					},
				],
			},
			{
				title: 'node l.2',
				nodes: [],
			},
		],
	},
	{
		title: 'node l.1',
		nodes: [],
	},
];

const cont = document.createElement("div");
document.body.append(cont);

const renderMenu = (menu, container) => {
    const ul = document.createElement("ul");
    container.append(ul);
    menu.forEach(menuItem => {
        const listItem = document.createElement("li");
        ul.append(listItem);
        if(menuItem.nodes.length) {
            listItem.textContent = menuItem.title;
            renderMenu(menuItem.nodes, listItem)
        }
        else {
            listItem.textContent = menuItem.title;
        }
    });
};

const initEvents = () => {
	const allLi = document.getElementsByTagName("li");
	for(let li of allLi) {
		if(li.children.length) {
			li.classList.add("plus");
			for(let child of li.children) {
				child.classList.add("display_none")
			};
			li.onclick = (e) => {
				e.stopPropagation();
				e.target.classList.toggle("plus");
				for(let child of e.target.children) {
					child.classList.toggle("display_none")
				}
			}
		}
		else {
			li.onclick = (e) => {
				e.stopPropagation();
			}
		}
	}
}

renderMenu(menu, cont);
initEvents();