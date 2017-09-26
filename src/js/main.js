var jsonData = [
    {
        id  : 1,
        text : "Folder 1",
        state : {
            selected  : 'primer'
        },
        children    : [
            {
                id  : 2,
                text : "Sub Folder 1",
                state : {
                    selected  : {}
                },
            },
            {
                id  : 3,
                text : "Sub Folder 2",
                state : {
                    selected  : {
                        hello:'hello',
                        world:'worldsss',
                    }
                },
            }
        ]
    },
    {
        id: 4,
        text : "Folder 2",
        state : {
            selected : {}
        },
        children : []
    }
];

console.log('main');

var tree = document.querySelector('.tree');

console.log(tree,'tree');

function recursionLoop (obj,node) {
    if(typeof obj !=='object') return;
    var newUl = document.createElement('ul');
    node.appendChild(newUl);
        for(key in obj) {
            var newLi = document.createElement('li');
            newLi.innerHTML = `${key}`;
            newUl.appendChild(newLi);
            console.log(key,'key');

            recursionLoop (obj[`${key}`],newLi)
        }
    return;
}

jsonData.forEach(data=>recursionLoop(data,tree));

