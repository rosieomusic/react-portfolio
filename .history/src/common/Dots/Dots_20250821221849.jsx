import React from 'react';

function Dots({ activeIndex, onclick, sliderProject }) {
	return (
		<div className='all-dots'>
			{sliderProject.map((project, index) => (
				<span
					key={index}
					className={`${activeIndex === index ? 'dot active dot' : 'dot'}`}
					onClick-={() => onclick(index)}
				></span>
			))}
		</div>
	);
}
