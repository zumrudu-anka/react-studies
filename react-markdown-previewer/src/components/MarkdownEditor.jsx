import { store } from "../redux/store";
import { updateAction } from "../redux/actions/updateAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";

export const MarkdownEditor = () => {
	const dispatch = useDispatch();
    
    const updatePreview = (e) => {
		dispatch(updateAction(e.target.value));
	};

	return (
		<section id="editorBox">
			<h1 className="title">
				<FontAwesomeIcon icon={faFreeCodeCamp} />
				Editor
			</h1>
			<textarea id="editor" onChange={(e) => updatePreview(e)}>
				{store.getState().updatePreviewReducer ?? ""}
			</textarea>
		</section>
	);
};