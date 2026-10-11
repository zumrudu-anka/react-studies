import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { marked } from "marked";
import parse from 'html-react-parser';

marked.use({
	breaks: true
});

export const MarkdownPreviewer = () => {
	const text = useSelector(state => state.updatePreviewReducer);
	return (
		<section id="previewBox">
			<h1 className="title">
				<FontAwesomeIcon icon={faFreeCodeCamp} />
				Previewer
			</h1>
			<div id="preview">{parse(marked.parse(text))}</div>
		</section>
	);
};