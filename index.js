class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
    
class BinarySeachTree {
    constructor(){
        this.root = null
    }

    insert(val){
        const newNode = new Node(val)

        if(!this.root){
            this.root = newNode
            return this
        }else{
            let current = this.root
            while(true){
                if(val === current.val) return undefined
                if(val< current.val){
                    if(!current.left){
                        current.left = newNode
                        return this
                    }
                    else{
                        current = current.left
                    }
                }
                else if(val> current.val){
                    if(!current.right){
                        current.right = newNode
                        return this
                    }
                    else{
                        current = current.right
                    }
                }
            }
        }
    }
}

const tree = new BinarySeachTree()
tree.insert(10)
tree.insert(13)
tree.insert(5)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
console.log(tree)