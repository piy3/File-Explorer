const  data = {
    id:"1",
    name:"root",
    isFolder:true,
    content:"",
    items:[
        {
            id:"2",
            name:"one",
            isFolder:true,
            content:"",
            items:[
                {
                    id:'3',
                    name:'first.js',
                    isFolder:false,
                    content:"This is content one.",
                    items:[]
                },
                {
                    id:'4',
                    name:'two',
                    isFolder:true,
                    content:"",
                    items:[
                        {
                            id:'5',
                            name:'Homepage.jsx',
                            isFolder:false,
                            content:"This is homepage jsx",
                            items:[]
                        }
                    ]
                }
            ]
        },
        {
            id:"6",
            name:'Three',
            isFolder:true,
            content:"",
            items:[]
        }
    ]
}

export default data;