/* eslint-disable @typescript-eslint/no-explicit-any */
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { Root } from "node_modules/remark-unwrap-images/lib";

export function remarkReadingTime() {
	return function (tree: Root, { data }: { data: any }) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
}
