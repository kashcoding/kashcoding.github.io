import { Card, CardContent, CardMedia, Typography, CardActionArea, Chip } from "@material-ui/core";

import { FaUser, FaUsers } from "react-icons/fa";

function SiteCard(props) {
	return (
		<Card style={{ width: "20vw", margin: "1vw" }}>
			<CardActionArea href={props.siteData.url} target="_blank">
				<CardMedia
					component="img"
					height="max-content"
					image={props.siteData.img}
					alt={props.siteData.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.siteData.name}
						<br />
						{props.siteData.type === "solo" ? (
							<Chip icon={<FaUser />} label="SOLO" variant="outlined" />
						) : (
							<Chip icon={<FaUsers />} label="GROUP" variant="outlined" />
						)}
						{props.siteData.time ? (
							<Chip icon={<FaUser />} label={props.siteData.time} variant="outlined" />
						) : null}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.siteData.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default SiteCard;
