import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk";
import { fetchBooks } from "./index";

const testIds = ["0", "1", "2"];
const testEntities = {
  "0": {id: "0", title: "Some book", authors: ["Author name"], categories: ["some category"], image: ""},
  "1": {id: "1", title: "Some book", authors: ["Author name"], categories: ["some category"], image: ""},
  "2": {id: "2", title: "Some book", authors: ["Author name"], categories: ["some category"], image: ""}
}

describe("fetchBooks.test", () => {
  test("without meta arg replace", async () => {
    const thunk = new TestAsyncThunk(fetchBooks, {
      books: {
        ids: testIds,
        entities: testEntities
      }
    })
    await thunk.callThunk({});

    expect(thunk.dispatch).toBeCalledTimes(2); // pending, fulfilled
    expect(thunk.getState).toBeCalledTimes(5);
  })

  test("with meta arg replace", async () => {
    const thunk = new TestAsyncThunk(fetchBooks, {
      books: {
        ids: testIds,
        entities: testEntities
      }
    })
    await thunk.callThunk({ replace: true });

    expect(thunk.dispatch).toBeCalledTimes(2); // pending, fulfilled
    expect(thunk.getState).toBeCalledTimes(5);
  })

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchBooks, {
      books: {
        ids: testIds,
        entities: testEntities
      }
    })
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({});
    expect(result.meta.requestStatus).toBe("rejected");
  })
})