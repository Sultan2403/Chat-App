import app from "./app";
import { env } from "./Config/env";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
