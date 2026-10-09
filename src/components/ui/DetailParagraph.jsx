import styled from 'styled-components'

const DetailParagraph = ({ releaseYear, numberOfSeasons, genres }) => {
	return (
		<InfoParagraph>
			{releaseYear} {numberOfSeasons && (numberOfSeasons > 1 ? `â€˘ ${numberOfSeasons} Seasons` : 'â€˘ 1 Season')} â€˘ {genres}
		</InfoParagraph>
	)
}

export default DetailParagraph

const InfoParagraph = styled.p`
	margin: 15px 0 25px;
	text-align: left;

	@media (min-width: 800px) {
		font-size: 16px;
	}

	@media (min-width: 1000px) {
		font-size: 18px;
	}
`
