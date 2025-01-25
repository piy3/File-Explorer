const useTraverseTree = ()=>{
    function insertNode(tree,folderId,item,isFolder){
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder:isFolder,
                items:[]
            })
        }
        for(let i=0;i<tree.items.length;i++){
            insertNode(tree.items[i],folderId,item,isFolder);
        }

        return tree;
    }
    return {insertNode};
}

export default useTraverseTree;