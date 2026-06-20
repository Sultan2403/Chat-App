# Todo List

- Define a single canonical app-facing message shape for the socket/app layer.
- Use `AppMessageBase` / `NewMessageType` as the root type with plain string IDs.
- Use `NewMessageValidationSchema` for runtime validation with zod.
- Derive DB-specific message types from that root shape by converting string IDs to `mongoose.Types.ObjectId` only at the persistence boundary.
- Keep internal app code using the app-facing shape, not raw Mongoose internals.
- Update the socket handler to accept `NewMessageType`, validate with zod, then persist and emit the normalized message.

## This is the architecture we'll use:

- Canonical root app type: `AppMessageBase`
- Runtime validation schema: `NewMessageValidationSchema`
- Socket payload type: `NewMessageType`
- DB-specific document type: `DbMessage`

### This should make drift loud at compile time and keep the persistence boundary clear.