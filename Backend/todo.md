# Todo List

- Decide on whether we work with Message or NewMessageType in the message handler. I think we should be working with Message type.

- If we gonna move with both types, we shd keep both types in sync prob through a type Checker like ts``type TypeMatch<T extends U, U extends T> = true`` or something like that

- But personally? I think we should just be working with Message type in the handler. But the only major challenge is validation which we will need a schema for since zod cant infer schemas from types. 

- Lol personally, I don't wanna declare the same thing twice but we might not really have much of a choice so we might just have to keep them in sync forcefully through the type checker I talked about earlier. 

## Lmao this was just my thought on some architechtural decisions not necessarily a todo list but I just wanted to jot down my thoughts on this.