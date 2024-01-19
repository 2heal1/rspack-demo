import React from "react";
import { formatRelative, subDays } from "date-fns";

const Component = ({ locale }) => (
	<div id={'remote2-component'} style={{ border: "5px solid darkred" }}>
		<p>I'm a Component exposed from remote2 !</p>
		<p>
			Using date-fn in Remote:{" "}
			{formatRelative(subDays(new Date(), 3), new Date(), { locale })}
		</p>
	</div>
);
export default Component;
