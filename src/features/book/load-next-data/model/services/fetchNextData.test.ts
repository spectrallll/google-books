import { fetchNextData } from "./fetchNextData";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk";

const testIds = ["0", "1", "2"];
const testEntities = {
  "0": {id: "0", title: "Some book", authors: ["Author name"], categories: ["some category"], image: ""},
  "1": {id: "1", title: "Some book", authors: ["Author name"], categories: ["some category"], image: ""},
  "2": {id: "2", title: "Some book", authors: ["Author name"], categories: ["some category"], image: ""}
}

describe("fetchNextData.test", () => {
  test("without meta arg replace", async () => {
    const thunk = new TestAsyncThunk(fetchNextData, {
      books: {
        ids: testIds,
        entities: testEntities
      }
    })
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2); // setIndex, fetchBooks
    expect(thunk.getState).toBeCalledTimes(3); // hasMore page isLoading
  })
  // Другие состояния не тестируем ибо далее вызывается другая санка
});
