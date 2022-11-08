import Particles from "react-tsparticles";

import React from "react";

const BackgroundParticles = ({ particlesInit, particlesLoaded }) => {
	return (
		<div>
			<Particles
				className="particles"
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 165,
					interactivity: {
						events: {
							resize: true,
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 300,
							enable: true,
							opacity: 1,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 30,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default BackgroundParticles;