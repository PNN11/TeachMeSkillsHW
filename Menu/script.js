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

const container = document.createElement("div");
document.body.append(container);

const renderMenu = (menu, container) => {
    const ul = document.createElement("ul");
    container.append(ul);
    container.onclick = null;
    menu.forEach(menuItem => {
        const listItem = document.createElement("li");
        ul.append(listItem);
        if(menuItem.nodes.length) {
            listItem.textContent = "+ " + menuItem.title;
            listItem.onclick = () => {
                renderMenu(menuItem.nodes, listItem)
            }
        }
        else {
            listItem.textContent ="- " + menuItem.title;
        }
    });
    
};

renderMenu(menu, container)