const hasCycle = (head) => {
    let llistSet = new Set();
    while (head) {
        if (llistSet.has(head)) return true;
        llistSet.add(head);
        head = head.next;
    }
    return false;
};