

public class BinaryTreeDistance {

public static void main(String[] args){

    int[] values = {6,2,5,7,8};
    
    BinaryTreeDistance btd = new BinaryTreeDistance();
    int distance = btd.calculateDistance(values,2,8);

    System.out.println("...distance..."+ distance);

}

public  int calculateDistance(int values[],int node1,int node2){

    TreeNode root = new TreeNode();

    for(int i=0;i< values.length;i++){
        if(i==0) {
            root.item = values[i];
        }else if( i >0  ){
            buildTree(root,values[i]);
        }
    }
    
    int distance = 0;
    TreeNode tempNode = root;
    while(true){
        if(tempNode.item < node1  && )
    }
    // TreeNode node1node = getTreeNode(root,node1);
    // printSingle(node1node);
    // TreeNode isNode2Child = getTreeNode(node1node,node2);
    // printSingle(isNode2Child);
    // if(isNode2Child != null){
    //     TreeNode tempNode = node1node;
    //     while(true){
    //         if(tempNode.item == node2){
    //             break;
    //         }
    //         tempNode = getTreeNode(tempNode,node2);
    //         distance ++;
    //     }
    // }
    
    // if(node1node != null &&  node1node.item != node2){
    //     TreeNode tempNode = node1node;
    //     while(distance < 10){
    //         printSingle(node1node);
    //         printSingle(tempNode.parent);
    //         if(tempNode.item == node2 ){
    //             break;
    //         }else if(tempNode.parent !=null && node2 < tempNode.parent.item ){
    //             tempNode =  tempNode.parent;
    //         }else if(node2 > tempNode.item ){
    //             tempNode =  tempNode.right;   
    //         }else if(node2 < tempNode.item  ) {
    //             tempNode = tempNode.left;
    //         }
            
    //         distance++;
    //     }
        
    // }

    return distance;
}

public static void print(TreeNode parent){
    if(parent == null ) return;
    int leftItem = -1;
    int rightItem = -1;
    if(parent.left != null){
        leftItem = parent.left.item;
        print(parent.left);
    }
    if(parent.right != null){
        rightItem = parent.right.item;
        print(parent.right);
    }
    System.out.println(". parent item.."+parent.item +" left item "+leftItem + " right item "+rightItem);
    
}
public static void printSingle(TreeNode parent){
    if(parent == null ) return;
    int leftItem = -1;
    int rightItem = -1;
    if(parent.left != null){
        leftItem = parent.left.item;        
    }
    if(parent.right != null){
        rightItem = parent.right.item;
    }
    System.out.println(". single parent item.."+parent.item +" left item "+leftItem + " right item "+rightItem);
    
}
public  TreeNode getTreeNode(TreeNode parent,int item){
    if(item == parent.item ){
        return parent;
    }else if(item > parent.item ){
        if(parent.right == null){
           return null;
        }else {
           return getTreeNode(parent.right,item);
        }
    }else if(item < parent.item ){
        if(parent.left == null){
            return null;
        }else {
           return getTreeNode(parent.left,item);
        }
    }

    return null;
}


public  void buildTree(TreeNode parent,int item){
    
    if(item >= parent.item ){
        if(parent.right == null){
            TreeNode child = new TreeNode();
            child.parent = parent;
            child.item = item;
            parent.right = child;
        }else {
            buildTree(parent.right,item);
        }
    }else if(item < parent.item ){
        if(parent.left == null){
            TreeNode child = new TreeNode();
            child.parent = parent;
            child.item = item;
            parent.left = child;
        }else {
            buildTree(parent.left,item);
        }
    }
}

class TreeNode {
    TreeNode  parent;
    int item;
    TreeNode left;
    TreeNode right;
}

}