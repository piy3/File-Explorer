const useTraverseTree = ()=>{
    function insertNode(tree,folderId,item,isFolder){
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder:isFolder,
                content:"",
                items:[]
            })
        }
        for(let i=0;i<tree.items.length;i++){
            insertNode(tree.items[i],folderId,item,isFolder);
        }

        return tree;
    }
    function updateContent(tree,fileId,content){
        if(tree.id===fileId ){
            tree.content = content;
            return ;
        }
        for(let i=0;i<tree.items.length;i++){
            updateContent(tree.items[i],fileId,content);
        }
        return tree;
    }

    return {insertNode,updateContent};
}

export default useTraverseTree;