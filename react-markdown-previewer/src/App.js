import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MarkdownEditor } from "./components/MarkdownEditor";
import { MarkdownPreviewer } from "./components/MarkdownPreviewer";

function App() {
  return (
    <>
        <Provider store={store}>
            <MarkdownEditor />
            <MarkdownPreviewer />
        </Provider>
    </>
  );
}

export default App;
