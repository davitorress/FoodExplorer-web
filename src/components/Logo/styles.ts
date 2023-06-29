import styled from "styled-components";

export const Container = styled.picture`
	width: 100%;
	height: 100%;
	display: block;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
