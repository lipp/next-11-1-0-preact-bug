const Test = () => (
	<h3>Hallo
		<style jsx>{`
			h3 {
				border: 3px solid red;
				position: fixed;
				top: 200px;
				background: white;
				transform: translateX(50vw);
				transition: transform 2s;
			}
		`}</style>
	</h3>
)

export default Test
