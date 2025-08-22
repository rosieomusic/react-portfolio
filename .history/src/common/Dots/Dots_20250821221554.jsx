import React from 'react';

function Dots({ activeIndex, onClick, sliderProject }) {
	return (
		<div className='all-dots'>
			{sliderProject.map((project, index) => (
				<span></span>
			))}
			<span></span>
		</div>
	);
}
