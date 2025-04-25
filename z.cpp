#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *left;
    Node *right;
    Node(int x)
    {
        data = x;
        left = right = NULL;
    }
};
void print(Node *root)
{
    if (!root)
        return;
    cout << root->data << " ";
    print(root->left);
    print(root->right);
}
int main()
{
    cout << "Enter root : ";
    int x;
    cin >> x;
    Node *root = new Node(x);
    queue<Node *> q;
    q.push(root);
    int l, r;
    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();
        cout << "Enter left child of " << temp->data << " : ";
        cin >> l;
        if (l != -1){
            temp->left = new Node(l);
            q.push(temp->left);
        }

        cout << "Enter right child of " << temp->data << " : ";
        cin >> r;
        if (r != -1){
            temp->right = new Node(r);
            q.push(temp->right);
        }
    }
    print(root);
}