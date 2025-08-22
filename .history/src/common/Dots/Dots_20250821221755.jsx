import React from 'react';

function Dots({ activeIndex, onClick, sliderProject }) {
	return (
		<div className='all-dots'>
			{sliderProject.map((project, index) => (
				<span
					key={index}
					className={`${activeIndex === index ? 'dot active dot' : 'dot'}`}
				></span>
			))}
			<span></span>
		</div>
	);
}
