import { Collection } from "../Collection";
import LinkList from "../linklist/LinkList";
import { LinkNode } from "../linklist/LinkNode";
export class Stack<T> extends Collection<LinkNode<T>> {
    private linkList: LinkList<T>;
    constructor(){
        super();
        this.linkList = new LinkList();
    }
    /**
     * 压栈
     * @param node
     */
    public push(node: T){
        return this.linkList.append(node);
    }

    /**
     * 出栈
     *
     */
    public pop(){
        return this.linkList.pop();
    }

    /**
     * 查看栈顶元素
     */
    public peek(){
        if (!this.linkList.getTailNode()){
            return null;
        }
        return this.linkList.getTailNode().Value;
    }

    /**
     * 空栈
     */
    public isEmpty(){
        return !this.linkList.getTailNode();
    }

    public toString(){
        return this.linkList.toString();
    }

    protected __iterate(fn: (item: LinkNode<T>, index: number) => void): void {
        let temp = this.linkList.getHeadNode(),
            index = 0;
        while (temp){
            fn(temp, index);
            index++;
            temp = temp.Next;
        }
    }

    public toArray(){
        return super.toArray().reverse();
    }
}

export default Stack;
