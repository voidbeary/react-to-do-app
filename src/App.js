function App() {
  return (
    <>
      <header
        className="w-100 py-2 ps-3 mb-4"
        style={{ backgroundColor: "#502", color: "white" }}
        id="bob"
      >
        <h1>To do list</h1>
      </header>
      <main className="container pxsm-5">
        <ul className="list-group"></ul>
        <form>
          <input
            id="new-item"
            className="form-control"
            placeholder="New to do"
            aria-label="new todo text"
            autoFocus=""
            tabIndex="0"
            required
          />
          <label htmlFor="new-item">
            <input
              type="submit"
              value="Add item"
              className="btn btn-primary d-none"
            ></input>
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
