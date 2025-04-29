import { css } from "../../../styled-system/css";

export const sectionWrapper = css({
	backgroundColor: "#F4F8F8",
	color: "#001C5A",
});

export const section = css({
	minBlockSize: "100vh",
	maxInlineSize: "80rem",
	marginInline: "auto",

	paddingBlock: "5rem",
	paddingInline: "1rem",

	fontSize: "clamp(1rem, 0.939rem + 0.2326vw, 1.125rem)",
});

export const filterSection = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "1rem",

	marginInline: "auto",
});

export const filterTitle = css({
	color: "#00081A",

	fontFamily: "boska",
	fontSize: "clamp(2.0736rem, 1.8493rem + 1.1216vw, 2.7466rem)",
	fontWeight: 500,
	lineHeight: "1.125",
	textAlign: "center",
});

export const filters = css({
	display: "flex",
	flexWrap: "wrap",
	gap: "1em",
	justifyContent: "center",

	maxInlineSize: "60rem",

	paddingBlock: "2rem",
});

export const filter = css({
	backgroundColor: "blue",
	color: "white",

	display: "block",

	padding: "0.5em 1em",

	fontSize: "0.875rem",
	fontWeight: 500,

	border: "1px solid blue",
	borderRadius: "2em",

	"li[data-selected=false] &": {
		backgroundColor: "transparent",
		color: "blue",

		_hover: {
			backgroundColor: "blue.100",
		},
	},
});

export const demands = css({
	display: "flex",
	flexDirection: "column",
	gap: "5rem",
	maxInlineSize: "max-content",
	marginInline: "auto",

	paddingBlock: "5rem",
});

export const demand = css({});

export const dateMarker = css({
	display: "flex",
	flexDirection: "column",
	maxInlineSize: "max-content",
	marginInline: "auto",
});

export const demandStated = css({
	display: "inline-block",
	color: "#5C748D",

	marginBlockEnd: "1rem",
	marginInline: "auto",

	fontWeight: 500,
});

export const dateMarkerConnector = css({
	position: "relative",
	blockSize: "5rem",
	inlineSize: "1px",
	borderInlineStart: "1px solid #C9D2DC",
	marginInline: "auto",

	_before: {
		content: "''",
		position: "absolute",
		blockSize: "0.75rem",
		inlineSize: "0.75rem",
		borderRadius: "50%",
		backgroundColor: "#C9D2DC",
		top: "0",
		left: "calc(50% - 0.5px)",
		transform: "translateX(-50%)",
	},
});

export const demandCard = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",

	backgroundColor: "white",

	maxInlineSize: "40rem",
	padding: "1.5rem 2rem",

	border: "1px solid #C9D2DC",
});

export const demandId = css({ fontSize: "0.875rem", fontWeight: 500 });

export const demandTitle = css({
	color: "blue",

	maxInlineSize: "42ch",

	fontSize: "1.5rem",
	fontWeight: 500,
	lineHeight: "1.25",

	_hover: {
		textDecoration: "underline",
	},
});

export const summary = css({
	maxInlineSize: "48ch",

	fontWeight: 500,
});

export const tags = css({
	display: "flex",
	gap: "0.5rem",
});

export const tag = css({
	backgroundColor: "#DFEFF9",

	padding: "0.5em 0.75em",

	maxInlineSize: "max-content",

	fontSize: "0.875rem",
	fontWeight: 500,
	lineHeight: "1",

	borderRadius: "0.25rem",
});
